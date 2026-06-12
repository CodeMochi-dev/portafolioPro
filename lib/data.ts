export interface Project {
  id: number
  title: string
  slogan?: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  codeUrl: string
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'UI/UX'
  status: 'Terminado' | 'En desarrollo' | 'Prototipo'
  featured: boolean
  gradient: string
  themeColor: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EcoMarket',
    slogan: 'Sostenibilidad en cada Compra',
    description: 'Plataforma e-commerce SPA desarrollada con Vue 3 enfocada en la sostenibilidad. Implementa gestión de estado reactivo, internacionalización completa y un diseño UI/UX premium orientado a maximizar la conversión.',
    image: '/projects/ecomarket.png',
    technologies: ['Vue 3', 'Composition API', 'Responsive UI', 'i18n'],
    demoUrl: 'https://codemochi-dev.github.io/analisis-de-caso-Ecomarket',
    codeUrl: 'https://github.com/CodeMochi-dev/analisis-de-caso-Ecomarket',
    category: 'Frontend',
    status: 'Terminado',
    featured: true,
    gradient: 'from-[#064e3b] via-[#065f46] to-[#047857]',
    themeColor: '#10b981'
  },
  {
    id: 2,
    title: 'LibroApp',
    slogan: 'Biblioteca Virtual',
    description: 'Aplicación web integral para la gestión de bibliotecas personales. Arquitectura Serverless utilizando Firebase Firestore para operaciones CRUD en tiempo real, con sistema de filtrado avanzado y autenticación segura.',
    image: '/projects/libroapp.png',
    technologies: ['Vue.js', 'Firebase', 'NoSQL', 'State Management'],
    demoUrl: 'https://m6-abp.vercel.app/login',
    codeUrl: 'https://github.com/CodeMochi-dev/M6-ABP',
    category: 'Full Stack',
    status: 'Terminado',
    featured: true,
    gradient: 'from-[#4338ca] via-[#4f46e5] to-[#6366f1]',
    themeColor: '#6366f1'
  },
  {
    id: 3,
    title: 'SmartBudget',
    slogan: 'Gestiona tus finanzas con inteligencia',
    description: 'Dashboard financiero interactivo diseñado para el control de presupuestos y metas de ahorro. Desarrollado con Vue.js y JavaScript moderno, presentando visualizaciones de datos en una interfaz minimalista e intuitiva.',
    image: '/projects/smartbudget.png',
    technologies: ['Vue.js', 'JavaScript ES6+', 'CSS3', 'UI/UX Design'],
    demoUrl: 'https://codemochi-dev.github.io/Proyecto-ABP-M3/',
    codeUrl: 'https://github.com/CodeMochi-dev/Proyecto-ABP-M3',
    category: 'Frontend',
    status: 'Terminado',
    featured: true,
    gradient: 'from-[#1e1b4b] via-[#312e81] to-[#3730a3]',
    themeColor: '#3b82f6'
  },
  {
    id: 4,
    title: 'Alke Wallet',
    slogan: 'Tu Dinero, Más Simple',
    description: 'Billetera virtual responsiva construida con tecnologías web fundamentales. Demuestra dominio sólido de HTML semántico, CSS grid/flexbox y manipulación del DOM con JavaScript, junto con integración de flujos Git/GitHub.',
    image: '/projects/alkewallet.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
    demoUrl: 'https://alke-wallet1-deployment.vercel.app/',
    codeUrl: 'https://github.com/CodeMochi-dev/alke-wallet1-deployment',
    category: 'Frontend',
    status: 'Terminado',
    featured: false,
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
    themeColor: '#3b82f6'
  },
  {
    id: 5,
    title: 'Chinchintirapié – Escuela Carnavalera',
    slogan: 'Proyecto Integrador - Front-End Developer',
    description: 'Plataforma web autogestionable con arquitectura cliente-servidor para difusión cultural. Lideré el desarrollo frontend implementando consumo eficiente de APIs REST, interfaces responsivas con Bootstrap 5 y una experiencia de usuario optimizada.',
    image: '/projects/chinchintirapie.png',
    technologies: ['React', 'Vite', 'TypeScript', 'Bootstrap 5', 'REST APIs', 'Arquitectura Frontend'],
    demoUrl: 'https://chinchintirapie-backend-frontend-psi.vercel.app/',
    codeUrl: 'https://github.com/2197natashacruz-droid/chinchintirapie-backend-frontend',
    category: 'Frontend',
    status: 'Terminado',
    featured: true,
    gradient: 'from-[#be123c] via-[#e11d48] to-[#f43f5e]',
    themeColor: '#e11d48'
  },
  {
    id: 6,
    title: '¡Bienvenido a PokéCapture!',
    slogan: 'Explora, busca y captura Pokémon',
    description: 'Aplicación web interactiva tipo Pokédex impulsada por React 18 y Vite. Implementa geolocalización con React Leaflet, enrutamiento dinámico, animaciones CSS personalizadas y un sólido sistema de tematización mediante variables CSS globales.',
    image: '/projects/PokeCapture.png',
    technologies: ['React 18', 'Vite', 'React Router v6', 'React Leaflet', 'CSS Modules', 'Web Animations'],
    demoUrl: 'https://poke-capture-eight.vercel.app/login',
    codeUrl: 'https://github.com/CodeMochi-dev/PokeCapture',
    category: 'Frontend',
    status: 'Terminado',
    featured: true,
    gradient: 'from-[#16a34a] via-[#22c55e] to-[#4ade80]',
    themeColor: '#22c55e'
  }
]

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Design' | 'Soft Skills'
}

export const skills: Skill[] = [
  { name: 'Vue.js', icon: '⚡', level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: '📜', level: 85, category: 'Frontend' },
  { name: 'HTML5', icon: '🌐', level: 95, category: 'Frontend' },
  { name: 'CSS3/SCSS', icon: '🎨', level: 90, category: 'Frontend' },
  { name: 'React', icon: '⚛️', level: 75, category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', level: 70, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 85, category: 'Frontend' },
  { name: 'Java', icon: '☕', level: 60, category: 'Backend' },
  { name: 'Spring Boot', icon: '🍃', level: 55, category: 'Backend' },
  { name: 'Firebase', icon: '🔥', level: 80, category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', level: 65, category: 'Database' },
  { name: 'Git', icon: '📂', level: 85, category: 'Tools' },
  { name: 'GitHub', icon: '🐙', level: 85, category: 'Tools' },
  { name: 'VS Code', icon: '💻', level: 90, category: 'Tools' },
  { name: 'Figma', icon: '🎯', level: 70, category: 'Design' },
  { name: 'UI/UX', icon: '✨', level: 75, category: 'Design' },
  { name: 'Trabajo en Equipo', icon: '🤝', level: 95, category: 'Soft Skills' },
  { name: 'Comunicación', icon: '💬', level: 90, category: 'Soft Skills' },
  { name: 'Resolución de Problemas', icon: '🧩', level: 85, category: 'Soft Skills' },
]

export interface Education {
  id: number
  title: string
  institution: string
  period: string
  description: string
  type: 'degree' | 'bootcamp' | 'certification'
}

export const education: Education[] = [
  {
    id: 1,
    title: 'Full Stack Java Developer',
    institution: 'Generation Chile',
    period: '2025 - 2026',
    description: 'Bootcamp intensivo de desarrollo Full Stack con enfoque en Java y Spring Boot para soluciones backend robustas.',
    type: 'bootcamp'
  },
  {
    id: 2,
    title: 'Front-End Developer',
    institution: 'Reinvéntate - Sence con Talento Digital',
    period: '2025 - 2026',
    description: 'Formación especializada en desarrollo Front-End con Vue.js, JavaScript moderno y buenas prácticas de desarrollo.',
    type: 'bootcamp'
  },
  {
    id: 3,
    title: 'Técnico en Administración',
    institution: 'Instituto Profesional',
    period: '2018 - 2020',
    description: 'Formación técnica con énfasis en gestión de datos y procesos administrativos.',
    type: 'degree'
  }
]

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  modality: 'Remoto' | 'Híbrido' | 'Presencial'
  responsibilities: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 1,
    title: 'Ejecutivo de Soporte Digital',
    company: 'Blue Express (vía Manpower)',
    period: 'Febrero 2024 - Noviembre 2024',
    modality: 'Presencial',
    responsibilities: [
      'Gestioné requerimientos técnicos de usuarios a través de plataformas CRM y canales digitales',
      'Colaboré con equipos técnicos para escalar incidencias complejas y mejorar flujos de trabajo',
      'Mantuve un SLA de respuesta inferior a 5 minutos para más de 100 requerimientos diarios'
    ],
    technologies: ['CRM', 'Soporte Técnico', 'Gestión de Incidencias']
  },
  {
    id: 2,
    title: 'Gestión de Datos Hospitalarios',
    company: 'Sistema de Salud',
    period: '2020 - 2024',
    modality: 'Presencial',
    responsibilities: [
      'Gestión de datos críticos del sistema hospitalario',
      'Trabajo con sistemas CRM y bases de datos',
      'Análisis de información y reportes',
      'Trabajo bajo presión con alta atención al detalle'
    ],
    technologies: ['Excel', 'Sistemas CRM', 'Bases de datos']
  }
]

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creación de sitios y aplicaciones web modernas, responsivas y de alto rendimiento.',
    icon: 'Code'
  },
  {
    id: 2,
    title: 'Landing Pages',
    description: 'Diseño y desarrollo de páginas de aterrizaje optimizadas para conversión.',
    icon: 'Layout'
  },
  {
    id: 3,
    title: 'Aplicaciones Frontend',
    description: 'Desarrollo de SPAs con Vue.js y React con las mejores prácticas.',
    icon: 'Smartphone'
  },
  {
    id: 4,
    title: 'Integración de APIs',
    description: 'Conexión y consumo de servicios REST y bases de datos en tiempo real.',
    icon: 'Plug'
  },
  {
    id: 5,
    title: 'Diseño UI/UX',
    description: 'Creación de interfaces intuitivas y experiencias de usuario excepcionales.',
    icon: 'Palette'
  },
  {
    id: 6,
    title: 'Optimización',
    description: 'Mejora de rendimiento y accesibilidad de aplicaciones web existentes.',
    icon: 'Zap'
  }
]

export interface Social {
  name: string
  url: string
  icon: string
}

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/CodeMochi-dev', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/valentina-llant%C3%A9n-robles-a2684a276/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:valentinapazll.r@gmail.com', icon: 'Mail' },
  { name: 'WhatsApp', url: 'https://wa.me/56972799380', icon: 'MessageCircle' }
]

export const profile = {
  name: 'Valentina Paz Llantén Robles',
  shortName: 'Valentina Paz',
  role: 'Front-End Developer',
  subtitle: 'Digital Artisan',
  location: 'Santiago, Chile',
  email: 'valentinapazll.r@gmail.com',
  phone: '+56 9 72799380',
  available: true,
  cvUrl: 'https://cv-valentina.vercel.app/',
  bio: 'Desarrolladora Front-End y Full Stack Jr con experiencia en proyectos web usando React 18, Vite 5, JavaScript ES2022, TypeScript 5, Vue.js 3 y Java 17. Me enfoco en construir interfaces limpias, responsivas y funcionales, aplicando buenas prácticas de componentización, consumo de APIs REST y control de versiones.',
  objective: 'Actualmente continúo fortaleciendo mi perfil backend con Java 17, Spring Boot 3 y bases de datos relacionales para crear soluciones web integrales y escalables.',
  yearsExperience: 1,
  projectsCompleted: 10,
  technologiesMastered: 12,
  profileImage: '/projects/Fotodeperfil.png',
  bannerImage: '/projects/banner.png'
}
