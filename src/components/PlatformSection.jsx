import { Button } from './Button.jsx';
import { FeatureCard } from './FeatureCard.jsx';

export function PlatformSection({
  id = 'plataforma',
  heading,
  description,
  action,
  benefits = [],
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] flex min-h-[790px] flex-col justify-between gap-16 overflow-hidden rounded-xl bg-brand-dark px-[clamp(24px,4.45vw,62px)] pt-[104px] pb-[60px] text-white scroll-mt-28 max-[900px]:min-h-0 max-[900px]:gap-20 max-[900px]:pt-[118px] max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-6 max-[700px]:pt-[110px] max-[700px]:pb-8"
    >
      <div className="max-w-[780px]">
        <h2
          id={headingId}
          className="max-w-[665px] font-display text-[clamp(40px,3.65vw,52px)] leading-[1.08] font-normal tracking-[-0.048em] text-balance max-[700px]:text-[clamp(35px,8.4vw,48px)]"
        >
          {heading}
        </h2>

        <p className="mt-[44px] max-w-[660px] font-display text-[clamp(15px,1.15vw,17px)] leading-[1.4] font-semibold tracking-[-0.018em] max-[700px]:mt-8">
          {description}
        </p>

        {action && (
          <div className="mt-[22px]">
            <Button {...action} />
          </div>
        )}
      </div>

      {benefits.length > 0 && (
        <ul className="m-0 grid list-none grid-cols-1 gap-[22px] p-0 sm:grid-cols-2 min-[1180px]:grid-cols-4">
          {benefits.map((benefit, index) => (
            <FeatureCard key={`${index}-${benefit.title}`} {...benefit} />
          ))}
        </ul>
      )}
    </section>
  );
}
