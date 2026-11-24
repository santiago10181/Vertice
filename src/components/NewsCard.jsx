import { SiteLink } from './SiteLink.jsx';
import { ArrowRightIcon } from './Icons.jsx';

/** Tarjeta editorial sin imágenes, siguiendo el patrón de la referencia. */
export function NewsCard({ categoryLabel, title, href }) {
  return (
    <article className="h-full min-w-0">
      <SiteLink href={href} className="group/cta flex h-full min-h-[320px] flex-col rounded-xl bg-brand-olive/10 p-[clamp(24px,2.5vw,34px)] text-brand-dark no-underline transition-colors hover:bg-brand-accent/45 lg:min-h-[352px]">
        <p className="type-label uppercase">{categoryLabel}</p>
        <h3 className="mt-6 mb-10 break-words type-card-heading">{title}</h3>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-brand-dark/30 pt-3" aria-hidden="true">
          <span className="type-label uppercase">Leer más</span>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-dark text-white transition-colors group-hover/cta:bg-brand-olive"><ArrowRightIcon /></span>
        </div>
      </SiteLink>
    </article>
  );
}
