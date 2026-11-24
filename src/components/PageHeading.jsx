import { Button } from './Button.jsx';
import { SectionPanel } from './SectionPanel.jsx';
import { SiteLink } from './SiteLink.jsx';
import { EditorialImage } from './EditorialImage.jsx';
import { ArrowRightIcon } from './Icons.jsx';

/** Encabezado compartido: variante corporativa y editorial clara. */
export function PageHeading({ eyebrow, title, description, action, variant = 'default', nextSectionId, image, children }) {
  if (variant === 'plain') {
    return (
      <SectionPanel labelledBy="page-title" tone="paper" className="mb-0!">
        {eyebrow && <p className="mb-6 type-label uppercase text-brand-dark">{eyebrow}</p>}
        <h1 id="page-title" className="max-w-5xl type-display text-balance">{title}</h1>
        {description && <p className="mt-7 max-w-[560px] type-body">{description}</p>}
        {action && <div className="mt-8"><Button {...action} /></div>}
        {children}
      </SectionPanel>
    );
  }

  if (variant === 'editorial') {
    return (
      <SectionPanel labelledBy="page-title" spacing="hero" className="mt-[clamp(12px,1.75vw,28px)]">
        {eyebrow && <p className="mb-6 type-label uppercase text-brand-olive">{eyebrow}</p>}
        <h1 id="page-title" className="max-w-[1000px] type-display text-balance">{title}</h1>
        <div className="mt-[clamp(36px,6vw,84px)] grid items-start gap-6 border-t border-brand-dark/65 pt-10 md:grid-cols-2 md:gap-14">
          {nextSectionId ? (
            <SiteLink href={`#${nextSectionId}`} aria-label="Continuar a la siguiente sección" className="flex size-12 items-center justify-center rounded-lg bg-brand-accent text-brand-dark transition-colors hover:bg-brand-accent-hover">
              <span className="rotate-90"><ArrowRightIcon /></span>
            </SiteLink>
          ) : <div />}
          {description && <p className="max-w-[620px] type-body">{description}</p>}
        </div>
        {action && <div className="mt-8"><Button {...action} /></div>}
        {image && <div className="mt-[clamp(38px,6vw,80px)]"><EditorialImage image={image} aspectClass="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]" /></div>}
      </SectionPanel>
    );
  }

  return (
    <section className="on-dark mx-[clamp(12px,1.75vw,28px)] mb-6 rounded-xl bg-brand-olive px-[clamp(24px,4.45vw,62px)] py-[clamp(48px,7vw,100px)] text-white">
      {eyebrow && <p className="mb-6 type-label uppercase text-brand-accent">{eyebrow}</p>}
      <h1 className="max-w-5xl text-balance type-display">{title}</h1>
      {description && <p className="mt-6 max-w-2xl type-body text-white/90">{description}</p>}
      {action && <div className="mt-8"><Button {...action} /></div>}
    </section>
  );
}
