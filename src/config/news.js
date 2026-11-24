/** Catálogo editorial local. No contiene noticias externas ni fechas inventadas. */
export const newsCategories = [
  { id: 'todas', label: 'Todas' },
  { id: 'empresa', label: 'Novedades de Vértice' },
  { id: 'analisis', label: 'Análisis y tendencias' },
];

export const newsHeading = {
  eyebrow: 'NOTICIAS Y PERSPECTIVAS',
  title: 'Noticias',
  description: 'Conoce nuestras novedades y explora ideas sobre inteligencia artificial, desarrollo tecnológico, educación y seguridad digital.',
};

const articles = [
  {
    id: 'cuatro-lineas-de-soluciones', category: 'empresa',
    title: 'Cuatro líneas de soluciones, una visión de futuro.',
    description: 'Conoce las áreas que conforman la propuesta de Vértice.',
    paragraphs: [
      'Vértice reúne cuatro áreas complementarias: agentes de inteligencia artificial, desarrollo de software, EdTech y ciberseguridad y ciberdefensa. Nuestra propuesta parte de las necesidades de cada organización.',
      'Unimos desarrollo, innovación educativa y protección digital para plantear soluciones a medida. Cada proyecto comienza por identificar el problema, definir prioridades y acordar el alcance de trabajo.',
      'Las cuatro áreas pueden combinarse según el contexto de la organización. Explora nuestro catálogo para conocer las capacidades de cada servicio.',
    ], relatedService: '/servicios',
  },
  {
    id: 'primeros-agentes-ia', category: 'analisis',
    title: '¿Por dónde empezar con agentes de inteligencia artificial?',
    description: 'Cómo identificar un caso de uso y avanzar con control.',
    paragraphs: [
      'Un agente de IA puede combinar un modelo con herramientas y datos para realizar tareas delimitadas. El primer paso no es elegir un modelo, sino identificar un proceso concreto que se pueda mejorar.',
      'Define qué datos necesita, qué acciones puede ejecutar y cuáles requieren autorización humana. Prepara ejemplos normales y excepciones para evaluar su comportamiento antes de ampliar su alcance.',
      'Una implementación responsable debe incluir permisos mínimos, registro de acciones y mecanismos para detener o corregir errores. Comienza con un piloto y mide su utilidad con criterios previamente acordados.',
    ], relatedService: '/servicios/agentes-ia',
  },
  {
    id: 'definir-proyecto-software', category: 'analisis',
    title: 'Cómo definir un proyecto de software antes de escribir código.',
    description: 'Una guía para convertir una necesidad en un producto digital.',
    paragraphs: [
      'Antes de seleccionar una tecnología, identifica el problema, los usuarios y los resultados que esperas obtener. Un alcance claro ayuda a priorizar las funcionalidades esenciales.',
      'Construye una primera versión pequeña con criterios de aceptación. Valida sus flujos con usuarios y recoge comentarios para decidir qué mejorar.',
      'Considera desde el inicio la seguridad, la accesibilidad, el mantenimiento y las integraciones. Una arquitectura modular facilita evolucionar sin reescribir todo el producto.',
    ], relatedService: '/servicios/software',
  },
  {
    id: 'innovacion-educativa-segura', category: 'empresa',
    title: 'Educación e innovación segura: nuestra visión EdTech.',
    description: 'La propuesta educativa de Vértice pone a las personas en el centro.',
    paragraphs: [
      'Nuestra línea EdTech conecta educación e innovación tecnológica con un enfoque de uso seguro. Buscamos que las herramientas digitales respondan a objetivos de aprendizaje definidos.',
      'La propuesta contempla plataformas, recursos interactivos y asistencia tecnológica, ajustados a las necesidades de instituciones, organizaciones y sus comunidades.',
      'La accesibilidad, la protección de datos y el acompañamiento de las personas son aspectos que deben considerarse al diseñar experiencias educativas digitales.',
    ], relatedService: '/servicios/edtech',
  },
  {
    id: 'primeros-pasos-ciberseguridad', category: 'analisis',
    title: 'Primeros pasos para fortalecer la seguridad de tu empresa.',
    description: 'Medidas básicas que ayudan a reducir riesgos digitales.',
    paragraphs: [
      'Empieza con un inventario de sistemas, cuentas y datos relevantes. Identifica qué activos son críticos para el funcionamiento de tu organización.',
      'Activa la autenticación multifactor donde sea posible, limita permisos, actualiza el software y mantén copias de seguridad protegidas. Comprueba periódicamente que puedas restaurarlas.',
      'Establece responsabilidades y un procedimiento para reportar incidentes. Ajusta las medidas a tu contexto, presupuesto y evaluación de riesgos; ninguna medida aislada garantiza protección total.',
    ], relatedService: '/servicios/ciberseguridad',
  },
  {
    id: 'automatizacion-con-supervision', category: 'analisis',
    title: 'Automatización inteligente sin perder la supervisión humana.',
    description: 'Cómo diseñar flujos con límites, permisos y seguimiento.',
    paragraphs: [
      'Automatizar no significa eliminar todas las decisiones humanas. Los flujos deben distinguir tareas rutinarias de acciones que pueden producir consecuencias importantes.',
      'Documenta entradas, reglas, permisos y resultados esperados. En tareas sensibles, incluye revisiones humanas y alternativas para recuperar el control.',
      'Evalúa el desempeño con casos de prueba y revisa los errores antes de extender una automatización a otros procesos. La mejora continua forma parte de su operación.',
    ], relatedService: '/servicios/agentes-ia',
  },
];

export const newsArticles = articles.map(article => ({ ...article, href: `/noticias/${article.id}` }));
export function findNews(id) { return newsArticles.find(article => article.id === id); }
export function getNewsCategory(id) { return newsCategories.find(category => category.id === id); }
export function filterNews(category = 'todas') {
  return category === 'todas' ? newsArticles : newsArticles.filter(article => article.category === category);
}
