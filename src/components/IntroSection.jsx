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
      className="relative mx-[clamp(12px,1.75vw,28px)] mb-[clamp(12px,1.75vw,28px)] rounded-xl bg-white px-[clamp(24px,4.45vw,62px)] py-[64px] text-brand-dark scroll-mt-28 max-[900px]:pt-12 max-[700px]:mx-3 max-[700px]:mb-3 max-[700px]:px-6 max-[700px]:pt-12 max-[700px]:pb-8"
    >
      <div className="grid grid-cols-2 items-center gap-x-[clamp(32px,4.25vw,62px)] max-[900px]:grid-cols-1 max-[900px]:gap-y-10">
        <div className="flex min-h-[320px] flex-col justify-between gap-12 max-[900px]:min-h-0 max-[900px]:gap-10 max-[900px]:pt-0">
          <h2
            id={headingId}
            className="max-w-[575px] type-heading text-balance"
          >
            {heading}
          </h2>
          <p className="max-w-[600px] type-body text-brand-dark">
            {description}
          </p>
        </div>

        <figure className="relative m-0 aspect-square min-w-0 overflow-hidden rounded-xl max-[900px]:aspect-[5/4] max-[500px]:aspect-square">
          <MediaImage {...image} className="absolute inset-0" />
        </figure>
      </div>
    </section>
  );
}
