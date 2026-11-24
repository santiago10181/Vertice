import { ArrowRightIcon } from './Icons.jsx';

/** Lista editorial de puntos, reutilizable en cualquier servicio. */
export function ArrowList({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-6 list-none p-0">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3 border-b border-brand-dark/30 py-4 type-body last:border-b-0">
          <span className="mt-0.5 shrink-0 text-brand-olive"><ArrowRightIcon /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
