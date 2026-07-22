import lablueImage from '../assets/project_image/lablue.webp';
import sopedirImage from '../assets/project_image/sopedir.webp';
import lesfleurImage from '../assets/project_image/lesfleur.webp';
import auroraImage from '../assets/project_image/aurora.webp';
import treatYourselfImage from '../assets/project_image/treatyourself.webp';
import txayaImage from '../assets/project_image/txaya.webp';

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
    description: 'Plataforma de streaming de música 100% Moçambicana. Onde artistas locais encontram o seu público e os fãs encontram os seus artistas favoritos.',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'PostgreSQL', 'REST API', 'Dart', 'Flutter', 'Figma', 'UI/UX'],
    category: 'Streaming de Música'
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
