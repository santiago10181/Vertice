import { BrandMarkIcon } from './Icons.jsx';
import { FooterColumn } from './FooterColumn.jsx';

export function Footer({
  id = 'pie-de-pagina',
  home = '#inicio',
  brandName = 'VÉRTICE',
  tagline,
  columns = [],
  legal = [],
  copyright = '',
}) {
  return (
    <footer
      id={id}
      className="flex min-h-[465px] flex-col justify-between bg-brand-paper px-[clamp(24px,6.15vw,84px)] pt-[86px] pb-[77px] text-brand-dark max-[900px]:min-h-0 max-[900px]:gap-24 max-[900px]:pt-16 max-[900px]:pb-12 max-[700px]:gap-16 max-[700px]:px-6 max-[700px]:pt-14 max-[700px]:pb-9"
    >
      <div className="grid grid-cols-[minmax(290px,1.9fr)_repeat(4,minmax(0,1fr))] gap-x-[clamp(20px,3vw,48px)] gap-y-11 max-[1150px]:grid-cols-[minmax(260px,1.5fr)_repeat(2,minmax(0,1fr))] max-[700px]:grid-cols-2 max-[700px]:gap-x-7">
        <p className="m-0 max-w-[370px] font-display text-[clamp(25px,2.2vw,31px)] leading-[1.12] font-normal tracking-[-0.045em] max-[700px]:col-span-2 max-[700px]:mb-2">
          {tagline}
        </p>
        {columns.map((column, index) => (
          <FooterColumn key={`${index}-${column.title}`} {...column} />
        ))}
      </div>

      <div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start">
        <a
          href={home}
          aria-label={`${brandName}: volver al inicio`}
          className="inline-flex shrink-0 text-brand-dark transition-opacity hover:opacity-60"
          title="Volver al inicio"
        >
          <span className="block size-[54px] [&_svg]:size-full">
            <BrandMarkIcon />
          </span>
        </a>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 text-[13px] font-normal leading-6 text-brand-muted max-[900px]:justify-start">
          {legal.map(({ label, href }, index) =>
            href ? (
              <a
                key={`${index}-${label}`}
                href={href}
                className="text-inherit underline-offset-4 hover:underline"
              >
                {label}
              </a>
            ) : (
              <span key={`${index}-${label}`}>{label}</span>
            ),
          )}
          {copyright && <span>{copyright}</span>}
        </div>
      </div>
    </footer>
  );
}
