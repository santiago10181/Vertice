import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { ServiceMegaMenu } from './ServiceMegaMenu.jsx';

/** Disclosure de navegación: no usa roles de menú de aplicaciones. */
export function ServicesNavItem({ label, href, items, mobileOpen, onNavigate }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const panelId = useId();
  const location = useLocation();
  const active = location.pathname === href || location.pathname.startsWith(`${href}/`);
  useEffect(() => setOpen(false), [location.key, mobileOpen]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1101px)');
    function outside(event) { if (!root.current?.contains(event.target)) setOpen(false); }
    function reset() { setOpen(false); }
    document.addEventListener('pointerdown', outside);
    media.addEventListener('change', reset);
    return () => {
      document.removeEventListener('pointerdown', outside);
      media.removeEventListener('change', reset);
    };
  }, []);
  function close() { setOpen(false); onNavigate?.(); }
  function desktopMouse(event) { return event.pointerType === 'mouse' && window.matchMedia('(min-width: 1101px)').matches; }
  return (
    <li ref={root} className="relative border-b border-white/10 min-[1101px]:border-0"
      onPointerEnter={event => { if (desktopMouse(event)) setOpen(true); }}
      onPointerLeave={event => { if (desktopMouse(event) && !root.current?.contains(document.activeElement)) setOpen(false); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) { event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus(); }
      }}>
      <button ref={trigger} type="button" aria-expanded={open} aria-controls={panelId} aria-current={location.pathname === href ? 'page' : active ? 'location' : undefined}
        onClick={() => setOpen(value => !value)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg py-3.5 text-left type-nav uppercase whitespace-nowrap transition-colors hover:text-brand-accent min-[1101px]:px-2 min-[1101px]:py-3 ${open || active ? 'bg-brand-olive text-brand-accent' : 'text-white'}`}>
        {label}
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}><path d="m3 6 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div hidden={!open}>
        {open && <ServiceMegaMenu id={panelId} items={items} overviewHref={href} onNavigate={close} />}
        {!open && <span id={panelId} />}
      </div>
    </li>
  );
}
