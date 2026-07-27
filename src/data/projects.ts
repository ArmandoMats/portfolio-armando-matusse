import lablueImage from '../assets/project_image/lablue.webp';
import sopedirImage from '../assets/project_image/sopedir.webp';
import lesfleurImage from '../assets/project_image/lesfleur.webp';
import auroraImage from '../assets/project_image/aurora.webp';
import treatYourselfImage from '../assets/project_image/treatyourself.webp';
import txayaImage from '../assets/project_image/txaya.webp';
import cbeImage from '../assets/project_image/cbe.webp';
import energyworksImage from '../assets/project_image/energyworks.webp';
import makhowoImage from '../assets/project_image/makhowo.webp';
import utcImage from '../assets/project_image/utc.webp';

export interface Project {
  id: string;
  name: string;
  image: string;
  visitUrl: string;
  description: string;
  technologies: string[];
  category?: string;
}

export const projects: Project[] = [
  {
    id: 'cbe',
    name: 'CBE',
    image: cbeImage,
    visitUrl: 'https://cbe.co.mz',
    description: 'Plataforma de recrutamento e seleção desenvolvida para a CBE, otimizando a gestão de candidaturas, publicação de vagas e seleção de talentos.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    category: 'Plataforma de Recrutamento'
  },
  {
    id: 'energyworks',
    name: 'Energy Works',
    image: energyworksImage,
    visitUrl: 'https://energyworks.co.mz',
    description: 'Plataforma web para a Energy Works Lda, empresa moçambicana atuante no mercado desde 2014, especializada em serviços de gestão de qualidade, ambiente e segurança.',
    technologies: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    category: 'Energia & Soluções Tecnológicas'
  },
  {
    id: 'utc',
    name: 'UTC - Uinge Training Center',
    image: utcImage,
    visitUrl: 'https://utc.co.mz',
    description: 'Plataforma de formação e capacitação para o Uinge Training Center, oferecendo aprendizagem presencial, online e híbrida para transformar conhecimento em impacto real.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    category: 'Educação & Treinamento'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    image: auroraImage,
    visitUrl: 'https://aurora.wearearche.com/',
    description: 'Aurora centraliza alunos, matrículas, notas, propinas, documentos e comunicação numa única plataforma segura e intuitiva.',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'REST API', 'Dart', 'Flutter'],
    category: 'Plataforma de Gestão'
  },
  {
    id: 'sopedir',
    name: 'So Pedir',
    image: sopedirImage,
    visitUrl: 'https://sopedir.wearearche.com/',
    description: 'Plataforma corporativa moderna com foco na otimização de processos e identidade visual marcante.',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'REST API', 'Dart', 'Flutter', 'Figma', 'UI/UX'],
    category: 'Plataforma Corporativa'
  },
  {
    id: 'txaya',
    name: 'Txaya',
    image: txayaImage,
    visitUrl: 'https://txaya.wearearche.com',
    description: 'Plataforma de streaming de música e audio 100% Moçambicana. Onde artistas locais encontram o seu público e os fãs encontram os seus artistas favoritos.',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'REST API', 'Dart', 'Flutter', 'Figma', 'UI/UX'],
    category: 'Streaming de Música'
  },
  {
    id: 'makhowo',
    name: 'Makhowo',
    image: makhowoImage,
    visitUrl: 'https://makhowo.co.mz',
    description: 'Plataforma web inovadora construída com foco em dinamismo, acessibilidade e arquitetura de software escalável.',
    technologies: ['React', 'TypeScript', 'UI/UX'],
    category: 'Plataforma Digital'
  },
  {
    id: 'lesfleur',
    name: 'Les Fleur',
    image: lesfleurImage,
    visitUrl: 'https://lesfleurmoz.com/',
    description: 'Solução digital premium desenvolvida com design sofisticado e experiência de utilização fluida.',
    technologies: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    category: 'Web Design Premium'
  },
  {
    id: 'lablue',
    name: 'La Blue',
    image: lablueImage,
    visitUrl: 'https://lablue258.com/',
    description: 'Solução digital premium desenvolvida com design sofisticado e experiência de utilização fluida.',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'REST API'],
    category: 'Solução Digital'
  },
  {
    id: 'treat yourself',
    name: 'Treat Yourself',
    image: treatYourselfImage,
    visitUrl: 'https://treatyourself.wearearche.com/',
    description: 'Plataforma de apresentação para a marca de moda Treat YourSelf, combinando um design visual marcante com uma experiência de utilização fluida.',
    technologies: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    category: 'Plataforma de Moda'
  },
];
