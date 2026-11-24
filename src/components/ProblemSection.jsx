import { StatRow } from './StatRow.jsx';

export function ProblemSection({
  id = 'por-que',
  eyebrow,
  heading,
  description,
  statistics = [],
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] overflow-hidden rounded-xl bg-brand-green px-[clamp(24px,4.45vw,62px)] pt-[60px] pb-[10px] text-brand-dark scroll-mt-28 max-[900px]:pt-[100px] max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-6 max-[700px]:pt-12"
    >
      <div className="grid min-[900px]:grid-cols-2 gap-x-[clamp(38px,6vw,85px)] gap-y-8 pb-[50px] max-[700px]:pb-11">
        <div>
          <p className="mb-[24px] font-code text-[13px] uppercase tracking-[0.01em]">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="max-w-[570px] font-display text-[clamp(40px,4.1vw,60px)] leading-[1.05] font-normal tracking-[-0.055em] text-balance max-[700px]:text-[clamp(38px,9vw,56px)]"
          >
            {heading}
          </h2>
        </div>

        <p className="max-w-[590px] pt-[3px] font-display text-[clamp(15px,1.16vw,17px)] leading-[1.35] font-normal tracking-[-0.015em] max-[900px]:pt-0 max-[700px]:leading-[1.5]">
          {description}
        </p>
      </div>

      <dl aria-label="Datos que ilustran el problema" className="m-0">
        {statistics.map((stat, index) => (
          <StatRow key={`${index}-${stat.value}`} {...stat} />
        ))}
      </dl>
    </section>
  );
}
