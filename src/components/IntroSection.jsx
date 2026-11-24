import { MediaImage } from './MediaImage.jsx';

/** Segunda sección, compuesta con MediaImage reutilizable. */
export function IntroSection({
  id = 'que-hacemos',
  heading,
  description,
  image,
}) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] min-h-[610px] rounded-xl bg-white px-[clamp(24px,4.45vw,62px)] pt-[80px] pb-[30px] text-brand-dark scroll-mt-28 max-[900px]:pt-[105px] max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-6 max-[700px]:pt-[105px] max-[700px]:pb-8"
    >
      <div className="grid grid-cols-2 gap-x-[clamp(32px,4.25vw,62px)] max-[900px]:grid-cols-1 max-[900px]:gap-y-10">
        <div className="flex min-h-[480px] flex-col justify-between pt-[20px] pb-[0px] max-[900px]:min-h-0 max-[900px]:gap-10 max-[900px]:pt-0">
          <h2
            id={headingId}
            className="max-w-[575px] font-display text-[clamp(35px,3.45vw,52px)] leading-[1.15] font-normal tracking-[-0.045em] max-[700px]:text-[clamp(34px,7.1vw,45px)]"
          >
            {heading}
          </h2>
          <p className="max-w-[600px] font-display text-[clamp(15px,1.17vw,17px)] leading-[1.35] tracking-[-0.016em] text-brand-dark max-[700px]:leading-[1.5]">
            {description}
          </p>
        </div>

        <figure className="m-0 h-[480px] min-w-0 overflow-hidden rounded-lg max-[900px]:h-auto max-[900px]:aspect-[580/480] max-[500px]:aspect-[4/5]">
          <MediaImage {...image} className="object-center" />
        </figure>
      </div>
    </section>
  );
}
