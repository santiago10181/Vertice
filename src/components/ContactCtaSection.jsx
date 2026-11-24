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
      className="mx-[clamp(12px,1.75vw,28px)] mb-0 flex min-h-[380px] flex-col justify-center rounded-xl bg-brand-blue px-[clamp(24px,4.45vw,62px)] py-[82px] text-white scroll-mt-28 max-[700px]:mx-3 max-[700px]:min-h-[320px] max-[700px]:px-6 max-[700px]:py-16"
    >
      <h2
        id={headingId}
        className="max-w-[850px] font-display text-[clamp(38px,3.7vw,54px)] leading-[1.12] font-normal tracking-[-0.05em] text-balance max-[700px]:text-[clamp(35px,8.4vw,47px)]"
      >
        {heading}
      </h2>

      {action && (
        <div className="mt-[45px] max-[700px]:mt-9">
          <Button {...action} />
        </div>
      )}
      {note && <p className="mt-5 text-xs text-white/60">{note}</p>}
    </section>
  );
}
