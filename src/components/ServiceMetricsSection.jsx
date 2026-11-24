import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { StatRow } from './StatRow.jsx';

/** Bloque de capacidades cuantificables, no indicadores de rendimiento. */
export function ServiceMetricsSection({ id, eyebrow, heading, description, statistics = [] }) {
  const headingId = `${id}-title`;
  return (
    <SectionPanel id={id} labelledBy={headingId} tone="olive">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} tone="dark" />
          {description && <p className="mt-8 max-w-xl type-body text-white/90">{description}</p>}
        </div>
        <dl className="m-0" aria-label="Alcance de la solución">
          {statistics.map(stat => <StatRow key={stat.label} {...stat} compact />)}
        </dl>
      </div>
    </SectionPanel>
  );
}
