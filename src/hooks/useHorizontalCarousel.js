import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/** Lógica de desplazamiento horizontal independiente del contenido de las tarjetas. */
export function useHorizontalCarousel(itemCount) {
  const trackRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [edges, setEdges] = useState({ canPrevious: false, canNext: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateEdges = () => {
      const canPrevious = track.scrollLeft > 2;
      const canNext = track.scrollLeft + track.clientWidth < track.scrollWidth - 2;
      setEdges((previous) => previous.canPrevious === canPrevious && previous.canNext === canNext ? previous : { canPrevious, canNext });
    };
    updateEdges();
    track.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateEdges) : null;
    observer?.observe(track);
    return () => {
      track.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
      observer?.disconnect();
    };
  }, [itemCount]);

  function move(direction) {
    const track = trackRef.current;
    const first = track?.children[0];
    if (!first) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (first.getBoundingClientRect().width + gap), behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  return { trackRef, ...edges, move };
}
