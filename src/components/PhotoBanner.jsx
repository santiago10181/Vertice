import { MediaImage } from './MediaImage.jsx';
import { Button } from './Button.jsx';

/** Banner editorial reutilizable: portada con H1 o bloque de cierre con H2. */
export function PhotoBanner({ id, eyebrow, title, heading, description, image, action, variant = 'spotlight' }) {
  const isHero = variant === 'hero';
  const Heading = isHero ? 'h1' : 'h2';
  const titleId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId}
      className={`on-dark relative isolate mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] overflow-hidden rounded-xl bg-brand-dark text-white scroll-mt-32 ${isHero ? 'mt-[clamp(12px,1.75vw,28px)] min-h-[clamp(570px,43vw,760px)]' : 'min-h-[clamp(430px,43vw,650px)]'}`}>
      <MediaImage {...image} loading={isHero ? 'eager' : 'lazy'} className="absolute inset-0 -z-20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/65 to-black/15 max-md:bg-linear-to-t max-md:from-black/95 max-md:via-black/75 max-md:to-black/20" />
      <div className={`flex min-h-[inherit] flex-col items-start px-[clamp(24px,4.45vw,62px)] ${isHero ? 'justify-end pt-[clamp(170px,15vw,220px)] pb-[clamp(42px,5vw,72px)]' : 'justify-start py-[clamp(52px,6vw,90px)]'}`}>
        {eyebrow && <p className="mb-6 type-label text-brand-accent">{eyebrow}</p>}
        <Heading id={titleId} className={`max-w-[930px] text-balance ${isHero ? 'type-display' : 'type-heading'}`}>
          {title ?? heading}
        </Heading>
        {description && <p className="mt-[clamp(28px,5vw,74px)] max-w-[570px] type-body text-white/95">{description}</p>}
        {action && <div className="mt-7"><Button {...action} /></div>}
      </div>
    </section>
  );
}
