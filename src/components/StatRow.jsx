/** Fila de dato: usada para cualquier cantidad de estadísticas. */
export function StatRow({ label, value }) {
  return (
    <div className="grid min-h-[235px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-brand-dark/70 py-8 max-[700px]:min-h-0 max-[700px]:grid-cols-1 max-[700px]:gap-6 max-[700px]:py-9">
      <dt className="max-w-[315px] self-center font-display text-[clamp(14px,1.12vw,16px)] leading-[1.45] font-normal text-brand-dark max-[700px]:max-w-[25rem]">
        {label}
      </dt>
      <dd className="m-0 justify-self-end font-code text-[clamp(77px,9.5vw,135px)] leading-[1] font-normal tracking-[-0.1em] whitespace-nowrap tabular-nums text-brand-dark max-[900px]:text-[clamp(65px,8vw,110px)] max-[700px]:text-[clamp(68px,14vw,110px)] max-[400px]:text-[clamp(55px,13.5vw,80px)]">
        {value}
      </dd>
    </div>
  );
}
