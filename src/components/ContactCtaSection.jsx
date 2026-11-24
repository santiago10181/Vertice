import { Button } from './Button.jsx';

export function ContactCtaSection({
  id = 'contacto',
  heading,
  action,
  note,
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="on-dark mx-[clamp(12px,1.75vw,28px)] mb-0 flex min-h-[380px] flex-col justify-center rounded-xl bg-brand-olive px-[clamp(24px,4.45vw,62px)] py-[82px] text-white scroll-mt-28 max-[700px]:mx-3 max-[700px]:min-h-[320px] max-[700px]:px-6 max-[700px]:py-16"
    >
      <h2
        id={headingId}
        className="max-w-[850px] type-heading text-balance"
      >
        {heading}
      </h2>

      {action && (
        <div className="mt-[45px] max-[700px]:mt-9">
          <Button {...action} />
        </div>
      )}
      {note && <p className="mt-5 type-small text-white/85">{note}</p>}
    </section>
  );
}
