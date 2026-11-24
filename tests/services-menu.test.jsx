import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { ServiceMegaMenu } from '../src/components/ServiceMegaMenu.jsx';
import { App } from '../src/App.jsx';
import { serviceItems, serviceLinks, findService } from '../src/config/services.js';
const html = (element, path = '/') => renderToStaticMarkup(<MemoryRouter initialEntries={[path]}>{element}</MemoryRouter>);
describe('Catálogo y mega menú de servicios', () => {
  it('prioriza IA y conserva cuatro áreas', () => {
    expect(serviceItems.map(s => s.id)).toEqual(['agentes-ia','software','edtech','ciberseguridad']);
    expect(serviceItems.filter(s => s.featured).map(s => s.id)).toEqual(['agentes-ia']);
    expect(serviceLinks.map(s => s.href)).toEqual(serviceItems.map(s => s.href));
  });
  it('renderiza los cuatro destinos y un destacado', () => {
    const out = html(<ServiceMegaMenu id="test-menu" items={serviceItems} overviewHref="/servicios" />);
    serviceItems.forEach(s => expect(out).toContain(`href="${s.href}"`));
    expect(out).toContain('ai-agents.webp');
    expect(out).toContain('SOLUCIÓN DESTACADA');
  });
  it.each(serviceItems)('renderiza $href con layout compartido', (service) => {
    const out = html(<App />, service.href);
    expect(out).toContain(service.page?.hero.title ?? service.heading);
    expect(out.match(/<header\b/g)).toHaveLength(1);
    expect(out.match(/<footer\b/g)).toHaveLength(1);
  });
  it('mantiene la compatibilidad con automatización', () => expect(findService('automatizacion').id).toBe('agentes-ia'));
  it('muestra 404 si el servicio no existe', () => expect(html(<App />, '/servicios/no-existe')).toContain('Esta página no existe.'));
});
