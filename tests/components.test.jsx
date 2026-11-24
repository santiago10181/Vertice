import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { existsSync } from 'node:fs';
import { App } from '../src/App.jsx';
import { site } from '../src/config/site.js';
import { ServicesSection } from '../src/components/ServicesSection.jsx';
import { Header } from '../src/components/Header.jsx';
import { Hero } from '../src/components/Hero.jsx';
import { HeroBackgroundVideo } from '../src/components/HeroBackgroundVideo.jsx';
import { Brand } from '../src/components/Brand.jsx';
import { Button } from '../src/components/Button.jsx';
import { IntroSection } from '../src/components/IntroSection.jsx';
import { MediaImage } from '../src/components/MediaImage.jsx';
import { ProblemSection } from '../src/components/ProblemSection.jsx';
import { PlatformSection } from '../src/components/PlatformSection.jsx';
import { FeatureCard } from '../src/components/FeatureCard.jsx';
import { ContactCtaSection } from '../src/components/ContactCtaSection.jsx';
import { FooterColumn } from '../src/components/FooterColumn.jsx';
import { Footer } from '../src/components/Footer.jsx';

const html = (element, path = "/") => renderToStaticMarkup(<MemoryRouter initialEntries={[path]}>{element}</MemoryRouter>);

describe('Landing Vértice: JSX, DRY y arquitectura', () => {
  it('integra la sección de servicios inmediatamente después del hero', () => {
    const out = html(<App />);
    const ids = ['inicio', 'servicios', 'nosotros', 'por-que', 'plataforma', 'contacto', 'pie-de-pagina'];
    for (const id of ids) expect(out).toContain(`id="${id}"`);
    expect(ids.map((id) => out.indexOf(`id="${id}"`))).toEqual([...ids.map((id) => out.indexOf(`id="${id}"`))].sort((a, b) => a - b));
  });
  it('solo crea una cabecera y un footer', () => {
    const out = html(<App />);
    expect(out.match(/<header\b/g)).toHaveLength(1);
    expect(out.match(/<footer\b/g)).toHaveLength(1);
  });
  it('usa la marca VÉRTICE en todos los componentes principales', () => {
    expect(html(<Brand {...site.brand} />)).toContain('VÉRTICE');
    expect(html(<Footer {...site.footer} brandName={site.brand.name} />)).toContain('Vértice');
  });
  it('el header contiene navegación accesible', () => {
    const out = html(<Header brand={site.brand} navigation={site.navigation} contact={site.contact} />);
    expect(out).toContain('aria-expanded="false"');
    expect(out).toContain('id="navegacion-principal"');
    expect(out).toContain('Servicios');
    expect(out).toContain('border-solid border-white');
  });
  it('el hero conserva un video configurable y su título', () => {
    const out = html(<Hero hero={site.hero} />);
    expect(out).toContain('Inteligencia que');
    expect(out).toContain('transforma negocios');
    expect(out).toContain('EXPLORAR SOLUCIONES');
    expect(site.hero.video.mp4).toBe('/videos/hero.mp4');
    expect(existsSync('public/videos/hero.mp4')).toBe(true);
    expect(site.hero.video.replayAfterMs).toBe(0);
    expect(existsSync(`public${site.hero.video.finalPoster}`)).toBe(true);
  });
  it('el video tiene poster y no carga cuando SSR desconoce la preferencia de movimiento', () => {
    const out = html(<HeroBackgroundVideo video={site.hero.video} />);
    expect(out).toContain('hero-poster.jpg');
    expect(out).not.toContain('<video');
  });
  it('la nueva sección muestra los cuatro títulos, con el primero seleccionado', () => {
    const out = html(<ServicesSection {...site.services} />);
    for (const item of site.services.items) expect(out).toContain(item.title);
    expect(out.match(/data-service-select="true"/g)).toHaveLength(4);
    expect(out.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(out).toContain(site.services.items[0].description);
  });
  it('la sección de servicios mantiene una sola fotografía visible y CTA compartido', () => {
    const out = html(<ServicesSection {...site.services} />);
    expect(out.match(/<img\b/g)).toHaveLength(1);
    expect(out).toContain('ai-agents.webp');
    expect(out).toContain('CONVERSEMOS SOBRE TU PROYECTO');
  });
  it('los servicios se configuran desde site.js y tienen imágenes WebP disponibles', () => {
    for (const item of site.services.items) {
      expect(item.id).toMatch(/^[a-z-]+$/);
      expect(existsSync(`public${item.image}`)).toBe(true);
    }
    expect(new Set(site.services.items.map((x) => x.id)).size).toBe(4);
  });
  it('la sección funciona sin servicios', () => {
    const out = html(<ServicesSection id="demo" heading="Demo" items={[]} />);
    expect(out).toContain('Demo');
    expect(out).not.toContain('data-service-select');
  });
  it('la imagen reutilizable conserva accesibilidad, carga y escape JSX', () => {
    const out = html(<MediaImage src="/example.svg" alt="<script>alert(1)</script>" />);
    expect(out).toContain('loading="lazy"');
    expect(out).toContain('&lt;script&gt;');
    expect(out).not.toContain('<script>');
  });
  it('IntroSection mantiene imagen independiente y descripción', () => {
    const out = html(<IntroSection {...site.intro} />);
    expect(out).toContain('vertice-team.webp');
    expect(out).toContain('Creamos tecnología');
  });
  it('ProblemSection conserva estadísticas sin afirmaciones de terceros', () => {
    const out = html(<ProblemSection {...site.problem} />);
    expect(out.match(/<dt\b/g)).toHaveLength(2);
    expect(out).toContain('04');
    expect(out).not.toContain('$130bn');
  });
  it('PlatformSection reutiliza cuatro FeatureCards con SVG', () => {
    const out = html(<PlatformSection {...site.platform} />);
    expect(out.match(/<li\b/g)).toHaveLength(4);
    expect(out.match(/<svg\b/g)).toHaveLength(5); // 4 iconos + flecha del CTA
  });
  it('FeatureCard acepta textos y props', () => {
    const out = html(<FeatureCard title="A & B" description="Hola" />);
    expect(out).toContain('A &amp; B');
  });
  it('Button conserva sus variantes y escapa texto peligroso', () => {
    const out = html(<Button label="<img onerror=alert(1)>" href="#contacto" variant="dark" />);
    expect(out).toContain('&lt;img');
    expect(out).not.toContain('<img onerror');
    expect(out).toContain('bg-brand-dark');
  });
  it('ContactCtaSection muestra destino del contacto y mensaje', () => {
    const out = html(<ContactCtaSection {...site.contactCta} />);
    expect(out).toContain('bg-brand-olive');
    expect(out).toContain('HABLEMOS DE TU PROYECTO');
    expect(out).toContain('Pronto podrás escribirnos');
  });
  it('FooterColumn no convierte enlaces sin href en enlaces rotos', () => {
    const out = html(<FooterColumn title="Ejemplo" links={[{label:'Con destino',href:'#servicios'},{label:'Sin destino'}]} />);
    expect(out.match(/<a\b/g)).toHaveLength(1);
  });
  it('Footer mantiene columnas y copyright', () => {
    const out = html(<Footer {...site.footer} brandName={site.brand.name} home={site.brand.home} />);
    expect(out.match(/<h3\b/g)).toHaveLength(4);
    expect(out).toContain('© 2026 Vértice');
  });
});


describe('React Router: páginas y navegación', () => {
  it.each([
    ['/', 'hero-title'],
    ['/quienes-somos', 'Construimos el futuro digital de las empresas.'],
    ['/servicios', 'El siguiente nivel de tu tecnología.'],
    ['/noticias', 'NOTICIAS Y PERSPECTIVAS'],
  ])('renderiza %s con un layout compartido y enlace activo', (path, expected) => {
    const out = html(<App />, path);
    expect(out).toContain(expected);
    expect(out.match(/<header\b/g)).toHaveLength(1);
    expect(out.match(/<footer\b/g)).toHaveLength(1);
    expect(out.match(/aria-current="page"/g)).toHaveLength(1);
  });
  it('permite enlazar a un servicio concreto con query params', () => {
    const out = html(<App />, '/servicios?servicio=ciberseguridad');
    expect(out).toContain('cybersecurity.webp');
    expect(out).toContain(site.services.items.find(item => item.id === 'ciberseguridad').description);
  });
  it('muestra el nuevo enlace Noticias y elimina Recursos de la navbar', () => {
    const out = html(<Header brand={site.brand} navigation={site.navigation} contact={site.contact} />, '/noticias');
    expect(out).toContain('href="/noticias"');
    expect(out).not.toContain('href="/recursos"');
  });
  it('muestra 404 para rutas desconocidas', () => {
    expect(html(<App />, '/no-existe')).toContain('Esta página no existe.');
  });
});
