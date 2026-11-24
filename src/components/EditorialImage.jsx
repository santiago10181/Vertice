import { MediaImage } from './MediaImage.jsx';

/** Fotografía editorial reutilizable: proporción estable y pie opcional. */
export function EditorialImage({ image, caption, aspectClass = 'aspect-[4/3]', children }) {
  return (
    <figure className="m-0 min-w-0">
      <div className={`relative overflow-hidden rounded-xl bg-brand-light ${aspectClass}`}>
        <MediaImage {...image} className="absolute inset-0" />
        {children}
      </div>
      {caption && <figcaption className="mt-3 type-small text-brand-muted">{caption}</figcaption>}
    </figure>
  );
}
