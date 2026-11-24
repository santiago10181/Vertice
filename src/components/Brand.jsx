import { BrandMarkIcon } from './Icons.jsx';

export function Brand({ name, home = '#inicio' }) {
  return (
    <a
      href={home}
      aria-label={`${name}: volver al inicio`}
      className="inline-flex shrink-0 items-center gap-1.5 text-white no-underline"
    >
      <BrandMarkIcon />
      <span className="font-display text-[clamp(25px,2.2vw,32px)] leading-none font-bold tracking-[-0.055em]">
        {name}
      </span>
    </a>
  );
}
