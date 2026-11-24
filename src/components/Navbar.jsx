import { Button } from './Button.jsx';

/** Una sola lista de enlaces para navegación de escritorio y móvil. */
export function Navbar({ links = [], contact, onNavigate }) {
  return (
    <nav
      id="navegacion-principal"
      aria-label="Navegación principal"
      className="absolute inset-x-0 top-[calc(100%+10px)] hidden flex-col items-stretch gap-6 rounded-xl bg-brand-dark p-6 shadow-2xl group-data-[open=true]:flex min-[1101px]:static min-[1101px]:flex min-[1101px]:flex-1 min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:justify-end min-[1101px]:gap-[clamp(22px,3.8vw,58px)] min-[1101px]:rounded-none min-[1101px]:p-0 min-[1101px]:shadow-none"
    >
      <ul className="flex list-none flex-col items-stretch gap-0 p-0 min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-[clamp(13px,2.25vw,36px)]">
        {links.map(({ label, href }) => (
          <li
            key={`${label}-${href}`}
            className="border-b border-white/10 last:border-0 min-[1101px]:border-0"
          >
            <a
              href={href}
              onClick={onNavigate}
              className="block py-3.5 font-code text-sm font-semibold whitespace-nowrap text-white no-underline transition-colors duration-200 hover:text-brand-green min-[1101px]:py-0 min-[1101px]:text-xs"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {contact && (
        <Button
          {...contact}
          onClick={onNavigate}
          className="self-start min-[1101px]:self-auto"
        />
      )}
    </nav>
  );
}
