import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

// Memoria de esta carga del documento, no almacenamiento permanente.
// Volver a Inicio mediante React Router no reinicia automáticamente el clip.
const playedSources = new Set();
const finalFrames = new Map();

// Conserva el fotograma del MP4 real, incluso si el usuario cambió el archivo.
function rememberFrame(src, element) {
  if (!src || !element?.videoWidth || element.readyState < 2) return;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = Math.min(1600, element.videoWidth);
    canvas.height = Math.round(canvas.width * element.videoHeight / element.videoWidth);
    canvas.getContext('2d').drawImage(element, 0, 0, canvas.width, canvas.height);
    finalFrames.set(src, canvas.toDataURL('image/webp', .85));
  } catch {
    // Si el recurso es externo y no permite CORS, se conserva el respaldo configurado.
  }
}
const noop = () => {};

export function useHeroPlayback(video = {}, onEntranceReady = noop) {
  const { mp4, outroMp4, replayAfterMs = 0, startupTimeoutMs = 2500 } = video;
  const reducedMotion = useReducedMotion(null);
  const player = useRef(null);
  const [seenOnMount] = useState(() => playedSources.has(mp4));
  const [activated, setActivated] = useState(!seenOnMount);
  const [clip, setClip] = useState('main');
  const [finished, setFinished] = useState(false);
  const [failed, setFailed] = useState(false);
  const [autoplay, setAutoplay] = useState(!seenOnMount);
  const allowPlayback = useRef(!seenOnMount);
  const entranceDone = useRef(false);
  const startupTimer = useRef(null);
  const currentSrc = clip === 'outro' && outroMp4 ? outroMp4 : mp4;
  const shouldRender = Boolean(currentSrc) && reducedMotion === false && activated && !failed;

  const completeEntrance = useCallback((animate = true) => {
    if (entranceDone.current) return;
    entranceDone.current = true;
    clearTimeout(startupTimer.current);
    onEntranceReady(animate);
  }, [onEntranceReady]);

  useEffect(() => {
    if (reducedMotion === null) return;
    if (reducedMotion) {
      allowPlayback.current = false;
      setAutoplay(false);
      if (playedSources.has(mp4)) {
        setFinished(true);
        setActivated(false);
      }
      completeEntrance(false);
      return;
    }
    if (seenOnMount) {
      completeEntrance(false);
      return;
    }
    if (!mp4 || failed) {
      completeEntrance();
      return;
    }
    if (entranceDone.current) return;
    // No bloquear la portada por una conexión lenta o autoplay rechazado.
    startupTimer.current = setTimeout(() => {
      // La conexión lenta no cancela el autoplay ni muestra el poster antiguo.
      // El contenido alcanza su tamaño final sin animación; el video puede empezar después.
      completeEntrance(false);
    }, startupTimeoutMs);
    return () => clearTimeout(startupTimer.current);
  }, [reducedMotion, seenOnMount, mp4, failed, startupTimeoutMs, completeEntrance]);

  // Si el navegador rechaza explícitamente el autoplay, mostrar el respaldo.
  // No mostrarlo durante una carga lenta.
  function handleReady(event) {
    const element = event.currentTarget;
    if (!allowPlayback.current || !autoplay || !element.paused || element.ended) return;
    element.play().catch(error => {
      if (error.name === 'NotAllowedError' && player.current === element) handleError();
    });
  }

  function handlePlaying(event) {
    if (!allowPlayback.current) {
      event.currentTarget.pause();
      return;
    }
    playedSources.add(mp4);
    completeEntrance();
  }

  function handleError() {
    setFailed(true);
    setFinished(false);
    completeEntrance();
  }

  function handleEnded(event) {
    rememberFrame(mp4, event.currentTarget);
    if (clip === 'main' && outroMp4) {
      setAutoplay(true);
      setClip('outro');
      return;
    }
    // No alterar currentTime: el navegador conserva el fotograma final.
    setAutoplay(false);
    setFinished(true);
  }

  // Si se abandona Inicio durante la reproducción, guarda el último cuadro visible.
  // Capturamos el nodo en el efecto porque React puede limpiar el ref antes del cleanup.
  useEffect(() => {
    if (!shouldRender) return;
    const element = player.current;
    return () => {
      if (playedSources.has(mp4)) rememberFrame(mp4, element);
    };
  }, [shouldRender, currentSrc, mp4]);

  const restart = useCallback(() => {
    if (reducedMotion !== false || failed) return;
    allowPlayback.current = true;
    setFinished(false);
    setAutoplay(true);
    if (!activated || clip !== 'main') {
      setActivated(true);
      setClip('main');
      return;
    }
    const element = player.current;
    if (element) {
      element.currentTime = 0;
      element.play().catch(error => {
        if (error.name === 'NotAllowedError' && player.current === element) {
          setFailed(true);
          completeEntrance(false);
        }
      });
    }
  }, [reducedMotion, failed, activated, clip, completeEntrance]);

  useEffect(() => {
    if (!finished || !Number.isFinite(replayAfterMs) || replayAfterMs <= 0 || reducedMotion !== false) return;
    // Se cuenta desde el fin del clip (o del outro). No reproducir en otra pestaña.
    const timer = setTimeout(() => {
      if (!document.hidden) restart();
    }, replayAfterMs);
    return () => clearTimeout(timer);
  }, [finished, replayAfterMs, reducedMotion, restart]);

  return {
    player, currentSrc, shouldRender, autoplay,
    staticFrame: finalFrames.get(mp4),
    showFallback: reducedMotion === true || failed || (!shouldRender && seenOnMount),
    handleReady, handlePlaying, handleEnded, handleError,
  };
}
