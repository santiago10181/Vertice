/** Datos de la plantilla de aplicaciones. Las cifras cuentan capacidades descritas, no resultados de clientes. */
const photo = (name, alt, position = 'center', height = 338) => ({
  src: `/images/services/detail/${name}.webp`, alt, width: 764, height, position,
});
const square = (name, alt, position = 'center') => ({
  src: `/images/services/${name}.webp`, alt, width: 508, height: 508, position,
});

export const serviceApplications = {
  software: {
    layout: 'applications',
    hero: {
      eyebrow: 'DESARROLLO DE SOFTWARE',
      title: 'Software que evoluciona con tu negocio.',
      description: 'Diseñamos y desarrollamos aplicaciones web, plataformas digitales e integraciones a medida. Tecnología pensada para resolver necesidades reales, conectar tus procesos y acompañar el crecimiento de tu empresa.',
      image: photo('software-overview', 'Equipo de desarrollo trabajando en una oficina tecnológica con monitores de código', 'center', 337),
    },
    metrics: {
      id: 'enfoque-del-servicio', eyebrow: 'INGENIERÍA CON PROPÓSITO',
      heading: 'Una visión integral del producto digital.',
      description: 'Desde entender el problema hasta construir y validar la solución, conectamos las necesidades del negocio con decisiones técnicas sostenibles.',
      statistics: [
        { label: 'Áreas de aplicación: plataformas web, productos digitales e integraciones.', value: '03' },
        { label: 'Un enfoque integrado, desde el diseño hasta el despliegue.', value: '01' },
      ],
    },
    challenge: {
      id: 'reto-del-servicio', eyebrow: 'SOFTWARE A MEDIDA',
      heading: 'Construimos alrededor de tus procesos, no al revés.',
      description: 'Las herramientas desconectadas y los sistemas rígidos limitan la evolución de los equipos. Creamos soluciones ajustadas al contexto de tu empresa, con una experiencia clara y bases técnicas que permitan crecer.',
      points: ['Interfaces claras y experiencias adaptadas a tus usuarios', 'Arquitectura modular y código mantenible', 'Integraciones con APIs y sistemas empresariales', 'Pruebas, despliegue y mejora continua según el alcance'],
      image: photo('software-challenge', 'Profesional revisando una aplicación web en su portátil', '56% center'),
      highlight: { label: 'Diseño centrado en las necesidades del negocio y sus usuarios.', value: 'UX' },
    },
    applications: {
      id: 'capacidades', eyebrow: 'APLICACIONES', heading: 'Soluciones para cada etapa de tu evolución digital.',
      items: [
        { title: 'Aplicaciones y plataformas web', description: 'Portales, aplicaciones empresariales y herramientas de gestión accesibles desde el navegador.', image: photo('software-products', 'Aplicación digital en un portátil y una tableta', '44% center', 337) },
        { title: 'Productos digitales a medida', description: 'Diseño y desarrollo de experiencias digitales alineadas con los objetivos de tu organización.', image: square('software', 'Desarrollador trabajando en monitores de código') },
        { title: 'APIs e integraciones', description: 'Conexión de aplicaciones, datos y procesos para reducir la fragmentación tecnológica.', image: square('automation', 'Profesional gestionando un flujo digital en una pantalla') },
      ],
    },
  },
  ciberseguridad: {
    layout: 'applications',
    hero: {
      eyebrow: 'CIBERSEGURIDAD Y CIBERDEFENSA',
      title: 'Protege lo que hace avanzar a tu empresa.',
      description: 'Acompañamos a las organizaciones en la identificación de riesgos, el fortalecimiento de sus controles y la preparación defensiva frente a amenazas digitales, de acuerdo con sus necesidades y recursos.',
      image: photo('cyber-overview', 'Centro de operaciones de seguridad con profesionales y pantallas de monitoreo', 'center', 337),
    },
    metrics: {
      id: 'enfoque-del-servicio', eyebrow: 'RESILIENCIA DIGITAL',
      heading: 'La seguridad es un proceso continuo.',
      description: 'Una estrategia defensiva combina prevención, protección y preparación. Priorizamos las medidas según el contexto, la exposición y los riesgos de la organización.',
      statistics: [
        { label: 'Áreas de trabajo: diagnóstico, fortalecimiento y preparación ante incidentes.', value: '03' },
        { label: 'Un enfoque integrado de gestión de riesgos y protección digital.', value: '01' },
      ],
    },
    challenge: {
      id: 'reto-del-servicio', eyebrow: 'PROTECCIÓN Y PREVENCIÓN',
      heading: 'Seguridad y resiliencia desde el diseño.',
      description: 'Los sistemas digitales requieren controles proporcionados, procedimientos claros y personas preparadas. Ayudamos a identificar oportunidades de mejora y definir medidas defensivas para proteger la información y la continuidad de las operaciones.',
      points: ['Identificación y priorización de riesgos', 'Fortalecimiento de controles y buenas prácticas', 'Protección de aplicaciones, infraestructura e información', 'Preparación y respuesta defensiva ante incidentes'],
      image: photo('cyber-challenge', 'Especialista revisando infraestructura en un centro de datos', '74% center'),
      highlight: { label: 'Prevención, protección y preparación defensiva.', value: '03' },
    },
    applications: {
      id: 'capacidades', eyebrow: 'ÁREAS DE ACOMPAÑAMIENTO', heading: 'Una defensa digital adaptada a tu organización.',
      items: [
        { title: 'Diagnóstico y gestión de riesgos', description: 'Evaluación de necesidades y priorización de medidas de seguridad según el contexto de la organización.', image: photo('cyber-consulting', 'Profesionales analizando un panel de información de seguridad', '62% center', 337) },
        { title: 'Fortalecimiento de controles', description: 'Acompañamiento en buenas prácticas de acceso, protección de sistemas y seguridad de aplicaciones.', image: square('cybersecurity', 'Especialista inspeccionando servidores') },
        { title: 'Preparación y respuesta defensiva', description: 'Apoyo en la definición de procedimientos, responsabilidades y acciones de recuperación ante incidentes.', image: photo('ai-difference', 'Infraestructura informática con indicadores de estado verdes', '80% center') },
      ],
    },
  },
};
