import { servicePages } from './servicePages.js';

/** Catálogo único para el selector, mega menú, footer y rutas de servicios. */
const catalog = [
  {
    id: 'agentes-ia', number: '01', title: 'Agentes de inteligencia artificial', menuTitle: 'Agentes de IA', featured: true,
    summary: 'Inteligencia que trabaja contigo. Automatiza procesos y conecta tus herramientas.',
    description: 'Diseñamos agentes web y asistentes de IA que pueden atender consultas, conectar herramientas empresariales y apoyar la ejecución de tareas, con controles y supervisión humana según el riesgo.',
    detail: 'Agentes web · Asistentes · Automatización · Integraciones',
    image: '/images/services/ai-agents.webp', imageAlt: 'Imagen conceptual de un asistente de IA en un portátil',
    heading: 'Inteligencia artificial al servicio de tu operación.',
    capabilities: ['Asistentes y agentes web', 'Automatización de flujos de trabajo', 'Integraciones con APIs y sistemas empresariales'],
  },
  {
    id: 'software', number: '02', title: 'Desarrollo de software', menuTitle: 'Desarrollo de software',
    summary: 'Aplicaciones web y plataformas digitales a medida.',
    description: 'Creamos plataformas, aplicaciones web y herramientas a medida con interfaces claras, arquitectura escalable y foco en los procesos reales de tu negocio.',
    detail: 'Aplicaciones web · Plataformas · APIs',
    image: '/images/services/software.webp', imageAlt: 'Imagen conceptual de desarrollo de software con monitores de código',
    heading: 'Software que evoluciona con tu negocio.',
    capabilities: ['Aplicaciones y plataformas web', 'Diseño y desarrollo de productos digitales', 'APIs e integración de sistemas'],
  },
  {
    id: 'edtech', number: '03', title: 'EdTech', menuTitle: 'EdTech',
    summary: 'Educación e innovación segura a través de la tecnología.',
    description: 'Diseñamos soluciones tecnológicas para apoyar experiencias de aprendizaje, procesos formativos e innovación educativa, con atención a la accesibilidad y la protección de datos.',
    detail: 'Tecnología educativa · Formación · Innovación segura',
    image: '/images/services/detail/edtech-hero.webp', imageAlt: 'Imagen conceptual de una educadora y estudiantes adultos colaborando frente a un portátil',
    heading: 'Tecnología para aprender, innovar y crecer.',
    capabilities: ['Plataformas de aprendizaje', 'Herramientas digitales para formación', 'Innovación educativa y uso seguro de tecnología'],
  },
  {
    id: 'ciberseguridad', number: '04', title: 'Ciberseguridad y ciberdefensa', menuTitle: 'Ciberseguridad y ciberdefensa',
    summary: 'Protección, prevención y resiliencia digital.',
    description: 'Te ayudamos a identificar riesgos, fortalecer medidas de protección y planificar la preparación y respuesta defensiva ante amenazas para tus sistemas, aplicaciones e información.',
    detail: 'Diagnóstico · Prevención · Protección · Resiliencia',
    image: '/images/services/cybersecurity.webp', imageAlt: 'Imagen conceptual de un especialista inspeccionando servidores',
    heading: 'Seguridad y resiliencia desde el diseño.',
    capabilities: ['Diagnóstico y gestión de riesgos', 'Buenas prácticas y fortalecimiento de controles', 'Preparación y respuesta defensiva ante incidentes'],
  },
];
export const serviceItems = catalog.map(item => ({ ...item, href: `/servicios/${item.id}`, page: servicePages[item.id] }));
export const serviceLinks = serviceItems.map(({ menuTitle, href }) => ({ label: menuTitle, href }));
export function findService(id) {
  return serviceItems.find(item => item.id === (id === 'automatizacion' ? 'agentes-ia' : id));
}
export const services = {
  id: 'servicios', eyebrow: 'LO QUE HACEMOS', heading: 'Soluciones diseñadas para el siguiente nivel.', caption: 'Explora nuestras capacidades',
  items: serviceItems,
  action: { label: 'CONVERSEMOS SOBRE TU PROYECTO', href: '/#contacto', variant: 'dark' },
};
