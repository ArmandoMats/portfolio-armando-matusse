import { useLayoutEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  ChevronDown,
} from 'lucide-react';
import { projects } from './data/projects';
import { GalaxyBackground, SpaceSection } from './components/galaxy';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  // Carrossel horizontal de projetos — pin + scroll horizontal
  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    let tween: gsap.core.Tween | null = null;
    let trigger: ScrollTrigger | null = null;
    let isReady = false;

    const getTotalScroll = () => track.scrollWidth - carousel.offsetWidth;

    const setupCarousel = () => {
      if (isReady) return;
      const totalScroll = getTotalScroll();
      if (totalScroll <= 0) return;

      isReady = true;
      gsap.set(track, { x: 0 });

      tween = gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
      });

      trigger = ScrollTrigger.create({
        trigger: carousel,
        start: 'top top',
        end: () => `+=${getTotalScroll()}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onUpdate: (self) => {
          const index = Math.min(
            projects.length - 1,
            Math.round(self.progress * (projects.length - 1))
          );
          setActiveProject(index);
        },
      });
    };

    const images = Array.from(carousel.querySelectorAll('img'));
    const totalImages = images.length;
    let loadedCount = 0;

    const onImageReady = () => {
      loadedCount += 1;
      if (loadedCount >= totalImages) {
        // Pequeno delay para garantir layout finalizado
        requestAnimationFrame(() => {
          setupCarousel();
          ScrollTrigger.refresh();
        });
      }
    };

    if (totalImages === 0) {
      setupCarousel();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          onImageReady();
        } else {
          img.addEventListener('load', onImageReady);
          img.addEventListener('error', onImageReady);
        }
      });
    }

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onImageReady);
        img.removeEventListener('error', onImageReady);
      });
      window.removeEventListener('resize', onResize);
      trigger?.kill();
      tween?.kill();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleMockPointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMockClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const start = pointerStartRef.current;
    if (!start) return;

    const moved =
      Math.abs(e.clientX - start.x) > 5 || Math.abs(e.clientY - start.y) > 5;

    pointerStartRef.current = null;

    if (moved) {
      e.preventDefault();
    }
  };

  return (
    <div className="portfolio-container">
      <GalaxyBackground />

      {/* Navegação minimalista */}
      <header className="minimal-header">
        <nav className="minimal-nav">
          <a href="#inicio" className="nav-logo" onClick={(e) => handleScroll(e, 'inicio')}>
            AM
          </a>

          <div className={`minimal-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>Início</a>
            <a href="#resumo" onClick={(e) => handleScroll(e, 'resumo')}>Resumo</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Projetos</a>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Competências</a>
            <a href="#contactar" onClick={(e) => handleScroll(e, 'contactar')}>Contacto</a>
          </div>

          <button
            className="minimal-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className={menuOpen ? 'icon-close' : 'icon-burger'}></span>
          </button>
        </nav>
      </header>

      <main className="galaxy-journey">
        {/* HERO */}
        <SpaceSection id="inicio" className="hero-space">
          <div className="center-stage">
            <p className="eyebrow">Portfólio / 2026</p>
            <h1 className="hero-name">Armando Matusse</h1>
            <h2 className="hero-role">Engenheiro de Software</h2>
            <p className="hero-description">
              Estudante finalista de Engenharia Informática com +2 anos de experiência
              a criar soluções digitais funcionais, escaláveis e bem desenhadas.
            </p>
          </div>
          {/* <div className="scroll-cue">
            <span>Desliza</span>
            <ChevronDown size={18} />
          </div> */}
        </SpaceSection>

        {/* RESUMO */}
        <SpaceSection id="resumo" className="resume-space">
          <div className="center-stage narrow">
            <p className="eyebrow">Experiência</p>
            <h3 className="section-title">Resumo</h3>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">2023 – 2026(Previsão de conclusaão)</span>
                <h4>Licenciatura em Engenharia Informática</h4>
                <p>ISCTEM — 4.º Ano, 1.º Semestre</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">Em Curso</span>
                <h4>Estágio Profissional</h4>
                <p>CBE — desenvolvimento de software (Full-Stack) e suporte técnico</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">Contínuo</span>
                <h4>Projectos Pessoais e em Grupo</h4>
                <p>Web & Mobile, UI/UX, Backend e Frontend</p>
              </div>
            </div>
          </div>
        </SpaceSection>

        {/* PROJETOS — carrossel horizontal de MacBooks */}
        <section id="portfolio" className="portfolio-space" ref={carouselRef}>
          <div className="portfolio-carousel-inner">
            <div className="portfolio-carousel-header">
              <p className="eyebrow">Trabalhos</p>
              <h3 className="section-title">Projectos</h3>
            </div>
            <div className="portfolio-carousel-viewport">
              <div className="carousel-track" ref={trackRef}>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`macbook-card ${index === activeProject ? 'active' : ''}`}
                  >
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="macbook-link"
                      aria-label={`Visitar site de ${project.name}`}
                      onPointerDown={handleMockPointerDown}
                      onClick={handleMockClick}
                    >
                      <div className="macbook-frame">
                        <div className="macbook-camera"></div>
                        <div className="macbook-screen">
                          <img src={project.image} alt={project.name} />
                        </div>
                      </div>
                      <div className="macbook-base">
                        <div className="macbook-hinge"></div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-detail">
              <span className="project-counter">
                {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <h4>{projects[activeProject].name}</h4>
              <p>{projects[activeProject].description}</p>
              <div className="tech-row">
                {projects[activeProject].technologies.slice(0, 6).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <SpaceSection id="skills" className="skills-space">
          <div className="center-stage">
            <p className="eyebrow">Domínios</p>
            <h3 className="section-title">Competências</h3>

            <div className="skills-list detailed">
              <div className="skill-block">
                <h4>Programação & Desenvolvimento</h4>
                <ul>
                  <li><strong>Linguagens:</strong> Java, JavaScript, TypeScript, Dart, Kotlin, Swift (em processo de aprendizagem)</li>
                  <li><strong>Web & Mobile:</strong> HTML, CSS, Android (Kotlin), Flutter</li>
                  <li><strong>Frameworks:</strong> Spring Boot, Flutter, Express.js, React, Angular</li>
                  <li><strong>DevOps & Ferramentas:</strong> Docker, Figma</li>
                </ul>
              </div>
              <div className="skill-block">
                <h4>Engenharia de Software & UI/UX</h4>
                <ul>
                  <li><strong>UI/UX:</strong> Prototipagem & Design de Interfaces (Figma)</li>
                  <li>Análise e levantamento de requisitos</li>
                  <li>Design de Software & POO</li>
                  <li>Arquitetura básica de sistemas</li>
                  <li>Boas práticas de desenvolvimento</li>
                </ul>
              </div>
              <div className="skill-block">
                <h4>Bases & Engenharia de Dados</h4>
                <ul>
                  <li><strong>SGBDs:</strong> Oracle, MySQL, PostgreSQL</li>
                  <li>Modelagem MER</li>
                  <li>Normalização</li>
                  <li>Consultas SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </SpaceSection>

        {/* CONTACTO */}
        <SpaceSection id="contactar" className="contact-space">
          <div className="center-stage narrow">
            <p className="eyebrow">Contacto</p>
            <h3 className="section-title">Vamos conversar?</h3>

            <div className="contact-info">
              <a href="tel:+258858425262" className="contact-link">
                <Phone size={18} /> +258 85 842 5262
              </a>
              <a href="tel:+258875999816" className="contact-link">
                <Phone size={18} /> +258 87 599 9816
              </a>
              <a href="mailto:armandomatusse4002@gmail.com" className="contact-link">
                <Mail size={18} /> armandomatusse4002@gmail.com
              </a>
            </div>

            <form className="contact-form" action="https://formspree.io/f/mgooqokp" method="post">
              <input type="text" name="nome" placeholder="Nome" required />
              <input type="email" name="email" placeholder="E-mail" required />
              <textarea name="mensagem" rows={4} placeholder="Mensagem" required></textarea>
              <button type="submit" className="button-enviar">
                Enviar <Send size={16} />
              </button>
            </form>
          </div>
        </SpaceSection>
      </main>

      <footer className="minimal-footer">
        <p>© 2026 Armando Matusse</p>
      </footer>
    </div>
  );
}

export default App;
