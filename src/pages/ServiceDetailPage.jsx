import { useParams } from 'react-router';
import { findService } from '../config/services.js';
import { site } from '../config/site.js';
import { PageHeading } from '../components/PageHeading.jsx';
import { EditorialSplitSection } from '../components/EditorialSplitSection.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';
import { ServiceEditorialPage } from '../components/ServiceEditorialPage.jsx';
import { ServiceApplicationsPage } from '../components/ServiceApplicationsPage.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';

/** Una sola vista para cualquier servicio del catálogo. */
export function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = findService(serviceId);
  if (!service) return <NotFoundPage />;
  if (service.page?.layout === 'applications') return <ServiceApplicationsPage content={service.page} contact={site.contactCta} />;
  if (service.page) return <ServiceEditorialPage content={service.page} contact={site.contactCta} />;
  return (
    <>
      <PageHeading eyebrow="SERVICIOS" title={service.title} description={service.description} action={{ label: 'VER TODOS LOS SERVICIOS', href: '/servicios' }} />
      <EditorialSplitSection id="capacidades" eyebrow="NUESTRAS SOLUCIONES" heading={service.heading}
        description={service.capabilities.join(' · ')} image={{ src: service.image, alt: service.imageAlt, width: 508, height: 508 }}
        action={{ label: 'HABLEMOS DE TU PROYECTO', href: '/#contacto', variant: 'dark' }} />
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
