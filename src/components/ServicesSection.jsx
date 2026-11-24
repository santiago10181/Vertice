import { useState } from 'react';
import { Button } from './Button.jsx';
import { SiteLink } from './SiteLink.jsx';
import { MediaImage } from './MediaImage.jsx';

/**
 * Selector de servicios inspirado en la sección de DEScycle.
 * Los botones se manejan con React; los datos viven en src/config/site.js.
 * Cada servicio cambia el visual, la descripción y la llamada a la acción.
 */
export function ServicesSection({ id = 'servicios', eyebrow, heading, caption, items = [], action, initialServiceId }) {
  const [activeId, setActiveId] = useState(initialServiceId ?? items[0]?.id);
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
          <p className="mb-4 type-label text-brand-olive">{eyebrow}</p>
          <h2 id={headingId} className="type-heading text-balance">
            {heading}
          </h2>
        </div>
        <p className="pb-2 type-label text-brand-muted">{caption}</p>
      </div>

      <div className="grid items-center gap-[clamp(26px,4vw,60px)] min-[960px]:grid-cols-2">
        <figure className="relative m-0 aspect-square self-start overflow-hidden rounded-xl bg-brand-dark max-[959px]:aspect-[5/4] max-[540px]:aspect-square">
          {active && (
            <MediaImage
              key={active.id}
              src={active.image}
              alt={active.imageAlt}
              width={508}
              height={508}
              position={active.imagePosition ?? 'center'}
              className="absolute inset-0 animate-service-reveal"
            />
          )}
        </figure>

        <div className="flex min-w-0 flex-col justify-center gap-1" aria-label="Seleccionar una solución">
          {items.map((service, index) => {
            const selected = active?.id === service.id;
            return (
              <div key={service.id} className="border-b border-brand-olive/25 first:border-t">
                <button
                  data-service-select
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group w-full cursor-pointer py-6 text-left transition-colors duration-300 focus-visible:outline-offset-[-3px] max-[700px]:py-5 ${selected ? 'text-brand-dark' : 'text-brand-muted hover:text-brand-olive'}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={`type-label tabular-nums ${selected ? 'text-brand-olive' : 'text-brand-muted'}`}>{service.number}</span>
                    <span className="type-card-heading">{service.title}</span>
                    <span aria-hidden="true" className={`ml-auto text-2xl leading-none transition-transform duration-300 ${selected ? 'rotate-45 text-brand-olive' : 'text-brand-muted group-hover:translate-x-1'}`}>↗</span>
                  </span>
                  {selected && (
                    <span id={`${id}-detalle`} className="mt-4 block pl-[32px]">
                      <span className="block max-w-[530px] type-body text-brand-olive">{service.description}</span>
                      <span className="mt-4 block type-label text-brand-olive">{service.detail}</span>
                    </span>
                  )}
                </button>
                <div className="h-[2px] w-full bg-transparent">
                  <div className={`h-full bg-brand-olive transition-[width] duration-500 ease-emphasis ${selected ? 'w-[26%]' : 'w-0'}`} />
                </div>
              </div>
            );
          })}
          {active?.href && <SiteLink href={active.href} className="mt-5 self-start type-label text-brand-olive underline underline-offset-4 hover:text-brand-dark">CONOCER ESTA SOLUCIÓN ↗</SiteLink>}
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
