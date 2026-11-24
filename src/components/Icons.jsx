/** SVG como elementos JSX: sin plantillas HTML ni cadenas inyectadas. */
export function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-[18px] transition-transform duration-200 ease-emphasis motion-reduce:transform-none group-hover/cta:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.75 12h14.5m-6-6 6 6-6 6" />
    </svg>
  );
}

/** Símbolo V extraído de la referencia gráfica aportada por el usuario. */
export function BrandMarkIcon() {
  return <img className="block size-[38px] shrink-0 object-contain" src="/images/vertice-mark.png" alt="" aria-hidden="true" />;
}

export function MenuIcon() {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function DistributionIcon() {
  return (
    <>
      <path d="M20 37V20m0 0-5 5m5-5 5 5" />
      <path d="M20 20V7m0 0-5 5m5-5 5 5" />
      <path d="M16 26H8m0 0 4-4m-4 4 4 4" />
      <path d="M24 26h8m0 0-4-4m4 4-4 4" />
      <circle cx="20" cy="37" r="2" />
    </>
  );
}

function LayersIcon() {
  return (
    <>
      <rect x="6" y="7" width="28" height="28" rx="3" />
      <rect x="10" y="13" width="20" height="23" rx="2" />
      <rect x="6" y="22" width="17" height="14" rx="2" />
      <path d="M10 17h15" />
    </>
  );
}

function FlagIcon() {
  return (
    <>
      <path d="M8 37V5" />
      <path d="M8 9c5-3 10 3 16 0s8 1 10 1v17c-2 0-5-4-10-1s-11-3-16 0" />
      <path d="M8 16c6-3 10 3 16 0 4-2 7 0 10 1M8 23c6-3 10 3 16 0 4-2 7 0 10 1" />
    </>
  );
}

function TraceabilityIcon() {
  return (
    <>
      <path d="M20 27s-9-6.6-9-13a9 9 0 0 1 18 0c0 6.4-9 13-9 13Z" />
      <path d="m17 13 3-3 3 3-3 3Z" />
      <path d="M14 28h-4l-4 6 3 3h22l3-3-4-6h-4" />
    </>
  );
}

/** Selección explícita: sin insertar SVG arbitrario del usuario. */
const benefitIcons = {
  distribution: DistributionIcon,
  layers: LayersIcon,
  flag: FlagIcon,
  traceability: TraceabilityIcon,
};

export function FeatureIcon({ name = 'distribution' }) {
  const Paths = benefitIcons[name] ?? DistributionIcon;

  return (
    <svg
      className="size-10 shrink-0"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <Paths />
    </svg>
  );
}
