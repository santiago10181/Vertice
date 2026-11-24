import { useParams } from 'react-router';
import { findNews, getNewsCategory } from '../config/news.js';
import { site } from '../config/site.js';
import { PageHeading } from '../components/PageHeading.jsx';
import { SectionPanel } from '../components/SectionPanel.jsx';
import { Button } from '../components/Button.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';
import { NotFoundPage } from './NotFoundPage.jsx';

export function NewsDetailPage() {
  const { newsId } = useParams();
  const article = findNews(newsId);
  if (!article) return <NotFoundPage />;
  return (
    <>
      <PageHeading eyebrow={getNewsCategory(article.category)?.label} title={article.title} description={article.description} variant="plain" />
      <SectionPanel labelledBy="article-title">
        <article className="mx-auto max-w-3xl">
          <h2 id="article-title" className="sr-only">Artículo completo</h2>
          <div className="mb-10"><Button label="VOLVER A NOTICIAS" href={`/noticias?categoria=${article.category}`} variant="dark" /></div>
          <div className="space-y-6 type-body">
            {article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          {article.relatedService && <div className="mt-12 border-t border-brand-dark/25 pt-8"><Button label="EXPLORAR SOLUCIONES" href={article.relatedService} variant="dark" /></div>}
        </article>
      </SectionPanel>
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
