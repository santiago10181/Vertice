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
            onEnded={playback.handleEnded}
            onError={playback.handleError}
          />
        )}
      </div>
    </div>
  );
}
