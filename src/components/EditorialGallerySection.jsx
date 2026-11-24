import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { EditorialImage } from './EditorialImage.jsx';

/** Texto en dos columnas seguido de una galería de imágenes. */
export function EditorialGallerySection({ id, eyebrow, heading, description, images = [] }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <div className="grid items-start gap-7 md:grid-cols-2 md:gap-14">
        <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} />
        <p className="max-w-[620px] type-body text-brand-dark md:pt-1">{description}</p>
      </div>
      <div className="mt-[clamp(28px,4vw,52px)] grid gap-6 md:grid-cols-2">
        {images.map(({ caption, ...image }) => <EditorialImage key={image.src} image={image} caption={caption} />)}
      </div>
    </SectionPanel>
  );
}
