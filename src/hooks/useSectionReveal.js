import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/**
 * Observa los bloques principales de una ruta, sin ocultarlos por defecto.
 * El primer bloque tiene su propia entrada; los ya visibles no se animan.
 * Se exporta la lógica DOM para poder comprobarla sin montar React.
 */
export function observeSectionReveal(container) {
  if (!container || typeof IntersectionObserver === 'undefined') return () => {};

  const sections = Array.from(container.children).filter(node => node.tagName === 'SECTION');
  const targets = sections.slice(1).filter(section =>
    section.getBoundingClientRect().top >= window.innerHeight && !section.hasAttribute('data-motion-revealed')
  );
  if (!targets.length) return () => {};

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.setAttribute('data-motion-revealed', '');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px 6% 0px', threshold: 0 });

  targets.forEach(section => observer.observe(section));
  return () => observer.disconnect();
}

/** Un observador por ruta. No se reinicia al cambiar filtros o parámetros hash. */
export function useSectionReveal(mainRef, routeKey) {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    let disconnect = () => {};
    // Espera a que MainLayout termine el ajuste de scroll de la ruta.
    const frame = requestAnimationFrame(() => {
      disconnect = observeSectionReveal(mainRef.current);
    });
    return () => {
      cancelAnimationFrame(frame);
      disconnect();
    };
  }, [mainRef, routeKey, reducedMotion]);
}
