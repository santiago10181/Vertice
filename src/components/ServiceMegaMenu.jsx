import { MediaImage } from './MediaImage.jsx';
import { SiteLink } from './SiteLink.jsx';
import { ArrowRightIcon } from './Icons.jsx';

/** Presentación del catálogo. El componente padre controla su apertura. */
export function ServiceMegaMenu({ id, items = [], overviewHref, onNavigate }) {
  const featured = items.find(item => item.featured) ?? items[0];
  const others = items.filter(item => item.id !== featured?.id);
  return (
    <div id={id} className="min-[1101px]:absolute min-[1101px]:top-full min-[1101px]:left-1/2 min-[1101px]:-translate-x-1/2 min-[1101px]:w-[min(690px,calc(100vw-100px))] min-[1101px]:pt-4">
      <div className="rounded-xl border border-white/20 bg-brand-dark p-4 text-white min-[1101px]:grid min-[1101px]:grid-cols-[1.05fr_1fr] min-[1101px]:gap-6 min-[1101px]:p-6 min-[1101px]:shadow-2xl">
        {featured && (
          <SiteLink href={featured.href} onClick={onNavigate} className="group/cta block rounded-lg hover:text-brand-accent">
            <span className="type-label text-brand-accent">SOLUCIÓN DESTACADA</span>
            <span className="mt-2 block type-card-heading">{featured.menuTitle}</span>
            <span className="mt-1 block type-small text-white/75">{featured.summary}</span>
            <span className="relative mt-4 block aspect-[16/8] overflow-hidden rounded-lg bg-brand-olive">
              <MediaImage src={featured.image} alt="" className="transition-transform duration-300 group-hover/cta:scale-105 motion-reduce:transform-none" />
              <span className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-lg bg-brand-accent text-brand-dark"><ArrowRightIcon /></span>
            </span>
          </SiteLink>
        )}
        <div className="mt-5 min-w-0 min-[1101px]:mt-0">
          <ul className="m-0 list-none divide-y divide-white/20 p-0">
            {others.map(service => (
              <li key={service.id}>
                <SiteLink href={service.href} onClick={onNavigate} className="group/cta block rounded py-3 hover:text-brand-accent first:pt-2">
                  <span className="flex items-start justify-between gap-3 type-small font-semibold"><span>{service.menuTitle}</span><span className="shrink-0 text-brand-accent"><ArrowRightIcon /></span></span>
                  <span className="mt-1 block type-small text-white/75">{service.summary}</span>
                </SiteLink>
              </li>
            ))}
          </ul>
          <SiteLink href={overviewHref} onClick={onNavigate} className="mt-3 inline-block rounded type-label text-brand-accent underline underline-offset-4 hover:text-white">VER TODOS LOS SERVICIOS</SiteLink>
        </div>
      </div>
    </div>
  );
}
