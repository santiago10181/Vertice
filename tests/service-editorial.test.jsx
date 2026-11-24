import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { existsSync } from 'node:fs';
import { App } from '../src/App.jsx';
import { findService } from '../src/config/services.js';

const render = id => renderToStaticMarkup(<MemoryRouter initialEntries={[`/servicios/${id}`]}><App /></MemoryRouter>);

describe('Páginas editoriales de los cuatro servicios', () => {
  it.each(['agentes-ia', 'edtech'])('renderiza la portada, reto, beneficios y cierre de %s', id => {
    const { page } = findService(id);
    const html = render(id);
    expect(html).toContain(page.hero.title);
    expect(html).toContain(page.challenge.heading);
    expect(html).toContain(page.benefits.heading);
    expect(html).toContain(page.spotlight.heading);
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html.match(/<header\b/g)).toHaveLength(1);
    expect(html.match(/<footer\b/g)).toHaveLength(1);
    for (const item of page.benefits.items) expect(html).toContain(item.title);
    for (const image of [page.hero.image, page.challenge.image, page.spotlight.image]) {
      expect(existsSync(`public${image.src}`)).toBe(true);
      expect(html).toContain(image.src);
    }
  });
  it.each(['software', 'ciberseguridad'])('renderiza la plantilla de aplicaciones de %s', id => {
    const { page } = findService(id);
    const html = render(id);
    expect(page.layout).toBe('applications');
    for (const title of [page.hero.title, page.metrics.heading, page.challenge.heading, page.applications.heading]) expect(html).toContain(title);
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html.match(/<header\b/g)).toHaveLength(1);
    expect(html.match(/<footer\b/g)).toHaveLength(1);
    expect(html.match(/<dt\b/g)).toHaveLength(2);
    expect(html).toContain('#enfoque-del-servicio"');
    for (const item of page.applications.items) expect(html).toContain(item.title);
    for (const image of [page.hero.image, page.challenge.image, ...page.applications.items.map(item => item.image)]) {
      expect(existsSync(`public${image.src}`)).toBe(true);
      expect(html).toContain(image.src);
    }
  });
});
