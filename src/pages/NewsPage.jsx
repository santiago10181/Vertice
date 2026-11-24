import { useSearchParams } from 'react-router';
import { PageHeading } from '../components/PageHeading.jsx';
import { CategoryFilters } from '../components/CategoryFilters.jsx';
import { NewsGrid } from '../components/NewsGrid.jsx';
import { ContactCtaSection } from '../components/ContactCtaSection.jsx';
import { newsCategories, newsHeading, filterNews, getNewsCategory } from '../config/news.js';
import { site } from '../config/site.js';

export function NewsPage() {
  const [params, setParams] = useSearchParams();
  const category = getNewsCategory(params.get('categoria'))?.id ?? 'todas';
  function selectCategory(id) {
    setParams(previous => {
      const next = new URLSearchParams(previous);
      if (id === 'todas') next.delete('categoria');
      else next.set('categoria', id);
      return next;
    }, { preventScrollReset: true });
  }
  return (
    <>
      <PageHeading {...newsHeading} variant="plain">
        <div className="mt-[clamp(40px,8vw,108px)]">
          <CategoryFilters categories={newsCategories} value={category} onChange={selectCategory} controls="publicaciones" />
        </div>
      </PageHeading>
      <NewsGrid items={filterNews(category)} categories={newsCategories} />
      <ContactCtaSection {...site.contactCta} />
    </>
  );
}
