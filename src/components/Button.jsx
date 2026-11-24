import { SiteLink } from './SiteLink.jsx';
import { ArrowRightIcon } from './Icons.jsx';

const variants = {
  light: 'bg-white text-brand-dark',
  dark: 'bg-brand-dark text-white',
};

const iconVariants = {
  green: 'bg-brand-accent text-brand-dark group-hover/cta:bg-brand-accent-hover',
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
    <SiteLink
      href={href}
      onClick={onClick}
      className={`group/cta inline-flex min-h-12 max-w-full items-stretch gap-2 type-label no-underline ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center text-center break-words rounded-lg px-[17px] transition-colors duration-200 ease-emphasis max-[640px]:px-[13px] ${labelClasses}`}
      >
        {label}
      </span>
      <span
        className={`inline-flex w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ease-emphasis max-[640px]:w-11 ${iconClasses}`}
      >
        <ArrowRightIcon />
      </span>
    </SiteLink>
  );
}
