import { site } from '../config/site.js';
import { Hero } from '../components/Hero.jsx';
import { ServicesSection } from '../components/ServicesSection.jsx';
import { IntroSection } from '../components/IntroSection.jsx';
import { ProblemSection } from '../components/ProblemSection.jsx';
import { PlatformSection } from '../components/PlatformSection.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';

/** La landing original, sin duplicar Header ni Footer. */
export function HomePage() {
  return (
    <>
      <Hero hero={site.hero} />
      <ServicesSection {...site.services} />
      <IntroSection {...site.intro} />
      <ProblemSection {...site.problem} />
      <PlatformSection {...site.platform} />
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
