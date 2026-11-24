/** Fila de dato: usada para cualquier cantidad de estadísticas. */
export function StatRow({ label, value, compact = false }) {
  return (
    <div className={compact ? "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-t border-current/60 py-5 sm:py-8" : "grid min-h-[235px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-current/30 py-8 max-[700px]:min-h-0 max-[700px]:grid-cols-1 max-[700px]:gap-6 max-[700px]:py-9"}>
      <dt className="max-w-[315px] self-center type-small text-inherit max-[700px]:max-w-[25rem]">
        {label}
      </dt>
      <dd className={compact ? "m-0 justify-self-end type-stat-compact whitespace-nowrap text-inherit" : "m-0 justify-self-end type-stat whitespace-nowrap text-inherit max-[900px]:text-[clamp(65px,8vw,110px)] max-[700px]:text-[clamp(68px,14vw,110px)] max-[400px]:text-[clamp(55px,13.5vw,80px)]"}>
        {value}
      </dd>
    </div>
  );
}
