import { useState } from 'react';
import { Button } from './Button.jsx';
import { MediaImage } from './MediaImage.jsx';

/**
 * Selector de servicios inspirado en la sección de DEScycle.
 * Los botones se manejan con React; los datos viven en src/config/site.js.
 * Cada servicio cambia el visual, la descripción y la llamada a la acción.
 */
export function ServicesSection({ id = 'servicios', eyebrow, heading, caption, items = [], action }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const headingId = `${id}-title`;

  function handleKeyDown(event, index) {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (!items.length) return;
    const next = event.key === 'Home' ? 0
      : event.key === 'End' ? items.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    setActiveId(items[next].id);
    event.currentTarget.parentElement?.parentElement?.querySelectorAll('button[data-service-select]')[next]?.focus();
  }

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] scroll-mt-28 rounded-xl bg-brand-paper px-[clamp(22px,4.45vw,62px)] pt-16 pb-16 text-brand-dark max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-5 max-[700px]:pt-12 max-[700px]:pb-12"
    >
      <div className="mb-11 flex flex-wrap items-end justify-between gap-6 max-[700px]:mb-8">
        <div className="max-w-[760px]">
          <p className="mb-4 font-code text-xs tracking-[.09em] text-brand-blue">{eyebrow}</p>
          <h2 id={headingId} className="font-display text-[clamp(34px,4vw,58px)] leading-[1.1] font-normal tracking-[-.053em] text-balance">
            {heading}
          </h2>
        </div>
        <p className="pb-2 font-code text-xs tracking-wide text-brand-muted">{caption}</p>
      </div>

      <div className="grid items-stretch gap-[clamp(26px,4vw,60px)] min-[960px]:grid-cols-2">
        <div className="relative isolate min-h-[530px] overflow-hidden rounded-lg bg-brand-dark max-[960px]:min-h-0 max-[960px]:aspect-[6/5] max-[540px]:aspect-[4/4]">
          {active && (
            <MediaImage
              key={active.id}
              src={active.image}
              alt={active.imageAlt}
              className="animate-service-reveal object-center"
              loading="eager"
            />
          )}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-brand-dark/85 to-transparent" />
          <div className="pointer-events-none absolute right-6 bottom-6 left-6 flex items-end justify-between gap-4 text-white" aria-hidden="true">
            <div>
              <span className="font-code text-[11px] tracking-widest text-brand-green">VÉRTICE / SOLUCIONES</span>
              <p className="mt-2 font-display text-[clamp(22px,2.35vw,34px)] leading-tight tracking-tight">{active?.title}</p>
            </div>
            <span className="font-code text-3xl text-white/50">{active?.number}</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-1" aria-label="Seleccionar una solución">
          {items.map((service, index) => {
            const selected = active?.id === service.id;
            return (
              <div key={service.id} className="border-b border-brand-blue/18 first:border-t">
                <button
                  data-service-select
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group w-full cursor-pointer py-6 text-left transition-colors duration-300 focus-visible:outline-offset-[-3px] max-[700px]:py-5 ${selected ? 'text-brand-dark' : 'text-brand-muted hover:text-brand-blue'}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={`font-code text-[11px] tabular-nums ${selected ? 'text-brand-blue' : 'text-brand-muted/70'}`}>{service.number}</span>
                    <span className="font-display text-[clamp(22px,2.15vw,32px)] leading-tight tracking-[-.043em]">{service.title}</span>
                    <span aria-hidden="true" className={`ml-auto text-2xl leading-none transition-transform duration-300 ${selected ? 'rotate-45 text-brand-blue' : 'text-brand-muted group-hover:translate-x-1'}`}>↗</span>
                  </span>
                  {selected && (
                    <span id={`${id}-detalle`} className="mt-4 block pl-[32px]">
                      <span className="block max-w-[530px] font-display text-[15px] leading-[1.55] text-brand-blue">{service.description}</span>
                      <span className="mt-4 block font-code text-[11px] leading-5 tracking-wide text-brand-blue">{service.detail}</span>
                    </span>
                  )}
                </button>
                <div className="h-[2px] w-full bg-transparent">
                  <div className={`h-full bg-brand-blue transition-[width] duration-500 ease-emphasis ${selected ? 'w-[26%]' : 'w-0'}`} />
                </div>
              </div>
            );
          })}
          {action && (
            <div className="mt-8">
              <Button {...action} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
