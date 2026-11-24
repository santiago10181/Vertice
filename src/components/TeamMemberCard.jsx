import { MediaImage } from './MediaImage.jsx';

/** No simula un retrato real si la fotografía no ha sido proporcionada. */
export function TeamMemberCard({ name, role, description, image }) {
  const initials = name.trim().split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase();
  return (
    <article className="group h-full min-w-0 overflow-hidden rounded-xl border border-brand-olive/15 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-olive">
        {image?.src ? (
          <MediaImage {...image} alt={image.alt ?? `Retrato de ${name}`} position={image.position ?? '50% 35%'} className="absolute inset-0" />
        ) : (
          <div aria-hidden="true" className="relative flex h-full items-center justify-center overflow-hidden bg-linear-to-br from-brand-dark to-brand-olive">
            <div className="absolute size-[75%] rounded-full border border-white/15" />
            <div className="absolute size-[55%] rounded-full border border-brand-accent/30" />
            <span className="relative type-stat text-brand-accent">{initials}</span>
            <span className="absolute right-5 bottom-5 left-5 type-label text-white/85">FOTOGRAFÍA PENDIENTE</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 p-[clamp(18px,2vw,28px)]">
        <h3 className="type-card-heading">{name}</h3>
        <p className="type-small font-medium text-brand-olive">{role}</p>
        {description && <p className="border-t border-brand-olive/15 pt-4 type-small text-brand-muted">{description}</p>}
      </div>
    </article>
  );
}
