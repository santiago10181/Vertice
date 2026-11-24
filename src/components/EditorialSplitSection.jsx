import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { EditorialImage } from './EditorialImage.jsx';
import { Button } from './Button.jsx';

/** Imagen a la izquierda, titular, descripción y CTA a la derecha. */
export function EditorialSplitSection({ id, eyebrow, heading, description, image, imageCaption, action }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-[clamp(28px,4vw,60px)]">
        <EditorialImage image={image} caption={imageCaption} aspectClass="aspect-[5/4]" />
        <div className="flex flex-col justify-between gap-10">
          <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} />
          <div>
            <p className="max-w-[620px] type-body">{description}</p>
            {action && <div className="mt-6"><Button {...action} /></div>}
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}
