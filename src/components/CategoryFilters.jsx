/** Filtros controlados: pueden reutilizarse en cualquier catálogo. */
export function CategoryFilters({ categories, value, onChange, label = 'Filtrar por categoría', controls }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap justify-start gap-2 sm:justify-end">
      {categories.map(({ id, label: text }) => (
        <button key={id} type="button" aria-pressed={value === id} aria-controls={controls}
          onClick={() => onChange(id)}
          className={`min-h-12 cursor-pointer rounded-lg px-[17px] py-3 text-center type-label uppercase transition-colors ${value === id ? 'bg-brand-accent text-brand-dark' : 'bg-brand-dark text-white hover:bg-brand-olive'}`}>
          {text}
        </button>
      ))}
    </div>
  );
}
