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
    description: 'Showcase de productos que cuidan de ti y del planeta. Arquitectura SPA con Vue.js, estados reactivos y localización completa. Diseño premium enfocado en la sustentabilidad.',
    image: '/projects/ecomarket.png',
    technologies: ['Vue.js', 'Composition API', 'Scoped CSS', 'Responsive Design'],
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
    description: 'Explora y gestiona tu colección de libros de forma eficiente. CRUD completo con integración de Firebase Firestore, filtrado avanzado y experiencia de usuario fluida.',
    image: '/projects/libroapp.png',
    technologies: ['Vue.js', 'Firebase', 'CRUD', 'Firestore'],
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
    description: 'Visualiza tus gastos, ahorra para tus metas y toma el control total de tu dinero con una interfaz moderna, sencilla y altamente intuitiva.',
    image: '/projects/smartbudget.png',
    technologies: ['Vue.js', 'JavaScript', 'CSS3'],
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
    description: 'Gestiona tus finanzas de forma segura y rápida. Mi primer proyecto de desarrollo aplicando fundamentos de HTML, CSS y JavaScript con control de versiones profesional.',
    image: '/projects/alkewallet.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    demoUrl: 'https://alke-wallet1-deployment.vercel.app/',
    codeUrl: 'https://github.com/CodeMochi-dev/alke-wallet1-deployment',
    category: 'Frontend',
    status: 'Terminado',
    featured: false,
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
    themeColor: '#3b82f6'
  },
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
  bio: 'Desarrolladora Front-End Developer especializada en Vue.js, JavaScript y SCSS. Transformé la experiencia en gestión de datos críticos hospitalarios y sistemas CRM en una ventaja técnica enfocada en la atención al detalle, análisis profundo y trabajo bajo presión.',
  objective: 'Aplicar estas habilidades analíticas para construir aplicaciones web escalables, asegurando un código de calidad y una experiencia de usuario (UX) intuitiva. Actualmente fortaleciendo mi parte de Full Stack con el ecosistema Java gracias a Generation Chile para el desarrollo de soluciones backend robustas.',
  yearsExperience: 1,
  projectsCompleted: 10,
  technologiesMastered: 12,
  profileImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_js1m9vjs1m9vjs1m-ywMfTR1Zl1E3Cdwnc3bALSdGG1gqCV.png',
  bannerImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7z7ndb7z7ndb7z7n-LXEbRzIpr5MMXUgOCeNeZC83GXBX5S.png'
}
