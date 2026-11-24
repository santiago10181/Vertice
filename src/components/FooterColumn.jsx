/** Una única definición para todas las columnas del footer. */
export function FooterColumn({ title, links = [] }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-[14px] font-code text-[13px] font-normal uppercase tracking-[0.025em] text-brand-muted">
        {title}
      </h3>
      <ul className="m-0 flex list-none flex-col gap-[13px] p-0">
        {links.map(({ label, href }, index) => (
          <li key={`${index}-${label}`} className="min-w-0">
            {href ? (
              <a
                href={href}
                className="inline-block font-display text-[14px] leading-[1.35] font-medium tracking-[-0.015em] text-brand-dark underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
              >
                {label}
              </a>
            ) : (
              <span className="inline-block font-display text-[14px] leading-[1.35] font-medium tracking-[-0.015em] text-brand-dark">
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
