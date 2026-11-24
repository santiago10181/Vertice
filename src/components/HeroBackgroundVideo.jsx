import { useHeroPlayback } from '../hooks/useHeroPlayback.js';

/** Capa visual: la lógica de reproducción y sincronización vive en el hook. */
export function HeroBackgroundVideo({ video = {}, onEntranceReady }) {
  const { poster = '/images/hero-poster.jpg', finalPoster = poster } = video;
  const playback = useHeroPlayback(video, onEntranceReady);
  const background = playback.showFinalPoster ? finalPoster : poster;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }} />
        {playback.shouldRender && (
          <video
            key={playback.currentSrc}
            ref={playback.player}
            src={playback.currentSrc}
            className={`absolute inset-0 h-full w-full object-cover object-center ${playback.started ? 'opacity-100' : 'opacity-0'}`}
            muted
            autoPlay={playback.autoplay}
            playsInline
            preload="auto"
            poster={background}
            tabIndex={-1}
            onLoadedData={playback.handleReady}
            onPlaying={playback.handlePlaying}
            onPause={playback.handlePause}
            onEnded={playback.handleEnded}
            onError={playback.handleError}
          />
        )}
      </div>
      {playback.showControls && (
        <button
          type="button"
          onClick={playback.togglePlayback}
          aria-label={playback.playing ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
          aria-pressed={playback.playing}
          className="absolute right-5 bottom-5 z-30 rounded-full border border-white/45 bg-black/65 px-4 py-2 type-label text-white backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-white"
        >
          {playback.playing ? 'Ⅱ  Pausar' : '▶  Reproducir'}
        </button>
      )}
    </>
  );
}
