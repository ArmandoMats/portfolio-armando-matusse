import React, { useState } from 'react';
import { Code2, Settings, Database, ChevronRight, Mail, Phone, Send, ExternalLink } from 'lucide-react';
import { projects } from './data/projects';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculamos a posição do elemento subtraindo a altura do header fixo (ex: 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMenuOpen(false);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navegação */}
      <header className="main-header">
        <nav className="nav-wrapper">

          {/* Links de navegacao */}
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>Início</a>
            <a href="#resumo" onClick={(e) => handleScroll(e, 'resumo')}>Resumo</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')}>Portfólio</a>
            <a href="#contactar" onClick={(e) => handleScroll(e, 'contactar')}>Contactar</a>
          </div>

          {/* Menu Hamburger */}
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'icon-close' : 'icon-burger'}></span>
          </button>
        </nav>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            {/* Avatar AM */}
            <div className="avatar-circle">AM</div>

            {/* Nome */}
            <h1 className="hero-name">Armando Matusse</h1>

            {/* Titulo */}
            <h2 className="hero-role">Engenheiro de Software</h2>

            <p className="hero-description">
              Estudante finalista de Licenciatura em Engenharia Informática apaixonado por programação e engenharia de software.
              Com <strong>+2 anos de experiência prática</strong> no desenvolvimento de soluções digitais funcionais, escaláveis e bem desenhadas.
            </p>

            {/* Botões */}
            <div className="hero-actions">
              <a href="#portfolio" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Ver Projetos
              </a>
              <a href="#contactar" className="btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-block' }}>
                Contactar
              </a>
            </div>
          </div>
        </section>

        {/* Seção Resumo */}
        <section id="resumo" className="resumo-section">
          {/* Titulo */}
          <h3 className="section-title">Resumo & Experiência</h3>
          <div className="section-underline"></div>

          <div className="cards-container">
            {/* Card 1: Formação Académica */}
            <div className="education-card">
              <div className="card-badge">01</div>
              <span className="card-date">2023 – 2026</span>
              <h4 className="card-title">Licenciatura em Engenharia Informática</h4>
              <p className="card-institution">ISCTEM</p>
              <p className="card-status">Atualmente no 4.º Ano – 1.º Semestre</p>
              <div className="status-indicator current">Em andamento</div>
            </div>

            {/* Card 2: Experiência Profissional */}
            <div className="education-card">
              <div className="card-badge">02</div>
              <span className="card-date">6 Meses</span>
              <h4 className="card-title">Estágio Profissional</h4>
              <p className="card-institution">CBE</p>
              <p className="card-status">Estágio de 6 meses focado em desenvolvimento de software, suporte técnico e vivência em ambiente corporativo.</p>
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(174, 195, 176, 0.2)', fontSize: '14px', color: 'var(--cream-green)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div><strong>Recomendação:</strong> Edwin Matlaba (<a href="tel:+258840488810" style={{ color: 'var(--cream-green)', textDecoration: 'underline' }}>+258 84 048 8810</a>)</div>
                <div><strong>Recomendação:</strong> Eleuterio Notico (<a href="tel:+258860675700" style={{ color: 'var(--cream-green)', textDecoration: 'underline' }}>+258 86 067 5700</a>)</div>
              </div>
              <div className="status-indicator completed">Concluído</div>
            </div>

            {/* Card 3: Experiências Pessoais & Projectos */}
            <div className="education-card">
              <div className="card-badge">03</div>
              <span className="card-date">Contínuo</span>
              <h4 className="card-title">Experiências Pessoais & Práticas</h4>
              <p className="card-institution">Projectos Individuais e em Grupo</p>
              <p className="card-status">Desenvolvimento de soluções completas (Web & Mobile), atuando desde a concepção de UI/UX à implementação Backend e Frontend.</p>
              <div className="status-indicator current">Em andamento</div>
            </div>

          </div>
        </section>

        {/* Section Portfólio */}
        <section id="portfolio" className="portfolio-section">
          <h3 className="section-title">Projectos em Destaque</h3>
          <div className="section-underline"></div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className="project-content">
                  {project.category && (
                    <span className="project-category">{project.category}</span>
                  )}
                  <h4 className="project-title">{project.name}</h4>
                  <p className="project-text">{project.description}</p>

                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-visit"
                    >
                      <span>Visitar Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section Skills */}
        <section id="skills" className="skills-section">
          <h3 className="section-title">Competências Técnicas</h3>
          <div className="section-underline"></div>

          <div className="skills-grid">
            {/* Bloco 1: Programação */}
            <div className="skill-category">
              <div className="category-header">
                <Code2 size={32} color="#AEC3B0" strokeWidth={1.5} />
                <h4>Programação & Desenvolvimento</h4>
              </div>
              <ul className="skill-list">
                <li><ChevronRight size={14} className="list-icon" /> <strong>Linguagens:</strong> Java, JavaScript, TypeScript, Dart, Kotlin, Swift</li>
                <li><ChevronRight size={14} className="list-icon" /> <strong>Web:</strong> HTML, CSS</li>
                <li><ChevronRight size={14} className="list-icon" /> <strong>Frameworks:</strong> Spring Boot, Flutter, Express.js, React, Angular</li>
                <li><ChevronRight size={14} className="list-icon" /> <strong>DevOps & Ferramentas:</strong> Docker</li>
              </ul>
            </div>

            {/* Bloco 2: Engenharia de Software */}
            <div className="skill-category">
              <div className="category-header">
                <Settings size={32} color="#AEC3B0" strokeWidth={1.5} />
                <h4>Engenharia de Software</h4>
              </div>
              <ul className="skill-list">
                <li><ChevronRight size={14} className="list-icon" /> Análise e levantamento de requisitos</li>
                <li><ChevronRight size={14} className="list-icon" /> Design de Software & POO</li>
                <li><ChevronRight size={14} className="list-icon" /> Arquitetura básica de sistemas</li>
                <li><ChevronRight size={14} className="list-icon" /> Boas práticas de desenvolvimento</li>
              </ul>
            </div>

            {/* Bloco 3: Dados */}
            <div className="skill-category">
              <div className="category-header">
                <Database size={32} color="#AEC3B0" strokeWidth={1.5} />
                <h4>Bases & Engenharia de Dados</h4>
              </div>
              <ul className="skill-list">
                <li><ChevronRight size={14} className="list-icon" /> <strong>SGBDs:</strong> Oracle, MySQL, PostgreSQL</li>
                <li><ChevronRight size={14} className="list-icon" /> Modelagem MER</li>
                <li><ChevronRight size={14} className="list-icon" /> Normalização</li>
                <li><ChevronRight size={14} className="list-icon" /> Consultas SQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contactar" className="contact-section">
          <h3 className="section-title">Vamos conversar?</h3>
          <div className="section-underline"></div>

          <div className="contact-container">
            {/* Info Lateral */}
            <div className="contact-info">
              <h4>Informações de Contacto</h4>
              <p>Sinta-se à vontade para entrar em contacto para projectos ou colaborações.</p>

              <div className="info-item">
                <Phone size={20} color="#AEC3B0" />
                <span>
                  <a href="tel:+258858425262" style={{ color: 'inherit', textDecoration: 'none' }}>+258 85 842 5262</a>
                  {'  ||  '}
                  <a href="tel:+258875999816" style={{ color: 'inherit', textDecoration: 'none' }}>+258 87 599 9816</a>
                </span>
              </div>

              <div className="info-item">
                <Mail size={20} color="#AEC3B0" />
                <a href="mailto:armandomatusse4002@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <span>armandomatusse4002@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Formulário */}
            <form className="contact-form" action="https://formspree.io/f/mgooqokp" method="post">
              <div className="input-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com" required />
              </div>

              <div className="input-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} placeholder="Como posso ajudar no seu projecto?" required></textarea>
              </div>

              <button type="submit" className="button-enviar">
                <span>Enviar Mensagem</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <p>© 2026 Armando Matusse. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;