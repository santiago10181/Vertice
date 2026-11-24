import { about } from './about.js';
import { services, serviceLinks } from './services.js';

/**
 * Fuente única de contenido para la landing de Vértice.
 * Todos los títulos, textos, imágenes y rutas editables viven aquí.
 * Los datos de ejemplo describen servicios propuestos: no son resultados medidos.
 */
export const site = {
  brand: { name: 'VÉRTICE', home: '/' },
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Quiénes somos', href: '/quienes-somos' },
    { label: 'Servicios', href: '/servicios', submenu: 'services' },
    { label: 'Noticias', href: '/noticias' },
  ],
  contact: { label: 'HABLEMOS', href: '/#contacto' },
  hero: {
    video: {
      mp4: '/videos/hero.mp4',
      // Para activar el cierre de 5 segundos con la V, exporta y coloca
      // public/videos/hero-outro.mp4 y añade: outroMp4: '/videos/hero-outro.mp4',
      poster: '/images/hero-poster.jpg',
      finalPoster: '/images/hero-final.webp',
      replayAfterMs: 0, // 120_000 para repetir dos minutos después de terminar.
      startupTimeoutMs: 2500,
    },
    eyebrow: 'TECNOLOGÍA + INTELIGENCIA ARTIFICIAL',
    headingLines: ['Inteligencia que', 'transforma negocios.'],
    description: 'Software a medida, agentes de IA y soluciones digitales creadas para evolucionar contigo.',
    action: { label: 'EXPLORAR SOLUCIONES', href: '/servicios', variant: 'light' },
  },
  services,
  intro: {
    id: 'nosotros',
    heading: 'Creamos tecnología que resuelve problemas reales.',
    description: 'En Vértice conectamos estrategia, desarrollo e inteligencia artificial para convertir ideas en productos digitales útiles. Comenzamos por entender el negocio, diseñamos soluciones a medida y construimos una base tecnológica preparada para crecer.',
    image: {
      src: '/images/vertice-team.webp',
      alt: 'Escena conceptual de tres profesionales colaborando frente a un portátil',
      width: 508,
      height: 508,
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
    action: { label: 'CONOCE NUESTROS SERVICIOS', href: '/servicios', variant: 'light' },
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
    action: { label: 'HABLEMOS DE TU PROYECTO', href: '/#pie-de-pagina', variant: 'light' },
    note: 'Pronto podrás escribirnos directamente desde este sitio.',
  },
  pages: {
    about,
    services: {
      eyebrow: 'SERVICIOS',
      title: 'El siguiente nivel de tu tecnología.',
      description: 'Descubre cómo nuestros agentes de IA, software, EdTech, ciberseguridad y ciberdefensa pueden acompañar tus proyectos.',
    },
  },
  footer: {
    id: 'pie-de-pagina',
    tagline: 'Inteligencia que transforma negocios.',
    columns: [
      { title: 'SOLUCIONES', links: serviceLinks },
      { title: 'EXPLORA', links: [
        { label: 'Nuestra visión', href: '/quienes-somos' },
        { label: 'Noticias', href: '/noticias' },
        { label: 'El reto', href: '/#por-que' },
        { label: 'Ventajas', href: '/#plataforma' },
      ] },
      { title: 'EMPRESA', links: [
        { label: 'Sobre Vértice', href: '/quienes-somos' },
        { label: 'Contacto', href: '/#contacto' },
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
