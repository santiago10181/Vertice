/** Contenedor editorial compartido. Los contenidos se componen con children. */
export function SectionPanel({ id, labelledBy, className = '', spacing = 'regular', tone = 'light', children }) {
  const padding = spacing === 'hero' ? 'pt-[clamp(135px,14vw,176px)] pb-[clamp(42px,5vw,72px)]' : 'py-[clamp(42px,4.45vw,64px)]';
  const colors = tone === 'olive' ? 'on-dark bg-brand-olive text-white' : tone === 'paper' ? 'bg-brand-paper text-brand-dark' : 'bg-white text-brand-dark';
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] scroll-mt-32 rounded-xl px-[clamp(24px,4.45vw,62px)] ${padding} ${colors} ${className}`}
    >
      {children}
    </section>
  );
}
