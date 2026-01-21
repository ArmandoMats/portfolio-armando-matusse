import React, { useState } from 'react';
import { Code2, Settings, Database, ChevronRight, Mail, Phone, Send } from 'lucide-react';
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
                Estudante finalista de Engenharia Informática apaixonado por programação e engenharia de software.
                Transformo ideias em código, criando soluções digitais funcionais, escaláveis e bem desenhadas.
              </p>

              {/* Botao*/}
              <div className="hero-actions">
                {/* <button className="btn-primary">Ver Projetos</button> */}

                {/* Botao contactar */}
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
            <h3 className="section-title">Formação Acadêmica</h3>
            <div className="section-underline"></div>
            
            <div className="cards-container">
              {/* Card 1 */}
              <div className="education-card">
                <div className="card-badge">01</div>
                <span className="card-date">2023 – 2026</span>
                <h4 className="card-title">Licenciatura em Engenharia Informática</h4>
                <p className="card-institution">ISCTEM</p>
                <p className="card-status">Atualmente no 4.º Ano – 1.º Semestre</p>
                <div className="status-indicator current">Em andamento</div>
              </div>
            </div>
          </section>

          {/* Section Portfólio */}
          <section id="portfolio" className="portfolio-section">
            <h3 className="section-title">Projetos em Destaque</h3>
            <div className="section-underline"></div>

            <div className="projects-grid">
              {/* Projeto 1: Gestão Académica */}
              <article className="project-card">
                <div className="project-content">
                  <span className="project-category">Projeto em Grupo</span>
                  <h4 className="project-title">Sistema de Gestão Académica</h4>
                  <p className="project-text">
                    Sistema de gestão escolar completo desenvolvido para apoiar a administração académica e pedagógica de instituições de ensino. 
                    Permite o cadastro e gestão de alunos, docentes e turmas, controlo de inscrições e matrículas, organização de disciplinas e horários, 
                    lançamento, consulta e visualização de notas, acompanhamento do desempenho académico e gestão de histórico escolar. 
                    O sistema inclui módulos para gestão administrativa, controlo de utilizadores e permissões, centralização e segurança de dados, 
                    relatórios académicos e operacionais, bem como interfaces intuitivas para administradores, docentes e estudantes.
                  </p>

                  <div className="tech-stack">
                    <span>Java</span> <span>React</span> <span>PostgreSQL</span> <span>Figma</span>
                  </div>
                </div>
              </article>

              {/* Projeto 2: Gestão de Ginásio */}
              <article className="project-card">
                <div className="project-content">
                  <span className="project-category">Projeto Individual</span>
                  <h4 className="project-title">Sistema de Gestão de Ginásio</h4>
                <p className="project-text">
                  Sistema de gestão de ginásio desenvolvido para apoiar a administração de membros e operações financeiras.
                  Permite o registo e gestão de clientes, controlo de inscrições e planos, processamento de pagamentos,
                  emissão e gestão de recibos, acompanhamento de mensalidades, histórico financeiro e controlo de acessos.
                  Inclui uma interface desktop optimizada para desempenho e usabilidade, integração com API REST,
                  centralização segura de dados e suporte a relatórios administrativos e financeiros.
                </p>

                  <div className="tech-stack">
                    <span>Flutter</span> <span>MySQL</span> <span>Express.js</span>
                  </div>
                </div>
              </article>

              {/* Projeto 3: Delivery */}
              <article className="project-card featured">
                <div className="project-content">
                  <span className="project-category">Projeto em Grupo</span>
                  <h4 className="project-title">Sistema de Delivery Mobile</h4>
                  <p className="project-text">
                    Sistema de delivery mobile desenvolvido para suportar pedidos, acompanhamento em tempo real
                    e serviços baseados em localização. Permite o registo de utilizadores, criação e gestão de pedidos,
                    visualização de rotas, cálculo de distâncias, acompanhamento do estado das entregas em mapa,
                    integração com serviços de geolocalização e comunicação com serviços backend.
                    A solução utiliza uma arquitetura moderna, com integração de mapas e suporte à containerização.
                  </p>

                  <div className="tech-stack">
                    <span>Flutter</span> <span>Spring Boot</span> <span>Docker</span> <span>Mapbox</span> <span>GoogleMaps</span> <span>Figma</span> 
                  </div>
                </div>
              </article>
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
                  <li><ChevronRight size={14} className="list-icon" /> <strong>Linguagens:</strong> Java, JavaScript, Dart</li>
                  <li><ChevronRight size={14} className="list-icon" /> <strong>Web:</strong> HTML, CSS, React</li>
                  <li><ChevronRight size={14} className="list-icon" /> <strong>Frameworks:</strong> Spring Boot, Flutter, Express.js</li>
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
                <h4>Informações de Contato</h4>
                <p>Sinta-se à vontade para entrar em contato para projetos ou colaborações.</p>
                
                <div className="info-item">
                  <Phone size={20} color="#AEC3B0" />
                  <span>+258 85 842 5262  ||  +258 87 599 9816</span>
                </div>
                
                <div className="info-item">
                  <Mail size={20} color="#AEC3B0" />
                  <span>armandomatusse4002@gmail.com</span>
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
                  <textarea id="mensagem" name="mensagem" rows={5} placeholder="Como posso ajudar no seu projeto?" required></textarea>
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