/** Contenido de /quienes-somos. Cambia aquí textos, fotos y miembros. */
export const about = {
  eyebrow: 'QUIÉNES SOMOS',
  title: 'Construimos el futuro digital de las empresas.',
  description: 'En Vértice unimos ciberseguridad, desarrollo tecnológico y educación para diseñar soluciones digitales útiles, seguras y preparadas para evolucionar.',
  nextSectionId: 'nuestro-enfoque',
  approach: {
    id: 'nuestro-enfoque',
    eyebrow: 'LO QUE HACEMOS',
    heading: 'Una nueva forma de construir tecnología.',
    description: 'Desarrollamos agentes de inteligencia artificial, software a medida, tecnología educativa y soluciones de ciberseguridad y ciberdefensa. Integramos la seguridad y la innovación desde el diseño, para que cada proyecto responda a los retos concretos de las personas y las organizaciones.',
    images: [
      { src: '/images/services/software.webp', alt: 'Imagen conceptual de un profesional desarrollando software frente a dos monitores', width: 508, height: 508, position: '50% 48%', caption: 'Innovación y desarrollo tecnológico' },
      { src: '/images/services/cybersecurity.webp', alt: 'Imagen conceptual de un especialista revisando infraestructura informática', width: 508, height: 508, position: '50% 45%', caption: 'Seguridad y protección digital' },
    ],
  },
  team: {
    id: 'equipo',
    eyebrow: 'NUESTRO EQUIPO',
    heading: 'Tres perspectivas. Un mismo propósito.',
    members: [
      { id: 'felipe-marino', name: 'Felipe Mariño', role: 'Especialista en ciberseguridad y defensa', description: 'Ciberseguridad y defensa como pilares para proteger la información y fortalecer los entornos digitales.', image: null },
      { id: 'santiago-marino', name: 'Santiago Mariño', role: 'Innovación y desarrollo tecnológico', description: 'Innovación y desarrollo de soluciones tecnológicas orientadas a las necesidades de las empresas.', image: null },
      { id: 'vivian-forero', name: 'Vivian Forero', role: 'Educación e innovación segura', description: 'Educación e innovación con una perspectiva de uso seguro y responsable de la tecnología.', image: null },
    ],
  },
  vision: {
    id: 'nuestra-vision',
    eyebrow: 'NUESTRA VISIÓN',
    heading: 'Personas que impulsan la transformación.',
    description: 'Creemos en una tecnología que une conocimiento, creatividad y seguridad. Nuestro propósito es acompañar a las organizaciones en su evolución digital, construyendo soluciones que generen valor y promuevan un uso responsable de la innovación.',
    image: { src: '/images/vertice-team.webp', alt: 'Imagen conceptual de profesionales colaborando alrededor de un portátil', width: 508, height: 508, position: '50% 50%' },
    imageCaption: 'Imagen conceptual de colaboración tecnológica.',
    action: { label: 'CONOCE NUESTRAS SOLUCIONES', href: '/servicios', variant: 'dark' },
  },
};
