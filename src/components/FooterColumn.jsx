import { SiteLink } from './SiteLink.jsx';
/** Una única definición para todas las columnas del footer. */
export function FooterColumn({ title, links = [] }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-[14px] type-label uppercase text-brand-muted">
        {title}
      </h3>
      <ul className="m-0 flex list-none flex-col gap-[13px] p-0">
        {links.map(({ label, href }, index) => (
          <li key={`${index}-${label}`} className="min-w-0">
            {href ? (
              <SiteLink
                href={href}
                className="inline-block type-small font-medium text-brand-dark underline-offset-4 transition-colors hover:text-brand-olive hover:underline"
              >
                {label}
              </SiteLink>
            ) : (
              <span className="inline-block type-small font-medium text-brand-dark">
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
