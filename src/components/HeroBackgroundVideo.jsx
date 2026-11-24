import { useHeroPlayback } from '../hooks/useHeroPlayback.js';

/** Una sola capa de video. Sin poster ni imagen previa durante la carga normal. */
export function HeroBackgroundVideo({ video = {}, onEntranceReady }) {
  const playback = useHeroPlayback(video, onEntranceReady);
  const fallback = playback.staticFrame || video.finalPoster || video.poster;

  return (
    <div className="hero-media">
      <div className="hero-media-surface pointer-events-none absolute inset-0 bg-black" aria-hidden="true">
        {playback.showFallback && fallback && (
          <img src={fallback} alt="" className="hero-media-image" />
        )}
        {playback.shouldRender && (
          <video
            key={playback.currentSrc}
            ref={playback.player}
            src={playback.currentSrc}
            className="hero-media-image"
            muted
            autoPlay={playback.autoplay}
            playsInline
            preload="auto"
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
          className="hero-playback-control absolute right-5 bottom-5 z-30 rounded-full border border-white/45 bg-black/65 px-4 py-2 type-label text-white backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-white"
        >
          {playback.playing ? 'Ⅱ  Pausar' : '▶  Reproducir'}
        </button>
      )}
    </div>
  );
}
