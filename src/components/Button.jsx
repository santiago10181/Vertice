import { ArrowRightIcon } from './Icons.jsx';

const variants = {
  light: 'bg-white text-brand-dark',
  dark: 'bg-brand-dark text-white',
};

const iconVariants = {
  green: 'bg-brand-green text-brand-dark group-hover/cta:bg-brand-green-hover',
  dark: 'bg-brand-dark text-white group-hover/cta:bg-neutral-800',
};

/** CTA compartido por Hero, Navbar, Platform y Contact. */
export function Button({
  label,
  href,
  variant = 'light',
  iconVariant = 'green',
  className = '',
  onClick,
}) {
  const labelClasses = variants[variant] ?? variants.light;
  const iconClasses = iconVariants[iconVariant] ?? iconVariants.green;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group/cta inline-flex min-h-12 shrink-0 items-stretch gap-2 font-code text-xs tracking-[0.015em] no-underline max-[640px]:text-[11px] ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-[17px] transition-colors duration-200 ease-emphasis max-[640px]:px-[13px] ${labelClasses}`}
      >
        {label}
      </span>
      <span
        className={`inline-flex w-12 items-center justify-center rounded-lg transition-colors duration-200 ease-emphasis max-[640px]:w-11 ${iconClasses}`}
      >
        <ArrowRightIcon />
      </span>
    </a>
  );
}
