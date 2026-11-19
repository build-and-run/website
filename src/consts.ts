import type { ImageMetadata } from 'astro';
import alexis from './assets/team/alexis-ducastel.png';
import ivan from './assets/team/ivan-beaute.png';
import frederic from './assets/team/frederic-leger.jpg';
import emilien from './assets/team/emilien-escalle.jpg';

export const SITE_TITLE = 'Build and Run';
export const SITE_DESCRIPTION =
  'Groupement de Dev et Ops freelance, spécialistes cloud computing, CI/CD, DevOps et infrastructures innovantes.';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/company/build-and-run-fr/',
  x: 'https://x.com/buildAndRunFR',
  slack: 'http://bit.ly/BaR2020',
};

/** Prefix an internal path with the configured base (works on github.io sub-paths). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const SERVICES = [
  {
    icon: 'cloud',
    title: 'Infrastructures cloud',
    text: "Que vous ayez un projet cloud hybride, privé ou public, vous pouvez compter sur notre équipe pour vous accompagner dans le choix d'une architecture sur mesure.",
  },
  {
    icon: 'devops',
    title: 'DevOps',
    text: "L'agilité fait maintenant partie de vos équipes de développement ? Vous êtes prêts pour accélérer ? Nos équipes DevOps sont là pour vous accompagner dans cette phase importante.",
  },
  {
    icon: 'wrench',
    title: 'Maintenance',
    text: "Vous n'avez pas les ressources nécessaires en interne pour maintenir vos serveurs ? Un besoin d'aide ? Un gros souci de performance ? Nos équipes sont là pour vous assister.",
  },
  {
    icon: 'pulse',
    title: 'Support 24/7',
    text: 'Votre plateforme est importante pour vous ? Pour nous aussi. Nous assurons la supervision 24/7 de vos services à l’aide d’une solution externe éprouvée, propulsée par des Ops locaux.',
  },
] as const;

export const PORTFOLIO = [
  { title: 'Architecture BigData', text: 'Pour une startup de la FrenchTech', tag: 'data' },
  { title: 'Migration J2EE vers micro-services', text: 'Pour un acteur du milieu bancaire', tag: 'archi' },
  { title: 'Supervision DevOps', text: '100 % containers, 100 % scalable', tag: 'observability' },
  { title: 'Workflow de CI/CD', text: 'Mise en place de GitLab CE + review apps', tag: 'ci/cd' },
] as const;

export type Member = {
  name: string;
  photo?: ImageMetadata;
  bio: string;
  tags: string[];
};

export const TEAM: Member[] = [
  {
    name: 'Emilien Escalle',
    photo: emilien,
    bio: 'CTO et architecte fullstack, je vous apporte mon expertise pour relever les défis de vos projets numériques : architecture, organisation et stratégie.',
    tags: ['cto', 'architecte', 'fullstack'],
  },
  {
    name: 'Frederic Leger',
    photo: frederic,
    bio: 'Ops avec un gros historique web haute performance, spécialiste des systèmes distribués et automatisés. Fan de cloud, de DevOps, de streaming vidéo et de chatbots.',
    tags: ['cloud', 'devops', 'architecture'],
  },
  {
    name: 'Ivan Beauté',
    photo: ivan,
    bio: 'DevOps évangéliste, j’ai toujours été passionné par le monde des développeurs et du système. Je m’efforce de promouvoir les bonnes pratiques DevOps dans la région d’Aix-Marseille.',
    tags: ['ci/cd', 'docker', 'cloud'],
  },
  {
    name: 'Alexis Ducastel',
    photo: alexis,
    bio: 'Architecte infrastructure DevOps, technophile passionné, fondateur d’infraBuilder et organisateur du meetup « DevOps Aix-Marseille ».',
    tags: ['devops', 'technophile', 'passionné'],
  },
];
