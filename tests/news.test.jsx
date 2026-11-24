import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { App } from '../src/App.jsx';
import { NewsGrid } from '../src/components/NewsGrid.jsx';
import { newsArticles, newsCategories, filterNews, findNews } from '../src/config/news.js';
import { site } from '../src/config/site.js';
const html = (element, path = '/noticias') => renderToStaticMarkup(<MemoryRouter initialEntries={[path]}>{element}</MemoryRouter>);

describe('Noticias', () => {
  it('centraliza categorías, identificadores y enlaces válidos', () => {
    expect(new Set(newsArticles.map(article => article.id)).size).toBe(newsArticles.length);
    expect(newsArticles).toHaveLength(6);
    for (const article of newsArticles) {
      expect(newsCategories.some(c => c.id === article.category)).toBe(true);
      expect(findNews(article.id)).toBe(article);
      expect(article.href).toBe(`/noticias/${article.id}`);
      expect(article.paragraphs.length).toBeGreaterThan(1);
    }
    expect(site.navigation.some(link => link.href === '/noticias')).toBe(true);
  });
  it('muestra todas las tarjetas, sin imágenes obligatorias', () => {
    const out = html(<NewsGrid items={newsArticles} categories={newsCategories} />);
    expect(out.match(/<article\b/g)).toHaveLength(6);
    expect(out).not.toContain('<img');
    newsArticles.forEach(article => expect(out).toContain(`href="${article.href}"`));
  });
  it.each(['empresa','analisis'])('filtra por URL la categoría %s', category => {
    const out = html(<App />, `/noticias?categoria=${category}`);
    expect(out.match(/<article\b/g)).toHaveLength(filterNews(category).length);
    for (const article of newsArticles) {
      if (article.category === category) expect(out).toContain(`href="${article.href}"`);
      else expect(out).not.toContain(`href="${article.href}"`);
    }
    expect(out.match(/aria-pressed="true"/g)).toHaveLength(1);
  });
  it('usa Todas cuando el filtro es desconocido', () => {
    expect(html(<App />, '/noticias?categoria=no-existe').match(/<article\b/g)).toHaveLength(6);
  });
  it('renderiza un estado vacío reutilizable', () => {
    expect(html(<NewsGrid items={[]} categories={newsCategories} />)).toContain('No hay publicaciones');
  });
  it.each(newsArticles)('renderiza $href con artículo y layout compartido', article => {
    const out = html(<App />, article.href);
    expect(out).toContain(article.title);
    expect(out).toContain(article.paragraphs[0]);
    expect(out).toContain('VOLVER A NOTICIAS');
    expect(out.match(/<header\b/g)).toHaveLength(1);
    expect(out.match(/<footer\b/g)).toHaveLength(1);
  });
  it('muestra el 404 para una noticia inexistente', () => {
    expect(html(<App />, '/noticias/no-existe')).toContain('Esta página no existe.');
  });
});
