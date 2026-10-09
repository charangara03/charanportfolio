/**
 * Central portfolio data for Gara Lakshmi Charan.
 * Keep all portfolio content in this file.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Gara Lakshmi Charan',
  displayName: 'Charan',
  firstName: 'CHARAN',
  seriesTag: 'MY PORTFOLIO',
  originalLabel: 'A CHARAN ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Full-Stack Developer', 'AI Enthusiast'],
  intro:
    'Computer Science and Engineering graduate focused on software development, web technologies, and AI-powered applications. Experienced in building responsive web applications and developing a brain tumor detection system using deep learning and computer vision.',
  location: 'Tuni, Andhra Pradesh',
  email: 'charangara173@gmail.com',
  phone: '+91 8074598359',
  links: {
    linkedin: 'https://www.linkedin.com/in/charangara',
    github: 'https://github.com/charangara03',
  },
  resumePdf: '/assets/Gara_Lakshmi_Charan_Resume.pdf',
  portrait: {
    src: '/assets/charan-profile.jpg',
    srcSet: '',
    alt: 'Gara Lakshmi Charan profile photo',
  },
  interests: [
    'Software Development',
    'Web Development',
    'Artificial Intelligence',
    'Cloud Computing',
  ],
};

export const education = [
  {
    school: 'Aditya College of Engineering and Technology',
    place: 'Surampalem, Kakinada',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'June 2023 – May 2026',
    score: 'CGPA 7.5/10',
  },
  {
    school: 'Dr. B.R.A. GMR Polytechnic College',
    place: 'Bommuru, Rajahmundry',
    degree: 'Diploma in Computer Engineering',
    period: 'June 2020 – May 2023',
    score: 'Percentage 73.11%',
  },
];

export const experience = [
  {
    company: 'Krify Software Technologies Pvt. Ltd.',
    role: 'Web Development Intern',
    place: 'India',
    period: 'June 2022 – January 2023',
    points: [
      'Developed a responsive full-stack website using HTML, CSS, Bootstrap, JavaScript, and PHP.',
      'Implemented dynamic user interfaces and user authentication features.',
      'Worked on web application development and responsive design.',
    ],
  },
  {
    company: 'SkillDzire',
    role: 'Artificial Intelligence Intern',
    place: 'India',
    period: 'May 2024 – July 2024',
    points: [
      'Built a cross-platform Recipe Generator application using frontend technologies, Python, and APIs.',
      'Implemented personalized recipe suggestions through API integration.',
      'Worked on backend functionality and cloud deployment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const projects: Project[] = [
  {
    id: 'ai-healthcare',
    title: 'AI-Driven Multimodal Healthcare System',
    year: '2026',
    genre: 'AI • Deep Learning • Healthcare',
    logline:
      'An AI-powered healthcare application for MRI-based brain tumor screening and multimodal diagnostics.',
    stack: [
      'Python',
      'Flask',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Deep Learning',
      'Jinja2',
      'CSS',
    ],
    build: [
      'Developed a Flask web application for MRI-based brain tumor screening and multimodal diagnostics.',
      'Implemented deep learning image classification using TensorFlow, Keras, and OpenCV.',
      'Designed patient dashboards and an AI healthcare chatbot using Jinja2 and CSS.',
    ],
    features: [
      'MRI brain tumor screening',
      'Deep learning image classification',
      'Computer vision integration',
      'Patient dashboards',
      'AI healthcare chatbot',
    ],
    metrics: [],
    github:
       'https://github.com/charangara03/Multimodel-AI-HealthCare-System',
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'shield',
  },
  {
    id: 'organic-delivery',
    title: 'Organic Delivery Web Application',
    year: '2026',
    genre: 'Full-Stack • E-commerce • Web',
    logline:
      'A full-stack organic e-commerce platform connecting farmers directly with consumers.',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    build: [
      'Built a full-stack organic e-commerce platform that enables farmers to sell directly to consumers.',
      'Developed shopping cart, order management, and payment-related functionality.',
      'Created a responsive user interface for a smooth experience across devices.',
    ],
    features: [
      'Farmer-to-consumer marketplace',
      'Product browsing',
      'Shopping cart',
      'Order management',
      'Payment functionality',
      'Responsive user interface',
    ],
    metrics: [],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'flow',
  },
  {
    id: 'recipe-generator',
    title: 'Recipe Generator Application',
    year: '2024',
    genre: 'Artificial Intelligence • APIs • Web',
    logline:
      'A cross-platform recipe generator that provides personalized recipe suggestions.',
    stack: ['Python', 'HTML', 'CSS', 'JavaScript', 'APIs'],
    build: [
      'Built a cross-platform Recipe Generator application during an Artificial Intelligence internship.',
      'Integrated APIs to support personalized recipe suggestions.',
      'Worked on frontend functionality, backend integration, and cloud deployment.',
    ],
    features: [
      'Recipe generation',
      'Personalized suggestions',
      'API integration',
      'Cross-platform interface',
      'Cloud deployment',
    ],
    metrics: [],
    palette: {
      from: '#1c1003',
      via: '#6b3c06',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/**
 * Add verified achievements here when you want to display them.
 */
export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'SkillDzire',
    name: 'Artificial Intelligence',
  },
  {
    issuer: 'Krify Software Technologies',
    name: 'Web Development',
  },
  {
    issuer: 'APSSDC',
    name: 'AWS Cloud Computing',
  },
];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming and problem solving',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Responsive web interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Application development',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'Python APIs', mono: 'Py' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and management',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent applications',
    skills: [
      { name: 'Artificial Intelligence', mono: 'AI' },
      { name: 'Deep Learning', mono: 'DL' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Kr' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'API Integration', mono: 'Ap' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    subtitle: 'Development and deployment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Cloud Computing', mono: 'Cl' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Programming languages'],
  Python: ['Recipe Generator', 'AI Healthcare System'],
  C: ['Programming languages'],
  'C++': ['Programming languages'],
  HTML: ['Web Development internship', 'Recipe Generator'],
  CSS: ['Web Development internship', 'Organic Delivery Web Application'],
  Bootstrap: ['Web Development internship'],
  JavaScript: ['Web Development internship'],
  'React.js': ['Organic Delivery Web Application'],
  'Tailwind CSS': ['Organic Delivery Web Application'],
  'Node.js': ['Organic Delivery Web Application'],
  'Express.js': ['Organic Delivery Web Application'],
  PHP: ['Web Development internship'],
  MySQL: ['Database skills'],
  MongoDB: ['Organic Delivery Web Application'],
  'Artificial Intelligence': ['SkillDzire internship', 'Recipe Generator'],
  'Deep Learning': ['AI-Driven Multimodal Healthcare System'],
  TensorFlow: ['AI-Driven Multimodal Healthcare System'],
  Keras: ['AI-Driven Multimodal Healthcare System'],
  OpenCV: ['AI-Driven Multimodal Healthcare System'],
  'API Integration': ['Recipe Generator'],
  Git: ['Version control'],
  GitHub: ['Project repositories'],
  AWS: ['APSSDC AWS Cloud Computing certification'],
  'Cloud Computing': ['APSSDC AWS Cloud Computing certification'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2023',
    synopsis:
      'Building a foundation in Computer Engineering through diploma studies.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Engineering',
        description:
          'Diploma in Computer Engineering at Dr. B.R.A. GMR Polytechnic College, Bommuru, Rajahmundry.',
        tags: ['Diploma', 'Computer Engineering'],
        runtime: 'June 2020 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The B.Tech Journey',
    period: '2023 – 2026',
    synopsis:
      'Pursuing Computer Science and Engineering at Aditya College of Engineering and Technology.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Bachelor of Technology in Computer Science and Engineering, with a CGPA of 7.5/10.',
        tags: ['B.Tech', 'CSE', 'CGPA 7.5/10'],
        runtime: 'June 2023 – May 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Web Development',
    period: '2022 – 2023',
    synopsis:
      'Practical website development experience at Krify Software Technologies.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Web Developer',
        description:
          'Built responsive websites with HTML, CSS, Bootstrap, JavaScript, and PHP, including dynamic interfaces and authentication.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        runtime: 'June 2022 – January 2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Artificial Intelligence',
    period: '2024',
    synopsis:
      'Applying AI concepts, Python, APIs, and web technologies to application development.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Intern',
        description:
          'Developed a Recipe Generator application with personalized suggestions and API integration during the SkillDzire internship.',
        tags: ['Python', 'AI', 'APIs'],
        runtime: 'May 2024 – July 2024',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'Projects & Applications',
    period: '2024 – 2026',
    synopsis:
      'Building web applications and exploring deep learning and computer vision.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Healthcare Project',
        description:
          'Developed an AI healthcare application for MRI brain tumor screening using deep learning and computer vision.',
        tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
        runtime: 'Project',
        palette: jade,
      },
      {
        code: 'S05 E02',
        title: 'The Web Application',
        description:
          'Built an organic e-commerce application connecting farmers and consumers with cart and order functionality.',
        tags: ['React.js', 'Node.js', 'MongoDB'],
        runtime: 'Project',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Primary field',
    title: 'Software Development',
    detail: 'Computer Science and Engineering',
    palette: ocean,
  },
  {
    label: 'AI project',
    title: 'Healthcare System',
    detail: 'MRI screening with deep learning',
    palette: crimson,
  },
  {
    label: 'Full-stack project',
    title: 'Organic Delivery',
    detail: 'Farmer-to-consumer e-commerce',
    palette: jade,
  },
  {
    label: 'Internship',
    title: 'Krify',
    detail: 'Web Development',
    palette: amber,
  },
  {
    label: 'Internship',
    title: 'SkillDzire',
    detail: 'Artificial Intelligence',
    palette: violet,
  },
  {
    label: 'Cloud certification',
    title: 'AWS Cloud Computing',
    detail: 'APSSDC',
    palette: ocean,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'Gara Lakshmi Charan',
    lines: [
      'Software Developer',
      'Computer Science and Engineering',
      'Tuni, Andhra Pradesh',
    ],
    chips: ['Software Development', 'Web Development'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: [
      'Aditya College of Engineering and Technology',
      'CGPA 7.5/10',
      'June 2023 – May 2026',
    ],
    chips: ['B.Tech', 'Computer Science'],
  },
  {
    kicker: 'Skills',
    title: 'Building for the Web',
    lines: [
      'Java, Python, C, C++',
      'HTML, CSS, Bootstrap, React.js',
      'Node.js, Express.js, PHP',
      'MySQL, MongoDB',
    ],
    chips: ['Java', 'Python', 'React.js', 'Node.js'],
  },
  {
    kicker: 'Internships',
    title: 'Learning by Building',
    lines: [
      'Web Development Intern — Krify Software Technologies',
      'Artificial Intelligence Intern — SkillDzire',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Projects That Solve Problems',
    lines: [
      'AI-Driven Multimodal Healthcare System',
      'Organic Delivery Web Application',
      'Recipe Generator Application',
    ],
  },
  {
    kicker: 'Certifications',
    title: 'Professional Learning',
    lines: [
      'Artificial Intelligence — SkillDzire',
      'Web Development — Krify Software Technologies',
      'AWS Cloud Computing — APSSDC',
    ],
  },
  {
    kicker: 'Contact',
    title: 'Let’s Connect',
    lines: [
      'Email: charangara173@gmail.com',
      'GitHub: github.com/charangara03',
      'LinkedIn: linkedin.com/in/charangara',
    ],
  },
];

export type ProfileId =
  | 'sushmita'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Charan',
    blurb: 'The complete portfolio',
    color: '#4cc9ff',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, internships and skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technologies and GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'My journey and project highlights',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Profile • Education & training',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Chapters`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Highlights',
    meta: 'Education, skills & experience',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Certifications',
    card: 'Certifications',
    meta: `${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};
