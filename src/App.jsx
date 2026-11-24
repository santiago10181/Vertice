import { site } from './config/site.js';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { IntroSection } from './components/IntroSection.jsx';
import { ProblemSection } from './components/ProblemSection.jsx';
import { PlatformSection } from './components/PlatformSection.jsx';
import { ContactCtaSection } from './components/ContactCtaSection.jsx';
import { Footer } from './components/Footer.jsx';

/** Un único árbol JSX: todas las secciones usan contenidos de site.js. */
export function App() {
  return (
    <>
      <Header brand={site.brand} navigation={site.navigation} contact={site.contact} />
      <main id="contenido">
        <Hero hero={site.hero} />
        <ServicesSection {...site.services} />
        <IntroSection {...site.intro} />
        <ProblemSection {...site.problem} />
        <PlatformSection {...site.platform} />
        <ContactCtaSection {...site.contactCta} />
      </main>
      <Footer {...site.footer} home={site.brand.home} brandName={site.brand.name} />
    </>
  );
}
