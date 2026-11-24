import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { FeatureCard } from './FeatureCard.jsx';

export function ServiceBenefitsSection({ id, eyebrow, heading, items = [] }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} className="max-w-[740px]" />
      <ul className="mt-[clamp(48px,10vw,140px)] grid list-none grid-cols-1 gap-[22px] p-0 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => <FeatureCard key={item.title} {...item} />)}
      </ul>
    </SectionPanel>
  );
}
