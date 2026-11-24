# Vértice V15 — Navegación centrada y tipografía unificada

- Navbar de escritorio con CSS Grid y `subgrid`: columnas laterales simétricas y enlaces centrados. Móvil conserva menú hamburguesa.
- Familia Arial / Helvetica / sans-serif en toda la web, sin descargas ni dependencias nuevas.
- Escala compartida en `src/styles/main.css`: `type-display`, `type-heading`, `type-card-heading`, `type-feature-heading`, `type-body`, `type-small`, `type-label`, `type-nav`, `type-brand`, `type-stat`, `type-stat-compact`, `type-highlight`. Los tokens anteriores de fuentes apuntan a la misma familia.
- Se conservan colores, imágenes, video, rutas, datos y componentes.

**Validación V15:** 63 archivos JS/JSX analizados sin errores de sintaxis ni importaciones locales ausentes. CSS compilado con Tailwind local 4.1.10. Se comprobó en Chromium un montaje HTML de la navbar con las clases reales del proyecto a 1101, 1280, 1366, 1440 y 1920 px (desviación del centro menor a 1 px, sin colisión lateral ni desbordamiento del mega menú), así como el estado abierto/cerrado del menú móvil a 390, 768 y 1100 px. Esta prueba aislada no sustituye la ejecución de React, Vitest ni el build de Vite, que quedan pendientes en el entorno del usuario.

Para cambiar la tipografía, edita `--font-sans` y las utilidades `type-*` en `src/styles/main.css`. La navbar mantiene el breakpoint de 1101 px. No se añadieron dependencias.

# Vértice V14 — Noticias

Actualización de V13. Sustituye Recursos por Noticias en navbar y footer. Conserva todas las demás páginas, servicios, fotografías, video, mega menú, paleta negro/oliva y Vercel. No requiere dependencias nuevas.

## Rutas y comportamiento

- `/noticias`: portada editorial clara, filtros por categoría y tarjetas sin imágenes; 3 columnas en escritorio, 2 en tablet y 1 en móvil.
- `/noticias?categoria=empresa` y `/noticias?categoria=analisis`: filtros compartibles por URL; funcionan con historial Atrás/Adelante. Todas elimina el parámetro.
- `/noticias/:newsId`: artículo completo; título de documento y enlaces a noticias y al servicio relacionado.
- `/recursos`: redirección a `/noticias` por compatibilidad.
- Los identificadores desconocidos muestran la página 404 de la aplicación.

## Editar el contenido

`src/config/news.js` reúne `newsCategories`, `newsHeading` y el catálogo `newsArticles` (derivado del arreglo `articles`). Cada artículo necesita `id` único, `category` válida, `title`, `description` y `paragraphs` (arreglo de texto); `relatedService` es opcional. El enlace se genera automáticamente. Las seis publicaciones son textos editoriales de ejemplo basados en la propuesta conocida de Vértice; no son noticias externas, anuncios fechados ni afirmaciones de logros empresariales. Revísalas antes de publicar. No hay CMS ni API de noticias.

## Arquitectura

- `NewsPage.jsx`: obtiene el filtro de la URL, compone la vista.
- `CategoryFilters.jsx`: botones de filtro controlados y reutilizables.
- `NewsGrid.jsx`: distribución y listado de tarjetas.
- `NewsCard.jsx`: tarjeta editorial con enlace de navegación y el icono de flecha existente.
- `NewsDetailPage.jsx`: plantilla única para los artículos.
- `PageHeading` añade variante `plain`; `SectionPanel` admite tono `paper`. Se reutilizan `ContactCtaSection`, `Button`, `SiteLink`, `ArrowRightIcon` y el layout global. Se eliminan `ResourcesPage` y `ResourceCard` sin uso.

## Ejecutar

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```

Comprueba `/noticias`, los filtros, los artículos, la redirección desde `/recursos` y el menú móvil. El archivo `vercel.json` existente cubre las nuevas rutas SPA. El contacto, redes y fotos del equipo siguen pendientes de personalización.

Validación: sintaxis JS/JSX, importaciones locales y comprobaciones de datos y rutas; pruebas nuevas de Vitest incluidas. No se pudo acceder al registro npm (EAI_AGAIN), por lo que el build, Vitest y las pruebas visuales quedan pendientes de ejecutar en tu equipo.

---

## Historial de versiones anteriores (las menciones a Recursos son históricas)

# Vértice V13 — Software y Ciberseguridad

## Novedades

- `/servicios/software` y `/servicios/ciberseguridad` usan la plantilla clara de aplicaciones: portada editorial con imagen panorámica, bloque de capacidades cuantificables, reto con imagen y recuadro destacado, galería de tres aplicaciones y CTA compartido.
- `src/config/serviceApplications.js` centraliza el contenido. `ServiceApplicationsPage` compone ambos servicios.
- Se reutilizan `PageHeading`, `SectionPanel`, `SectionHeading`, `StatRow`, `ServiceChallengeSection`, `ArrowList`, `EditorialImage`, `MediaImage` y `ContactCtaSection`. Las extensiones son opcionales y mantienen los valores anteriores por defecto.
- Seis imágenes conceptuales nuevas, en WebP, generadas con IA. Se reutilizan cuatro imágenes de V12. Las cifras describen el alcance de las propuestas, no resultados medidos.
- Las páginas IA y EdTech mantienen su plantilla original, así como el layout, navegación y configuración Vercel. No se agregaron dependencias.

## Ejecutar

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```

Revisa las dos rutas en escritorio y móvil. Antes de publicar, configura el contacto real.

---

# Vértice V12 — Agentes de IA y EdTech

Actualización de V11. Se conservan la portada con video, el mega menú, las cuatro rutas de servicios, el diseño negro/oliva y el layout compartido.

## Novedades V12

- `/servicios/agentes-ia` y `/servicios/edtech`: portada fotográfica, reto con lista y foto, tres beneficios, banner fotográfico con CTA y cierre corporativo.
- `src/config/servicePages.js`: todos los textos, imágenes, beneficios y CTA de estas dos páginas. `services.js` conecta el contenido editorial al catálogo.
- `ServiceEditorialPage.jsx` compone las dos páginas con una plantilla única; `PhotoBanner.jsx` se usa para portada y cierre. `ServiceChallengeSection.jsx`, `ArrowList.jsx` y `ServiceBenefitsSection.jsx` separan presentación y responsabilidades. Reutilizan SectionPanel, SectionHeading, EditorialImage, MediaImage, FeatureCard, Button y ContactCtaSection.
- `MainLayout.jsx` evita duplicar el espacio superior en las nuevas portadas. Software y Ciberseguridad conservan su presentación anterior.
- Seis imágenes conceptuales generadas con IA, recortadas de una composición panorámica y optimizadas en WebP. No representan clientes ni equipo real de Vértice. `object-cover` y `position` controlan el encuadre. La miniatura de EdTech ahora usa una imagen educativa.

### Cambiar las fotografías

Guarda tus imágenes en `public/images/services/detail/` y modifica `image.src`, `alt`, `width`, `height` y `position` en `src/config/servicePages.js`. Las imágenes actuales miden 764 × 338 px; para fotografías definitivas de portada se recomienda 1920 × 850 px o similar, con espacio oscuro a la izquierda.

### Ejecutar y verificar

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```

No hay dependencias nuevas. Se agregaron pruebas de renderizado para las rutas y activos. La compilación y las pruebas de Vitest quedan pendientes de ejecutar localmente: el registro npm no resolvió su dirección (EAI_AGAIN) en el entorno de creación. El CTA de contacto usa el destino provisional de la versión anterior.

---

# Vértice V11 — Mega menú de servicios

Actualización sobre V10. Conserva React, React Router, Tailwind CSS 4, Vite, pnpm, video y páginas anteriores.

## Navegación de servicios

- Escritorio: pasa el cursor sobre Servicios o acciona su botón. En móvil, abre la hamburguesa y pulsa Servicios.
- Escape, salir del menú, clic externo o navegar lo cierran. El botón expone `aria-expanded` y `aria-controls`. Los enlaces son navegables con Tab.
- Agentes de IA aparece como tarjeta destacada; a la derecha están Desarrollo de software, EdTech y Ciberseguridad y ciberdefensa.
- `Ver todos los servicios` conserva `/servicios`; cada área dispone de su ruta `/servicios/:serviceId`.
- Se mantienen enlaces previos `/servicios?servicio=...`. Automatización pasa a ser una capacidad de Agentes de IA, y sus enlaces antiguos abren esa área.

## Responsabilidades

- `src/config/services.js`: fuente única del catálogo, rutas, descripciones, imágenes y capacidades.
- `ServicesNavItem.jsx`: interacción y estado del desplegable.
- `ServiceMegaMenu.jsx`: presentación de los enlaces, reutilizando SiteLink, MediaImage e iconos.
- `ServiceDetailPage.jsx`: plantilla única para las cuatro rutas, reutilizando PageHeading, EditorialSplitSection y ContactCtaSection.
- Inicio y el footer consumen el mismo catálogo.

En V11 EdTech reutilizaba una fotografía de colaboración; V12 incorpora fotografías educativas propias. Las páginas de detalle contienen textos iniciales, no un catálogo comercial definitivo. No se han añadido dependencias.

## Ejecutar

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```

Se verificaron sintaxis JSX/JS, importaciones locales y catálogo/rutas/recursos. Las pruebas Vitest incluidas y el build deben ejecutarse localmente; no se realizó prueba interactiva en navegador.

---

## Documentación heredada de V10 (algunos ejemplos del catálogo y rutas pueden corresponder a la versión anterior)

# Vértice — versión 10: Quiénes somos

Esta actualización parte de la versión 9 con React Router. Conserva Inicio, Servicios y Recursos, el video, los recursos WebP, la paleta Black & Olive y la navbar con borde blanco. Rediseña exclusivamente la experiencia de /quienes-somos (y amplía los componentes compartidos necesarios).

## Iniciar

```bash
pnpm install
pnpm dev
```

Si integras manualmente sobre tu proyecto existente: `pnpm add react-router@7`. El ZIP ya declara la dependencia. Conserva `.git` y regenera/actualiza `pnpm-lock.yaml` con `pnpm install` antes de hacer commit.

## Rutas

| Ruta | Página |
|---|---|
| `/` | HomePage: landing original completa |
| `/quienes-somos` | AboutPage: presentación editorial, enfoque, equipo, visión y CTA |
| `/servicios` | ServicesPage: selector de servicios existente |
| `/recursos` | ResourcesPage: guías introductorias editables |
| `*` | NotFoundPage: pantalla de ruta inexistente |

`src/main.jsx` contiene `BrowserRouter`. `src/App.jsx` define las rutas anidadas. `src/layouts/MainLayout.jsx` comparte Header, Footer, Outlet y gestiona título y desplazamiento al navegar. `Navbar.jsx` usa NavLink para marcar el enlace activo. `SiteLink.jsx` reutiliza Link para navegación interna y conserva los enlaces externos nativos. Los CTA de contacto apuntan a `/#contacto` y el botón de esa sección sigue siendo provisional hasta definir un medio de contacto real.

Los enlaces del footer a los servicios utilizan `/servicios?servicio=software` (u otro identificador de `site.services.items`). Las guías se editan en `site.resources`, y los títulos de página en `site.pages`. No se inventan noticias, casos de éxito ni artículos externos. Las páginas interiores usan las secciones existentes y contenido introductorio; pueden ampliarse de forma independiente.

## Vercel

El archivo `vercel.json` incluye el rewrite oficial para una SPA de Vite: los accesos directos y las recargas de rutas cargan index.html y React Router selecciona la página. No es SSR; las rutas desconocidas muestran una pantalla 404 del cliente. Conserva el preset Vite, build `pnpm build` y salida `dist`.

```bash
pnpm test
pnpm build
pnpm preview
```

**Validación de esta entrega:** no se pudo instalar dependencias: el registro npm no resolvió por DNS (`EAI_AGAIN`). Las pruebas de Vitest y el build quedan pendientes de ejecución local. Se comprobó sintaxis JS/JSX, integridad de importaciones locales y archivos de configuración y recursos.

## Documentación de diseño y contenido (heredada de v8)

# Vértice — Landing React + JSX + Vite + Tailwind CSS 4 (v9)

Proyecto **completo** basado en la versión anterior, con la nueva sección interactiva de servicios colocada **inmediatamente después del Hero**. El contenido está adaptado a **Vértice**, startup de desarrollo de software, agentes de IA, ciberseguridad y automatización.


## Novedades de esta versión

- Nueva paleta aplicada a la landing: `#000000` (base), `#253900` (oliva), `#C6F36B` (acento), `#F5F7F0` (fondo claro) y `#526044` (texto secundario).
- Ajuste de colores globales en `src/styles/main.css`.
- Cinco imágenes fotorealistas conceptuales generadas por IA, convertidas a WebP. No son fotografías de empleados ni clientes reales. Navbar negra con borde blanco; encuadres de imagen estables y responsivos.

Los recursos WebP son independientes (508 × 508 px, 130.674 bytes en total). Puedes sustituirlos por imágenes de mayor resolución con la misma proporción. `MediaImage` admite `position` para controlar el encuadre.

Para actualizar el repositorio existente, copia el contenido de esta carpeta a la raíz del proyecto local sin eliminar `.git` ni el lockfile existente. Elimina los SVG anteriores ya no utilizados si deseas mantener limpios los activos. Ejecuta `pnpm install`, `pnpm test` y `pnpm build` antes de confirmar y subir los cambios.

## Requisitos y ejecución

- Node.js compatible con Vite (recomendado 22.12+).
- pnpm instalado.

```bash
pnpm install
pnpm dev
```

Abre la dirección que indique Vite, normalmente `http://localhost:5173`.

Para validar y compilar:

```bash
pnpm test
pnpm build
pnpm preview
```

**Nota de validación:** los archivos JS/JSX se revisan sintácticamente y los activos se comprueban mediante herramientas locales. La instalación de dependencias y el build completo no pudieron ejecutarse en el entorno de creación porque no resolvía `registry.npmjs.org`; realiza estos comandos en tu computador.

## Archivos y estructura

```text
public/
  images/
    hero-poster.jpg                 # Imagen fija alternativa al video
    vertice-mark.png                # Símbolo V recortado de la referencia proporcionada
    vertice-team.webp        # Imagen conceptual de la sección «Nosotros»
    services/
      ai-agents.webp                 # Imagen conceptual de agentes de IA
      software.webp                  # Imagen conceptual de desarrollo de software
      cybersecurity.webp             # Imagen conceptual de ciberseguridad
      automation.webp                # Imagen conceptual de automatización
  videos/
    hero.mp4                        # Tu video de 10 segundos, sin pista de audio
    hero-outro.mp4                  # OPCIONAL. Añade aquí tu video de la V de 5 segundos
src/
  App.jsx                           # Orden de las secciones
  config/site.js                    # Fuente única de textos, rutas y servicios
  components/
    Header.jsx, Navbar.jsx, Brand.jsx, Button.jsx
    Hero.jsx, HeroBackgroundVideo.jsx
    ServicesSection.jsx            # NUEVA: selector interactivo
    IntroSection.jsx, MediaImage.jsx
    ProblemSection.jsx, StatRow.jsx
    PlatformSection.jsx, FeatureCard.jsx, Icons.jsx
    ContactCtaSection.jsx, Footer.jsx, FooterColumn.jsx
  styles/main.css                   # Tokens Tailwind + animación de las imágenes
```

## 1. Personaliza la nueva sección de servicios

Abre `src/config/site.js`, busca `services.items` y modifica los elementos de este arreglo:

```js
{
  id: 'software',
  number: '02',
  title: 'Desarrollo de software',
  description: 'Texto comercial de la solución.',
  detail: 'Aplicaciones web · Plataformas · APIs',
  image: '/images/services/software.webp',
  imageAlt: 'Descripción accesible de la imagen',
}
```

No hace falta tocar `ServicesSection.jsx` para cambiar los servicios. Puedes agregar, quitar o reordenar los objetos y el componente generará los botones automáticamente con `.map()`.

### ¿Dónde pongo mis fotografías?

Guarda las imágenes en `public/images/services/` con formato WebP, PNG, JPG o SVG. Por ejemplo:

```text
public/images/services/mi-software.webp
```

En `site.js`, cambia solamente:

```js
image: '/images/services/mi-software.webp'
```

La imagen y la descripción cambiarán al hacer clic en cada servicio. También es posible usar las teclas Flecha arriba/Flecha abajo, Inicio y Fin cuando un botón tiene el foco.

## 2. Reemplaza o exporta el video Hero

Ya está incluido **el video de 10 segundos que compartiste**, en `public/videos/hero.mp4`, sin audio. Está configurado en `src/config/site.js`:

```js
hero: {
  video: {
    mp4: '/videos/hero.mp4',
    poster: '/images/hero-poster.jpg',
  },
  // ...
}
```

Para colocar otro, expórtalo como MP4 con códec H.264, idealmente 1920 × 1080, sin audio, y **reemplaza** `public/videos/hero.mp4`.

### Encadenar el video de 10 segundos y el cierre de 5 segundos

1. Exporta el segundo video de la V en blanco en MP4 H.264.
2. Nómbralo `hero-outro.mp4` y colócalo en `public/videos/hero-outro.mp4`.
3. En `src/config/site.js`, activa esta propiedad:

```js
hero: {
  video: {
    mp4: '/videos/hero.mp4',
    outroMp4: '/videos/hero-outro.mp4', // activa el segundo clip
    poster: '/images/hero-poster.jpg',
  },
}
```

**Comportamiento:** reproduce el clip principal de 10 s, luego el de 5 s y vuelve al principal; ambos videos en silencio y dentro del mismo Hero. Si dejas la propiedad `outroMp4` desactivada, se repite únicamente el video de 10 segundos. El segundo clip de la V **no está incluido**, porque aún no se ha proporcionado el archivo generado.

El reproductor dispone de controles de pausa y reproducción, además de imagen alternativa si falla la carga. Si el dispositivo solicita reducir movimiento, se muestra el poster y no se inicia el video.

## 3. Cambiar el orden de la landing

El orden de las secciones es explícito en `src/pages/HomePage.jsx`:

```jsx
<Hero hero={site.hero} />
<ServicesSection {...site.services} />
<IntroSection {...site.intro} />
<ProblemSection {...site.problem} />
<PlatformSection {...site.platform} />
<ContactCtaSection {...site.contactCta} />
```

El selector de servicios **va justo bajo el Hero** porque comunica inmediatamente la oferta antes de mostrar la explicación de la empresa. En pantallas amplias reproduce la composición de tu captura: imagen a la izquierda y opciones desplegables a la derecha. En móvil, ambas partes se apilan.

## 4. Otras personalizaciones importantes

- **Marca y navegación:** `src/config/site.js` → `brand`, `navigation`, `contact`.
- **Colores:** `src/styles/main.css` → `@theme`.
- **Foto / poster:** `public/images/hero-poster.jpg`.
- **Título y CTA del Hero:** `src/config/site.js` → `hero`.
- **Textos de beneficios:** `src/config/site.js` → `platform.benefits`.
- **Enlace real de contacto:** `src/config/site.js` → `contactCta.action.href`. Está provisionalmente vinculado al pie de página. Cámbialo por una dirección de correo, WhatsApp o ruta de formulario **real** antes de publicar.
- **Enlaces a redes y legales:** contienen elementos sin URL porque no se proporcionaron destinos. Configura sus `href` cuando los tengas.
- **Logo:** `public/images/vertice-mark.png` está extraído como referencia visual del logo que compartiste. Para publicación sustituye la imagen por el logo vectorial original de tu marca, si lo tienes.

## Arquitectura y reutilización

- React + JSX real, **sin HTML construido con template strings**.
- Tailwind CSS 4 con `@tailwindcss/vite`.
- Componentes existentes reutilizados (`Button`, `MediaImage`, `Header`, `FeatureCard`, etc.).
- Una única sección nueva (`ServicesSection.jsx`), que implementa su estado con `useState`.
- Contenido desacoplado en `site.js`, sin repetir estructuras y sin dependencias nuevas.
- Texto React escapado automáticamente, navegación por teclado y atención a `prefers-reduced-motion`.

## Créditos y origen del material

El diseño se inspira en la captura de DEScycle facilitada como referencia, pero las imágenes fotorealistas conceptuales de servicios fueron generadas con IA y el contenido de Vértice es propuesto. Los textos y beneficios son propuestas editoriales, no testimonios ni indicadores de desempeño medidos. El video de 10 segundos y la referencia de marca fueron aportados en esta conversación.

## V10 — Página Quiénes somos

La página sigue la referencia visual de cinco bloques: portada editorial clara, texto y galería de dos imágenes, equipo, bloque editorial de visión y CTA verde oliva. El Header y Footer siguen en MainLayout. No se agregan dependencias.

### Separación de responsabilidades

- `src/pages/AboutPage.jsx`: compone las secciones y no contiene textos de negocio.
- `src/config/about.js`: datos de la página y sus tres integrantes; `site.js` importa este objeto como `site.pages.about`.
- `SectionPanel.jsx` y `SectionHeading.jsx`: contenedor y tipografía común.
- `EditorialImage.jsx`: reutiliza `MediaImage` para imágenes con encuadre, proporción y pie opcional.
- `EditorialGallerySection.jsx` y `EditorialSplitSection.jsx`: composiciones editoriales reutilizables.
- `TeamSection.jsx`, `TeamMemberCard.jsx`: generan las tarjetas con `map`.
- `CarouselControls.jsx` y `useHorizontalCarousel.js`: controles y lógica de desplazamiento separados del contenido; se reutiliza `useReducedMotion`. Tres tarjetas visibles en escritorio, dos en tablet y una (con vista parcial de la siguiente) en móvil. Los controles se desactivan al alcanzar los extremos o cuando caben todas las tarjetas.
- `PageHeading.jsx`: nuevo variant `editorial`, sin modificar el diseño por defecto de Servicios y Recursos.
- `ContactCtaSection`, `Button`, `MediaImage`, `SiteLink`, `Header` y `Footer` se reutilizan.

### Incorporar las fotografías reales

Los integrantes se incluyen con los nombres y especialidades facilitados. No se han inventado cargos directivos, títulos académicos ni retratos. Los textos comerciales son propuestas editables. Las imágenes editoriales reutilizan recursos conceptuales generados con IA de la versión anterior y no representan al equipo real. Las tarjetas muestran iniciales hasta que configures las fotografías.

Guarda tus retratos WebP (idealmente 800 × 1000 o superior) en `public/images/team/` y cambia `image: null` en `src/config/about.js` por el objeto de imagen. Consulta `public/images/team/README.md` para el ejemplo exacto. `position` permite ajustar el encuadre sin deformar la fotografía. El CTA de contacto continúa siendo provisional; configura el canal real antes de publicar.

### Validar y desplegar

```bash
pnpm install
pnpm test
pnpm build
pnpm dev
```

Abre `/quienes-somos`. Prueba el menú, la flecha de continuación, el desplazamiento del carrusel en móvil y la navegación de las otras rutas. El rewrite existente de Vercel no cambia. Conserva la carpeta `.git` y tu `pnpm-lock.yaml` al copiar los archivos sobre tu proyecto.

Se comprobó la sintaxis de los módulos JS/JSX, las importaciones locales y los archivos de imagen. No se pudo instalar dependencias ni ejecutar Vitest o Vite porque el entorno no resuelve registry.npmjs.org. No se realizó una prueba visual en navegador.
