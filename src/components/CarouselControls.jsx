import { ArrowRightIcon } from './Icons.jsx';

/** Controles reutilizables para cualquier carrusel horizontal. */
export function CarouselControls({ controlsId, canPrevious, canNext, onPrevious, onNext }) {
  const buttonClass = 'flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-brand-accent text-brand-dark transition-colors hover:bg-brand-accent-hover disabled:cursor-default disabled:bg-brand-light disabled:text-brand-muted/50';
  return (
    <div className="flex shrink-0 gap-2">
      <button type="button" aria-label="Ver anterior" aria-controls={controlsId} disabled={!canPrevious} onClick={onPrevious} className={buttonClass}>
        <span className="rotate-180"><ArrowRightIcon /></span>
      </button>
      <button type="button" aria-label="Ver siguiente" aria-controls={controlsId} disabled={!canNext} onClick={onNext} className={buttonClass}><ArrowRightIcon /></button>
    </div>
  );
}
