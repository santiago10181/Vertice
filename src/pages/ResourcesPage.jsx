import { site } from '../config/site.js';
import { PageHeading } from '../components/PageHeading.jsx';
import { ResourceCard } from '../components/ResourceCard.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';

export function ResourcesPage() {
  return (
    <>
      <PageHeading {...site.pages.resources} />
      <section aria-labelledby="guides-title" className="mx-[clamp(12px,1.75vw,28px)] mb-6 rounded-xl bg-brand-light px-[clamp(24px,4.45vw,62px)] py-14">
        <h2 id="guides-title" className="mb-8 text-3xl tracking-tight">Guías para empezar</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.resources.map((resource) => <ResourceCard key={resource.id} {...resource} />)}
        </div>
      </section>
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
