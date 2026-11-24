import { SectionPanel } from './SectionPanel.jsx';
import { NewsCard } from './NewsCard.jsx';

export function NewsGrid({ items, categories, id = 'publicaciones' }) {
  return (
    <SectionPanel id={id} labelledBy={`${id}-title`}>
      <h2 id={`${id}-title`} className="sr-only">Publicaciones</h2>
      <p role="status" className="sr-only">{items.length} publicaciones disponibles</p>
      {items.length ? (
        <ul className="m-0 grid list-none gap-[clamp(16px,1.75vw,24px)] p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(article => (
            <li key={article.id}>
              <NewsCard {...article} categoryLabel={categories.find(category => category.id === article.category)?.label ?? article.category} />
            </li>
          ))}
        </ul>
      ) : <p className="py-8 text-brand-muted">No hay publicaciones en esta categoría por ahora.</p>}
    </SectionPanel>
  );
}
