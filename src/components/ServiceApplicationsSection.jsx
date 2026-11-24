import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { EditorialImage } from './EditorialImage.jsx';

/** Galería de capacidades con fotografía y texto, configurable por servicio. */
export function ServiceApplicationsSection({ id, eyebrow, heading, items = [] }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} className="max-w-3xl" />
      <ul className="mt-[clamp(32px,5vw,64px)] grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {items.map(item => (
          <li key={item.title} className="min-w-0">
            <EditorialImage image={item.image} aspectClass="aspect-[4/5]" />
            <h3 className="mt-5 type-card-heading">{item.title}</h3>
            <p className="mt-3 type-body text-brand-dark/85">{item.description}</p>
          </li>
        ))}
      </ul>
    </SectionPanel>
  );
}
