import { useCallback, useState } from 'react';
import { Button } from './Button.jsx';
import { HeroBackgroundVideo } from './HeroBackgroundVideo.jsx';

/** Hero con video del usuario, control de reproducción y poster de respaldo. */
export function Hero({ hero }) {
  const [entrance, setEntrance] = useState('waiting');
  const onEntranceReady = useCallback((animate = true) => {
    setEntrance(current => current === 'waiting' ? (animate ? 'ready' : 'static') : current);
  }, []);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      data-hero-entrance={entrance}
      className="motion-hero-container hero-shell on-dark relative isolate mx-[clamp(12px,1.75vw,28px)] my-[clamp(12px,1.75vw,28px)] overflow-hidden rounded-xl bg-brand-dark text-white max-[700px]:mx-3 max-[700px]:my-3"
    >
      <HeroBackgroundVideo video={hero.video} onEntranceReady={onEntranceReady} />
      <div aria-hidden="true" className="hero-desktop-shade pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-brand-dark/88 via-brand-dark/52 to-transparent" />
      <div aria-hidden="true" className="hero-desktop-shade pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-brand-dark/56 via-transparent to-transparent" />
      <div className="hero-content z-20 flex flex-col items-start justify-end px-[clamp(24px,4.4vw,64px)]">
        {hero.eyebrow && <p className="motion-enter motion-step-1 mb-6 type-label text-brand-accent">{hero.eyebrow}</p>}
        <h1
          id="hero-title"
          className="motion-enter motion-step-2 mb-[26px] hero-title max-w-[1060px] type-display text-balance"
        >
          {hero.headingLines.map((line, index) => <span key={`${index}-${line}`} className="block">{line}</span>)}
        </h1>
        {hero.description && <p className="motion-enter motion-step-3 mb-8 max-w-[625px] type-body text-white/85">{hero.description}</p>}
        <div className="motion-enter motion-step-4"><Button {...hero.action} /></div>
      </div>
    </section>
  );
}
