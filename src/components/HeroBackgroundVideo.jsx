import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

/**
 * Reproduce el clip inicial y, opcionalmente, un cierre de 5 s con la V.
 * Si no hay outro, el primer clip se repite. Si hay outro, se alternan ambos.
 * La preferencia reduce-motion muestra solo el poster.
 */
export function HeroBackgroundVideo({ video = {} }) {
  const { mp4, outroMp4, poster = '/images/hero-poster.jpg' } = video;
  const reducedMotion = useReducedMotion();
  const player = useRef(null);
  const [clip, setClip] = useState('main');
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  // Si cambiamos archivos desde configuración, reiniciamos la secuencia.
  useEffect(() => { setClip('main'); setFailed(false); setStarted(false); }, [mp4, outroMp4]);

  const currentSrc = clip === 'outro' && outroMp4 ? outroMp4 : mp4;
  const shouldRender = Boolean(currentSrc) && !reducedMotion && !failed;

  function changeClip() {
    if (!outroMp4) return;
    setReady(false);
    setStarted(false);
    setClip((current) => (current === 'main' ? 'outro' : 'main'));
  }

  async function togglePlayback() {
    if (!player.current) return;
    if (!player.current.paused) { player.current.pause(); return; }
    try { await player.current.play(); }
    catch { setPlaying(false); }
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }} />
        {shouldRender && (
          <video
            key={currentSrc}
            ref={player}
            src={currentSrc}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${started ? 'opacity-100' : 'opacity-0'}`}
            muted
            autoPlay
            loop={!outroMp4}
            playsInline
            preload="metadata"
            poster={poster}
            tabIndex={-1}
            onLoadedData={() => setReady(true)}
            onPlaying={() => { setStarted(true); setPlaying(true); }}
            onPause={() => setPlaying(false)}
            onEnded={changeClip}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {shouldRender && ready && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
          aria-pressed={playing}
          className="absolute right-5 bottom-5 z-30 rounded-full border border-white/45 bg-black/65 px-4 py-2 font-code text-xs text-white backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-white"
        >
          {playing ? 'Ⅱ  Pausar' : '▶  Reproducir'}
        </button>
      )}
    </>
  );
}
