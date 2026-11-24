import { useSearchParams } from 'react-router';
import { findService } from '../config/services.js';
import { site } from '../config/site.js';
import { PageHeading } from '../components/PageHeading.jsx';
import { ServicesSection } from '../components/ServicesSection.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';

export function ServicesPage() {
  const [params] = useSearchParams();
  const initialServiceId = findService(params.get('servicio'))?.id;

  return (
    <>
      <PageHeading {...site.pages.services} />
      <ServicesSection key={initialServiceId ?? 'default'} {...site.services} initialServiceId={initialServiceId} />
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
