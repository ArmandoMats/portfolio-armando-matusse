import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
  size: number;
}

const FOV = 200;
const BASE_SPEED = 0.7;

function getStarCount() {
  if (typeof window === 'undefined') return 800;
  const width = window.innerWidth;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return 200;
  if (width < 768) return 450;
  if (width < 1200) return 700;
  return 1000;
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const runningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let starCount = getStarCount();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const resetStar = (star: Star, zStart?: number) => {
      const spread = Math.max(width, height) * 2.6;
      star.x = (Math.random() - 0.5) * spread;
      star.y = (Math.random() - 0.5) * spread;
      star.z = zStart ?? Math.random() * 1800 + 150;
      star.prevX = star.x;
      star.prevY = star.y;
      star.size = Math.random() * 1.4 + 0.35;
    };

    const initStars = () => {
      starCount = getStarCount();
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        const star: Star = { x: 0, y: 0, z: 0, prevX: 0, prevY: 0, size: 0 };
        resetStar(star, Math.random() * 2000);
        stars.push(star);
      }
      starsRef.current = stars;
    };

    initStars();

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    const project = (star: Star) => {
      const scale = FOV / star.z;
      return {
        x: width / 2 + star.x * scale,
        y: height / 2 + star.y * scale,
        scale,
      };
    };

    const animate = () => {
      if (!runningRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(0, 0, 0, 0.32)';
      ctx.fillRect(0, 0, width, height);

      const progress = scrollProgressRef.current;
      const speed = BASE_SPEED + Math.pow(progress, 0.6) * 16;

      starsRef.current.forEach((star) => {
        // Guarda projeção anterior para desenhar rastro
        const prev = project(star);
        star.prevX = prev.x;
        star.prevY = prev.y;

        // Avança em Z (aproxima-se do observador)
        star.z -= speed;

        // Se passou do observador, reinicia no fundo
        if (star.z <= 10) {
          resetStar(star);
        }

        const curr = project(star);

        // Só desenha se estiver dentro do ecrã
        if (
          curr.x < -50 ||
          curr.x > width + 50 ||
          curr.y < -50 ||
          curr.y > height + 50
        ) {
          return;
        }

        const depthAlpha = Math.min(1, Math.max(0.12, 1 - star.z / 2200));
        const lineWidth = Math.max(0.5, curr.scale * star.size * 0.55);
        const lineLength = Math.min(
          180,
          Math.hypot(curr.x - star.prevX, curr.y - star.prevY) * 2.2
        );

        const angle = Math.atan2(curr.y - star.prevY, curr.x - star.prevX);
        const tailX = curr.x - Math.cos(angle) * lineLength;
        const tailY = curr.y - Math.sin(angle) * lineLength;

        const grad = ctx.createLinearGradient(tailX, tailY, curr.x, curr.y);
        grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${depthAlpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resize();
      initStars();
    };

    const handleVisibility = () => {
      runningRef.current = document.visibilityState === 'visible';
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      trigger.kill();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="galaxy-canvas"
      aria-hidden="true"
      style={{ background: '#000' }}
    />
  );
}
