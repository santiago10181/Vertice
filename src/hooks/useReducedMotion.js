import { useEffect, useState } from 'react';

/**
 * No descargamos ni reproducimos el video hasta saber si la persona
 * prefiere reducir el movimiento. Este hook también sirve para otras
 * animaciones que añadamos en futuras secciones.
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    if (!window.matchMedia) {
      setPrefersReducedMotion(false);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);

    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  return prefersReducedMotion;
}
