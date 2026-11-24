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
      className="on-dark mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] overflow-hidden rounded-xl bg-brand-olive px-[clamp(24px,4.45vw,62px)] pt-[60px] pb-[10px] text-white scroll-mt-28 max-[900px]:pt-[100px] max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-6 max-[700px]:pt-12"
    >
      <div className="grid min-[900px]:grid-cols-2 gap-x-[clamp(38px,6vw,85px)] gap-y-8 pb-[50px] max-[700px]:pb-11">
        <div>
          <p className="mb-[24px] type-label uppercase text-brand-accent">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="max-w-[570px] type-heading text-balance"
          >
            {heading}
          </h2>
        </div>

        <p className="max-w-[590px] pt-[3px] type-body max-[900px]:pt-0">
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
