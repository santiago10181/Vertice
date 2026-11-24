import { site } from '../config/site.js';
import { PageHeading } from '../components/PageHeading.jsx';
import { EditorialGallerySection } from '../components/EditorialGallerySection.jsx';
import { TeamSection } from '../components/TeamSection.jsx';
import { EditorialSplitSection } from '../components/EditorialSplitSection.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';

/** La página solo compone secciones; los datos están en config/about.js. */
export function AboutPage() {
  const { approach, team, vision, ...intro } = site.pages.about;
  return (
    <>
      <PageHeading {...intro} variant="editorial" />
      <EditorialGallerySection {...approach} />
      <TeamSection {...team} />
      <EditorialSplitSection {...vision} />
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
