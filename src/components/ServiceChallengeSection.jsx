import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { EditorialImage } from './EditorialImage.jsx';
import { ArrowList } from './ArrowList.jsx';

export function ServiceChallengeSection({ id, eyebrow, heading, description, points, image, highlight }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <div className="grid gap-9 md:grid-cols-2 md:items-stretch md:gap-[clamp(30px,4.2vw,60px)]">
        <div className="flex min-w-0 flex-col justify-between gap-9">
          <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} />
          <div>
            <p className="max-w-[600px] type-body">{description}</p>
            <ArrowList items={points} />
          </div>
        </div>
        <EditorialImage image={image} aspectClass="aspect-[5/4] md:aspect-auto md:h-full md:min-h-[440px]">
          {highlight && (
            <div className="absolute inset-x-[clamp(12px,2.5vw,34px)] bottom-[clamp(12px,2.5vw,34px)] rounded-xl bg-brand-accent p-[clamp(14px,2vw,24px)] text-brand-dark">
              <div className="flex items-center justify-between gap-3 border-t border-brand-dark/70 pt-3">
                <p className="max-w-[25rem] type-small">{highlight.label}</p>
                <span className="shrink-0 type-highlight">{highlight.value}</span>
              </div>
            </div>
          )}
        </EditorialImage>
      </div>
    </SectionPanel>
  );
}
