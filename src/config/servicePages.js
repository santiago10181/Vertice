import { serviceApplications } from './serviceApplications.js';

/** Contenido editorial de las páginas ampliadas. Sin JSX ni lógica de navegación. */
const image = (name, alt, position = 'center') => ({
  src: `/images/services/detail/${name}.webp`, alt, width: 764, height: 338, position,
});

export const servicePages = {
  ...serviceApplications,
  'agentes-ia': {
    hero: {
      eyebrow: 'AGENTES DE INTELIGENCIA ARTIFICIAL',
      title: 'Inteligencia artificial que trabaja contigo.',
      description: 'Diseñamos agentes de IA conectados con tus sistemas para transformar consultas, tareas y procesos en flujos de trabajo útiles, con supervisión humana cuando sea necesaria.',
      image: image('ai-hero', 'Profesional interactuando con un asistente de inteligencia artificial en su pantalla', '72% center'),
    },
    challenge: {
      id: 'reto-del-servicio', eyebrow: 'POR QUÉ UN NUEVO MODELO',
      heading: 'De tareas repetitivas a operaciones inteligentes.',
      description: 'Los equipos dedican tiempo a consultar información dispersa, transferir datos y atender solicitudes repetitivas. Un agente bien diseñado conecta herramientas y ayuda a ejecutar procesos definidos, sin perder el control sobre las decisiones importantes.',
      points: ['Consultas repetitivas y atención fragmentada', 'Procesos manuales entre aplicaciones', 'Información dispersa y difícil de consultar', 'Necesidad de control, trazabilidad y supervisión'],
      image: image('ai-challenge', 'Profesional revisando datos en varias aplicaciones de trabajo', '68% center'),
    },
    benefits: {
      id: 'capacidades', eyebrow: 'NUESTRAS CAPACIDADES',
      heading: 'Agentes diseñados para conectar, actuar y evolucionar.',
      items: [
        { icon: 'distribution', title: 'Agentes web y asistentes', description: 'Atención de consultas y acompañamiento a usuarios con información autorizada de tu empresa.' },
        { icon: 'layers', title: 'Integración y automatización', description: 'Conectamos APIs, CRM y sistemas para ejecutar flujos de trabajo delimitados y reducir tareas manuales.' },
        { icon: 'traceability', title: 'Control y supervisión', description: 'Definimos permisos, evaluaciones, registros y aprobaciones humanas según el riesgo de cada acción.' },
      ],
    },
    spotlight: {
      id: 'diferencial', heading: 'La inteligencia es más útil cuando está conectada.',
      image: image('ai-difference', 'Infraestructura informática con luces de estado verdes', '78% center'),
      action: { label: 'HABLEMOS DE TU AGENTE', href: '/#contacto', variant: 'light' },
    },
  },
  edtech: {
    hero: {
      eyebrow: 'EDTECH / EDUCACIÓN E INNOVACIÓN',
      title: 'Tecnología que transforma la forma de aprender.',
      description: 'Creamos soluciones digitales para apoyar el aprendizaje, la formación y la innovación educativa, poniendo a las personas, la accesibilidad y la seguridad en el centro.',
      image: image('edtech-hero', 'Educadora y estudiantes adultos colaborando frente a un portátil', '80% center'),
    },
    challenge: {
      id: 'reto-del-servicio', eyebrow: 'POR QUÉ UNA NUEVA FORMA DE APRENDER',
      heading: 'La educación merece tecnología con propósito.',
      description: 'Las herramientas digitales deben responder a objetivos pedagógicos y necesidades reales. Diseñamos experiencias que ayudan a organizar la formación y acompañar a docentes y participantes, teniendo en cuenta los contextos de uso y la protección de datos.',
      points: ['Recursos educativos dispersos', 'Experiencias poco adaptadas a los usuarios', 'Seguimiento y gestión de formación manuales', 'Retos de accesibilidad, privacidad y uso seguro'],
      image: image('edtech-challenge', 'Docente acompañando a una estudiante adulta en un entorno de aprendizaje digital', '77% center'),
    },
    benefits: {
      id: 'capacidades', eyebrow: 'NUESTRAS CAPACIDADES',
      heading: 'Innovación educativa para aprender, crecer y crear.',
      items: [
        { icon: 'layers', title: 'Plataformas de aprendizaje', description: 'Entornos digitales para organizar contenidos, actividades y experiencias de formación a medida.' },
        { icon: 'distribution', title: 'Herramientas de innovación', description: 'Recursos interactivos y asistentes para apoyar a equipos educativos y participantes.' },
        { icon: 'traceability', title: 'Educación digital segura', description: 'Consideramos accesibilidad, privacidad y buenas prácticas de uso desde el diseño de la solución.' },
      ],
    },
    spotlight: {
      id: 'diferencial', heading: 'El futuro del aprendizaje se construye hoy.',
      image: image('edtech-difference', 'Portátil y tableta con una interfaz conceptual de aprendizaje digital', '79% center'),
      action: { label: 'HABLEMOS DE INNOVACIÓN EDUCATIVA', href: '/#contacto', variant: 'light' },
    },
  },
};
