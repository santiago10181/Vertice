import { Button } from './Button.jsx';
import { HeroBackgroundVideo } from './HeroBackgroundVideo.jsx';

/** Hero con video del usuario, control de reproducción y poster de respaldo. */
export function Hero({ hero }) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="on-dark relative isolate mx-[clamp(12px,1.75vw,28px)] my-[clamp(12px,1.75vw,28px)] h-[calc(100svh-46px)] min-h-[580px] max-h-[900px] overflow-hidden rounded-xl bg-brand-dark text-white max-[700px]:mx-3 max-[700px]:my-3 max-[700px]:h-[690px] max-[700px]:max-h-none"
    >
      <HeroBackgroundVideo video={hero.video} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-brand-dark/88 via-brand-dark/52 to-transparent max-[700px]:bg-linear-to-t max-[700px]:from-brand-dark/92 max-[700px]:to-brand-dark/35" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-brand-dark/56 via-transparent to-transparent" />
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-end px-[clamp(24px,4.4vw,64px)] pt-[175px] pb-[80px] max-[700px]:px-[25px] max-[700px]:pt-[155px] max-[700px]:pb-[70px]">
        {hero.eyebrow && <p className="mb-6 type-label text-brand-accent">{hero.eyebrow}</p>}
        <h1
          id="hero-title"
          className="mb-[26px] max-w-[1060px] type-display text-balance"
        >
          {hero.headingLines.map((line, index) => <span key={`${index}-${line}`} className="block">{line}</span>)}
        </h1>
        {hero.description && <p className="mb-8 max-w-[625px] type-body text-white/85">{hero.description}</p>}
        <Button {...hero.action} />
      </div>
    </section>
  );
}
