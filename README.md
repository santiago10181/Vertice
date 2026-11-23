# Vértice — Landing React + JSX + Vite + Tailwind CSS 4 (v7)

Proyecto **completo** basado en la versión anterior, con la nueva sección interactiva de servicios colocada **inmediatamente después del Hero**. El contenido está adaptado a **Vértice**, startup de desarrollo de software, agentes de IA, ciberseguridad y automatización.


## Novedades de esta versión

- Nueva paleta aplicada a la landing: `#131B2B`, `#2F4A63`, `#CFEAE0`.
- Ajuste de colores globales en `src/styles/main.css`.
- Se mejoraron las ilustraciones de servicios y la imagen de arquitectura con una estética más consistente y premium.

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

**Nota de validación:** los archivos JS/JSX se revisaron sintácticamente y se comprobaron rutas internas, activos y video mediante herramientas locales. La instalación de dependencias y el build completo no pudieron ejecutarse en el entorno de creación porque no resolvía `registry.npmjs.org`; realiza estos comandos en tu computador.

## Archivos y estructura

```text
public/
  images/
    hero-poster.jpg                 # Imagen fija alternativa al video
    vertice-mark.png                # Símbolo V recortado de la referencia proporcionada
    vertice-architecture.svg        # Ilustración de la sección «Nosotros»
    services/
      ai-agents.svg                 # Ilustración de agentes de IA
      software.svg                  # Ilustración de desarrollo de software
      cybersecurity.svg             # Ilustración de ciberseguridad
      automation.svg                # Ilustración de automatización
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
  image: '/images/services/software.svg',
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

El orden de las secciones es explícito en `src/App.jsx`:

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

El diseño se inspira en la captura de DEScycle facilitada como referencia, pero las ilustraciones de servicios y el contenido de Vértice son nuevos. Los textos y beneficios son propuestas editoriales, no testimonios ni indicadores de desempeño medidos. El video de 10 segundos y la referencia de marca fueron aportados en esta conversación.
# Vertice
