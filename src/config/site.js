/**
 * Fuente única de contenido para la landing de Vértice.
 * Todos los títulos, textos, imágenes y rutas editables viven aquí.
 * Los datos de ejemplo describen servicios propuestos: no son resultados medidos.
 */
export const site = {
  brand: { name: 'VÉRTICE', home: '#inicio' },
  navigation: [
    { label: 'SERVICIOS', href: '#servicios' },
    { label: 'NOSOTROS', href: '#nosotros' },
    { label: 'EL RETO', href: '#por-que' },
    { label: 'VENTAJAS', href: '#plataforma' },
  ],
  contact: { label: 'HABLEMOS', href: '#contacto' },
  hero: {
    video: {
      mp4: '/videos/hero.mp4',
      // Para activar el cierre de 5 segundos con la V, exporta y coloca
      // public/videos/hero-outro.mp4 y añade: outroMp4: '/videos/hero-outro.mp4',
      poster: '/images/hero-poster.jpg',
    },
    eyebrow: 'TECNOLOGÍA + INTELIGENCIA ARTIFICIAL',
    headingLines: ['Inteligencia que', 'transforma negocios.'],
    description: 'Software a medida, agentes de IA y soluciones digitales creadas para evolucionar contigo.',
    action: { label: 'EXPLORAR SOLUCIONES', href: '#servicios', variant: 'light' },
  },
  services: {
    id: 'servicios',
    eyebrow: 'LO QUE HACEMOS',
    heading: 'Soluciones diseñadas para el siguiente nivel.',
    caption: 'Explora nuestras capacidades',
    items: [
      {
        id: 'agentes-ia',
        number: '01',
        title: 'Agentes de inteligencia artificial',
        description: 'Diseñamos asistentes y agentes conectados con las herramientas de tu empresa para atender consultas, ejecutar tareas y acompañar a tus equipos.',
        detail: 'Agentes web · Asistentes · Integraciones',
        image: '/images/services/ai-agents.svg',
        imageAlt: 'Visualización de agentes de IA conectados a sistemas empresariales',
      },
      {
        id: 'software',
        number: '02',
        title: 'Desarrollo de software',
        description: 'Creamos plataformas, aplicaciones web y herramientas a medida con interfaces claras, arquitectura escalable y foco en los procesos reales de tu negocio.',
        detail: 'Aplicaciones web · Plataformas · APIs',
        image: '/images/services/software.svg',
        imageAlt: 'Ilustración de un panel de control de software empresarial',
      },
      {
        id: 'ciberseguridad',
        number: '03',
        title: 'Asesoría en ciberseguridad',
        description: 'Te ayudamos a identificar riesgos, fortalecer buenas prácticas y definir medidas de protección para tu información, infraestructura y aplicaciones.',
        detail: 'Diagnóstico · Riesgos · Fortalecimiento',
        image: '/images/services/cybersecurity.svg',
        imageAlt: 'Ilustración de controles de seguridad y protección digital',
      },
      {
        id: 'automatizacion',
        number: '04',
        title: 'Automatización de procesos',
        description: 'Conectamos sistemas y transformamos tareas repetitivas en flujos más ágiles, medibles y sencillos de operar, con o sin inteligencia artificial.',
        detail: 'Workflows · Integración · Eficiencia',
        image: '/images/services/automation.svg',
        imageAlt: 'Ilustración de un flujo de automatización con tareas conectadas',
      },
    ],
    action: { label: 'CONVERSEMOS SOBRE TU PROYECTO', href: '#contacto', variant: 'dark' },
  },
  intro: {
    id: 'nosotros',
    heading: 'Creamos tecnología que resuelve problemas reales.',
    description: 'En Vértice conectamos estrategia, desarrollo e inteligencia artificial para convertir ideas en productos digitales útiles. Comenzamos por entender el negocio, diseñamos soluciones a medida y construimos una base tecnológica preparada para crecer.',
    image: {
      src: '/images/vertice-architecture.svg',
      alt: 'Arquitectura ilustrada de un ecosistema de software conectado con inteligencia artificial',
      width: 780,
      height: 650,
    },
  },
  problem: {
    id: 'por-que',
    eyebrow: 'EL RETO',
    heading: 'Tus procesos merecen algo mejor que soluciones desconectadas.',
    description: 'Muchas empresas trabajan entre tareas manuales, plataformas que no conversan entre sí y decisiones sin información suficiente. La tecnología debe simplificar la operación, no añadir complejidad. Por eso diseñamos cada proyecto alrededor de necesidades concretas y una experiencia intuitiva.',
    statistics: [
      { label: 'Líneas de servicio que pueden combinarse según las necesidades de cada negocio', value: '04' },
      { label: 'Un enfoque integrado: de la idea y el diseño a la implementación', value: '01' },
    ],
  },
  platform: {
    id: 'plataforma',
    heading: 'Tu aliado para transformar ideas en soluciones.',
    description: 'Construimos productos digitales con visión de negocio, tecnología actual y una experiencia centrada en las personas.',
    action: { label: 'CONOCE NUESTROS SERVICIOS', href: '#servicios', variant: 'light' },
    benefits: [
      { icon: 'distribution', title: 'A la medida', description: 'Soluciones ajustadas a tus procesos, objetivos y prioridades.' },
      { icon: 'layers', title: 'Preparadas para crecer', description: 'Arquitecturas que permiten evolucionar sin empezar de cero.' },
      { icon: 'flag', title: 'Automatización útil', description: 'Menos tareas repetitivas y más tiempo para lo importante.' },
      { icon: 'traceability', title: 'Seguridad desde el diseño', description: 'Buenas prácticas de protección consideradas desde el inicio.' },
    ],
  },
  contactCta: {
    id: 'contacto',
    heading: 'El siguiente nivel de tu empresa empieza aquí.',
    action: { label: 'HABLEMOS DE TU PROYECTO', href: '#pie-de-pagina', variant: 'light', iconVariant: 'dark' },
    note: 'Pronto podrás escribirnos directamente desde este sitio.',
  },
  footer: {
    id: 'pie-de-pagina',
    tagline: 'Inteligencia que transforma negocios.',
    columns: [
      { title: 'SOLUCIONES', links: [
        { label: 'Agentes de IA', href: '#servicios' },
        { label: 'Desarrollo de software', href: '#servicios' },
        { label: 'Ciberseguridad', href: '#servicios' },
        { label: 'Automatización', href: '#servicios' },
      ] },
      { title: 'EXPLORA', links: [
        { label: 'Nuestra visión', href: '#nosotros' },
        { label: 'El reto', href: '#por-que' },
        { label: 'Ventajas', href: '#plataforma' },
      ] },
      { title: 'EMPRESA', links: [
        { label: 'Sobre Vértice', href: '#nosotros' },
        { label: 'Contacto', href: '#contacto' },
      ] },
      { title: 'REDES', links: [
        { label: 'LinkedIn' },
        { label: 'Instagram' },
      ] },
    ],
    legal: [{ label: 'Privacidad' }, { label: 'Términos de uso' }],
    copyright: '© 2026 Vértice',
  },
};
