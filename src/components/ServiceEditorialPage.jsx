import { PhotoBanner } from './PhotoBanner.jsx';
import { ServiceChallengeSection } from './ServiceChallengeSection.jsx';
import { ServiceBenefitsSection } from './ServiceBenefitsSection.jsx';
import { ContactCtaSection } from './ContactCtaSection.jsx';

/** Una única composición para todos los servicios con contenido editorial. */
export function ServiceEditorialPage({ content, contact }) {
  return (
    <>
      <PhotoBanner id="servicio-portada" variant="hero" {...content.hero} />
      <ServiceChallengeSection {...content.challenge} />
      <ServiceBenefitsSection {...content.benefits} />
      <PhotoBanner {...content.spotlight} />
      <ContactCtaSection {...contact} />
    </>
  );
}
