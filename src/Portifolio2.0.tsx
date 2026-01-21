import React, { useState } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const PortfolioDois: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'certificates'>('about');

  // Dados do CV
  const profile = {
    name: "Seu Nome",
    title: "Desenvolvedor Full Stack",
    email: "seu.email@exemplo.com",
    github: "https://github.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
    bio: "Desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento web moderno. Focado em criar soluções eficientes e escaláveis utilizando as melhores práticas do mercado."
  };

  const experiences: Experience[] = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Empresa XYZ",
      period: "2023 - Presente",
      description: "Desenvolvimento de aplicações web utilizando React, Node.js e PostgreSQL. Implementação de APIs RESTful e integração com serviços externos."
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Startup ABC",
      period: "2021 - 2023",
      description: "Criação de interfaces responsivas e acessíveis. Trabalho com React, TypeScript e styled-components."
    }
  ];

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamento integrado e painel administrativo.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://projeto1.com",
      github: "https://github.com/usuario/projeto1"
    },
    {
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com autenticação, notificações em tempo real e colaboração em equipe.",
      tech: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/usuario/projeto2"
    },
    {
      title: "Portfolio CMS",
      description: "Sistema de gerenciamento de conteúdo para portfólios com editor visual e geração de sites estáticos.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      link: "https://projeto3.com"
    }
  ];

  const certificates: Certificate[] = [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024"
    },
    {
      name: "Node.js Certification",
      issuer: "LinkedIn Learning",
      date: "2023"
    },
    {
      name: "TypeScript Deep Dive",
      issuer: "Pluralsight",
      date: "2023"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022"
    }
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Express", "MongoDB", 
    "PostgreSQL", "Git", "Docker", "AWS", "REST APIs"
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.avatar}>{profile.name.charAt(0)}</div>
          <div>
            <h1 style={styles.name}>{profile.name}</h1>
            <p style={styles.subtitle}>{profile.title}</p>
          </div>
        </div>
        <div style={styles.socialLinks}>
          <a href={profile.github} style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} style={styles.socialIcon}>
            <Mail size={20} />
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <button
          style={{...styles.navButton, ...(activeTab === 'about' ? styles.navButtonActive : {})}}
          onClick={() => setActiveTab('about')}
        >
          <Briefcase size={18} />
          Sobre & Experiência
        </button>
        <button
          style={{...styles.navButton, ...(activeTab === 'projects' ? styles.navButtonActive : {})}}
          onClick={() => setActiveTab('projects')}
        >
          <Code size={18} />
          Projetos
        </button>
        <button
          style={{...styles.navButton, ...(activeTab === 'certificates' ? styles.navButtonActive : {})}}
          onClick={() => setActiveTab('certificates')}
        >
          <Award size={18} />
          Certificados
        </button>
      </nav>

      {/* Content */}
      <main style={styles.main}>
        {activeTab === 'about' && (
          <div style={styles.section}>
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Sobre Mim</h2>
              <p style={styles.bio}>{profile.bio}</p>
            </div>

            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Habilidades</h2>
              <div style={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <span key={index} style={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Experiência Profissional</h2>
              {experiences.map((exp, index) => (
                <div key={index} style={styles.experienceItem}>
                  <h3 style={styles.experienceTitle}>{exp.title}</h3>
                  <p style={styles.experienceCompany}>{exp.company}</p>
                  <p style={styles.experiencePeriod}>{exp.period}</p>
                  <p style={styles.experienceDescription}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div style={styles.section}>
            <div style={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} style={styles.projectCard}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    {project.link && (
                      <a href={project.link} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Código
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div style={styles.section}>
            <div style={styles.certificatesGrid}>
              {certificates.map((cert, index) => (
                <div key={index} style={styles.certificateCard}>
                  <Award size={24} style={{color: '#3b82f6', marginBottom: '12px'}} />
                  <h3 style={styles.certificateName}>{cert.name}</h3>
                  <p style={styles.certificateIssuer}>{cert.issuer}</p>
                  <p style={styles.certificateDate}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 {profile.name}. Desenvolvido com React + Vite + TypeScript
        </p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    padding: '40px 20px',
    borderBottom: '1px solid #334155',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    color: '#f1f5f9',
  },
  subtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    margin: '4px 0 0 0',
  },
  socialLinks: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '12px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '1px solid #334155',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  navButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
  },
  navButtonActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
    borderColor: '#3b82f6',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '32px',
    border: '1px solid #334155',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#f1f5f9',
  },
  bio: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  skillBadge: {
    padding: '8px 16px',
    backgroundColor: '#334155',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#e2e8f0',
    border: '1px solid #475569',
  },
  experienceItem: {
    marginBottom: '32px',
    paddingBottom: '32px',
    borderBottom: '1px solid #334155',
  },
  experienceTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: '4px',
  },
  experienceCompany: {
    fontSize: '16px',
    color: '#3b82f6',
    marginBottom: '4px',
  },
  experiencePeriod: {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '12px',
  },
  experienceDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #334155',
    transition: 'transform 0.3s',
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#f1f5f9',
  },
  projectDescription: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#cbd5e1',
    marginBottom: '16px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
  },
  techBadge: {
    padding: '4px 12px',
    backgroundColor: '#334155',
    borderRadius: '12px',
    fontSize: '12px',
    color: '#94a3b8',
  },
  projectLinks: {
    display: 'flex',
    gap: '12px',
  },
  projectLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    backgroundColor: '#334155',
    borderRadius: '6px',
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  certificatesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  certificateCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #334155',
    textAlign: 'center',
  },
  certificateName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#f1f5f9',
  },
  certificateIssuer: {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '4px',
  },
  certificateDate: {
    fontSize: '14px',
    color: '#64748b',
  },
  footer: {
    maxWidth: '1200px',
    margin: '40px auto 0',
    padding: '20px',
    borderTop: '1px solid #334155',
  },
  footerText: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '14px',
  },
};

export default PortfolioDois;