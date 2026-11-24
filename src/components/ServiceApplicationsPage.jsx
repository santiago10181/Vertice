import { PageHeading } from './PageHeading.jsx';
import { ServiceMetricsSection } from './ServiceMetricsSection.jsx';
import { ServiceChallengeSection } from './ServiceChallengeSection.jsx';
import { ServiceApplicationsSection } from './ServiceApplicationsSection.jsx';
import { ContactCtaSection } from './ContactCtaSection.jsx';

/** Composición editorial clara para servicios centrados en aplicaciones. */
export function ServiceApplicationsPage({ content, contact }) {
  return (
    <>
      <PageHeading {...content.hero} variant="editorial" nextSectionId={content.metrics.id} />
      <ServiceMetricsSection {...content.metrics} />
      <ServiceChallengeSection {...content.challenge} />
      <ServiceApplicationsSection {...content.applications} />
      <ContactCtaSection {...contact} />
    </>
  );
}
