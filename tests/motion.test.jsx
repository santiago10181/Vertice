import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from '../src/App.jsx';
import { observeSectionReveal } from '../src/hooks/useSectionReveal.js';

const renderPath = path => renderToStaticMarkup(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);

describe('Motion system', () => {
  it('amplía el contenedor completo del Hero y conserva la entrada escalonada', () => {
    const html = renderPath('/');
    expect(html).toMatch(/<section[^>]*id="inicio"[^>]*class="[^"]*motion-hero-container/);
    expect(html).toContain('data-hero-entrance="waiting"');
    expect(html).not.toContain('motion-hero-media');
    expect(html).toContain('motion-enter motion-step-2');
    expect(html).toContain('motion-enter motion-step-4');
    expect(html).not.toContain('data-motion-revealed');
  });
  it('reutiliza la entrada de portada en las rutas editoriales', () => {
    for (const path of ['/quienes-somos', '/servicios', '/servicios/agentes-ia', '/servicios/edtech', '/servicios/software', '/servicios/ciberseguridad', '/noticias']) {
      expect(renderPath(path)).toContain('motion-enter motion-step-2');
    }
  });
  it('conserva el zoom interno en las portadas fotográficas', () => {
    for (const path of ['/servicios/agentes-ia', '/servicios/edtech']) {
      const html = renderPath(path);
      expect(html).toContain('motion-hero-media');
      expect(html).not.toContain('motion-hero-container');
    }
  });
  it('tolera un contenedor ausente sin bloquear contenido', () => {
    expect(() => observeSectionReveal(null)()).not.toThrow();
  });
});
