import { NavLink } from 'react-router';
import { Button } from './Button.jsx';
import { ServicesNavItem } from './ServicesNavItem.jsx';
import { serviceItems } from '../config/services.js';

/** Una sola lista de enlaces para navegación de escritorio y móvil. */
export function Navbar({ links = [], contact, onNavigate, mobileOpen }) {
  return (
    <nav
      id="navegacion-principal"
      aria-label="Navegación principal"
      className="site-navigation absolute inset-x-0 top-[calc(100%+10px)] hidden flex-col items-stretch gap-6 rounded-xl border border-solid border-white bg-brand-dark p-6 shadow-2xl max-[1100px]:max-h-[calc(100dvh-130px)] max-[1100px]:overflow-y-auto group-data-[open=true]:flex min-[1101px]:static min-[1101px]:rounded-none min-[1101px]:border-0 min-[1101px]:p-0 min-[1101px]:shadow-none"
    >
      <ul className="site-navigation-links flex list-none flex-col items-stretch gap-0 p-0 min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-[clamp(12px,1.65vw,28px)]">
        {links.map(({ label, href, submenu }) => submenu === 'services' ? (
          <ServicesNavItem key={href} label={label} href={href} items={serviceItems} mobileOpen={mobileOpen} onNavigate={onNavigate} />
        ) : (
          <li
            key={`${label}-${href}`}
            className="border-b border-white/10 last:border-0 min-[1101px]:border-0"
          >
            <NavLink
              to={href}
              end={href === '/'}
              onClick={onNavigate}
              className={({ isActive }) => `block py-3.5 type-nav uppercase whitespace-nowrap no-underline transition-colors duration-200 hover:text-brand-accent min-[1101px]:py-0 ${isActive ? 'text-brand-accent underline decoration-brand-accent underline-offset-8' : 'text-white'}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {contact && (
        <Button
          {...contact}
          onClick={onNavigate}
          className="site-navigation-contact self-start min-[1101px]:self-auto"
        />
      )}
    </nav>
  );
}
