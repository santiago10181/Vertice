/** Tipografía editorial común para los títulos de sección. */
export function SectionHeading({ id, eyebrow, heading, className = '', tone = 'light' }) {
  return (
    <div className={className}>
      {eyebrow && <p className={`mb-6 type-label ${tone === 'dark' ? 'text-brand-accent' : 'text-brand-olive'}`}>{eyebrow}</p>}
      <h2 id={id} className="type-heading text-balance">{heading}</h2>
    </div>
  );
}
