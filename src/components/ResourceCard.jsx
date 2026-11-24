/** Tarjeta de guía con contenido desplegable nativo; no depende de un blog externo. */
export function ResourceCard({ category, title, description, content }) {
  return (
    <article className="flex min-w-0 flex-col gap-4 rounded-xl border border-brand-olive/20 bg-white p-7 text-brand-dark">
      <p className="font-code text-xs uppercase tracking-wider text-brand-olive">{category}</p>
      <h3 className="text-2xl leading-tight tracking-tight">{title}</h3>
      <p className="text-base leading-relaxed text-brand-muted">{description}</p>
      <details className="mt-auto border-t border-brand-olive/20 pt-5">
        <summary className="cursor-pointer font-semibold text-brand-olive">Leer guía</summary>
        <p className="mt-4 leading-relaxed">{content}</p>
      </details>
    </article>
  );
}
