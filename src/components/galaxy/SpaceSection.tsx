import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SpaceSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  marker?: string;
}

export function SpaceSection({ id, className = '', children, marker }: SpaceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 140, scale: 0.88, filter: 'blur(12px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 35%',
            scrub: 0.6,
          },
        }
      );

      // Marcador de jornada aparece suavemente
      const markerEl = section.querySelector('.journey-marker');
      if (markerEl) {
        gsap.fromTo(
          markerEl,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              end: 'top 30%',
              scrub: 0.6,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`space-section ${className}`}>
      {marker && (
        <div className="journey-marker">
          <span className="marker-line" />
          <span className="marker-text">{marker}</span>
        </div>
      )}
      <div ref={contentRef} className="space-content">
        {children}
      </div>
    </section>
  );
}
