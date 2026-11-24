import { SiteLink } from './SiteLink.jsx';
import { BrandMarkIcon } from './Icons.jsx';

export function Brand({ name, home = '/' }) {
  return (
    <SiteLink
      href={home}
      aria-label={`${name}: volver al inicio`}
      className="inline-flex shrink-0 items-center gap-1.5 text-white no-underline"
    >
      <BrandMarkIcon />
      <span className="type-brand">
        {name}
      </span>
    </SiteLink>
  );
}
