import { MemoryRouter } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { App } from '../src/App.jsx';
import { about } from '../src/config/about.js';
import { TeamMemberCard } from '../src/components/TeamMemberCard.jsx';

const render = (element, path = '/quienes-somos') => renderToStaticMarkup(
  <MemoryRouter initialEntries={[path]}>{element}</MemoryRouter>
);

describe('Quiénes somos', () => {
  it('compone los bloques en el orden editorial y comparte el layout', () => {
    const out = render(<App />);
    const ids = ['page-title', 'nuestro-enfoque', 'equipo', 'nuestra-vision', 'contacto', 'pie-de-pagina'];
    const positions = ids.map(id => out.indexOf(`id="${id}"`));
    expect(positions.every(pos => pos >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((a,b) => a-b));
    expect(out.match(/<header\b/g)).toHaveLength(1);
    expect(out.match(/<footer\b/g)).toHaveLength(1);
  });
  it('incluye exactamente los tres integrantes aportados', () => {
    const out = render(<App />);
    expect(about.team.members).toHaveLength(3);
    for (const member of about.team.members) {
      expect(out).toContain(member.name);
      expect(out).toContain(member.role);
    }
    expect(out.match(/FOTOGRAFÍA PENDIENTE/g)).toHaveLength(3);
    expect(out).toContain('aria-controls="equipo-lista"');
  });
  it('usa fotografía real en lugar de iniciales cuando se configura', () => {
    const out = render(<TeamMemberCard name="Felipe Mariño" role="Especialista" image={{ src:'/images/team/felipe-marino.webp', width:800, height:1000 }} />);
    expect(out).toContain('/images/team/felipe-marino.webp');
    expect(out).toContain('Retrato de Felipe Mariño');
    expect(out).not.toContain('FOTOGRAFÍA PENDIENTE');
  });
  it('mantiene disponibles los recursos editoriales y no altera Inicio', () => {
    for (const image of [...about.approach.images, about.vision.image]) expect(existsSync(`public${image.src}`)).toBe(true);
    const home = render(<App />, '/');
    expect(home).toContain('hero-title');
    expect(home).not.toContain('id="equipo"');
  });
});
