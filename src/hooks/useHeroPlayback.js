import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

// Memoria de esta carga del documento, no almacenamiento permanente.
// Volver a Inicio mediante React Router no reinicia automáticamente el clip.
const playedSources = new Set();
const noop = () => {};

export function useHeroPlayback(video = {}, onEntranceReady = noop) {
  const { mp4, outroMp4, replayAfterMs = 0, startupTimeoutMs = 2500 } = video;
  const reducedMotion = useReducedMotion(null);
  const player = useRef(null);
  const [seenOnMount] = useState(() => playedSources.has(mp4));
  const [activated, setActivated] = useState(!seenOnMount);
  const [clip, setClip] = useState('main');
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
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
      setPlaying(false);
      setStarted(false);
      setReady(false);
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
      allowPlayback.current = false;
      setAutoplay(false);
      player.current?.pause();
      completeEntrance();
    }, startupTimeoutMs);
    return () => clearTimeout(startupTimer.current);
  }, [reducedMotion, seenOnMount, mp4, failed, startupTimeoutMs, completeEntrance]);

  function handlePlaying(event) {
    if (!allowPlayback.current) {
      event.currentTarget.pause();
      return;
    }
    playedSources.add(mp4);
    setStarted(true);
    setPlaying(true);
    completeEntrance();
  }

  function handleError() {
    setFailed(true);
    setPlaying(false);
    setFinished(false);
    completeEntrance();
  }

  function handleEnded() {
    setPlaying(false);
    if (clip === 'main' && outroMp4) {
      setReady(false);
      setStarted(false);
      setAutoplay(true);
      setClip('outro');
      return;
    }
    // No alterar currentTime: el navegador conserva el fotograma final.
    setAutoplay(false);
    setFinished(true);
  }

  const restart = useCallback(() => {
    if (reducedMotion !== false || failed) return;
    allowPlayback.current = true;
    setFinished(false);
    setAutoplay(true);
    if (!activated || clip !== 'main') {
      setReady(false);
      setStarted(false);
      setActivated(true);
      setClip('main');
      return;
    }
    const element = player.current;
    if (element) {
      element.currentTime = 0;
      element.play().catch(() => setPlaying(false));
    }
  }, [reducedMotion, failed, activated, clip]);

  useEffect(() => {
    if (!finished || !Number.isFinite(replayAfterMs) || replayAfterMs <= 0 || reducedMotion !== false) return;
    // Se cuenta desde el fin del clip (o del outro). No reproducir en otra pestaña.
    const timer = setTimeout(() => {
      if (!document.hidden) restart();
    }, replayAfterMs);
    return () => clearTimeout(timer);
  }, [finished, replayAfterMs, reducedMotion, restart]);

  function togglePlayback() {
    const element = player.current;
    if (finished || !element || element.ended) {
      restart();
    } else if (!element.paused) {
      allowPlayback.current = false;
      setAutoplay(false);
      element.pause();
      completeEntrance();
    } else {
      allowPlayback.current = true;
      if (!started) element.currentTime = 0;
      // Una acción explícita no debe dejar el panel esperando la carga.
      completeEntrance();
      element.play().catch(() => {
        setPlaying(false);
        completeEntrance();
      });
    }
  }

  return {
    player, currentSrc, shouldRender, autoplay, started, playing, finished,
    showFinalPoster: seenOnMount || finished,
    showControls: Boolean(mp4) && reducedMotion === false && !failed && (ready || seenOnMount),
    handleReady: () => setReady(true), handlePlaying, handleEnded, handleError,
    handlePause: () => setPlaying(false), togglePlayback,
  };
}
