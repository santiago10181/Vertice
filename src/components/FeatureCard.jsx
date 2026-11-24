import { FeatureIcon } from './Icons.jsx';

/** Una sola tarjeta para los cuatro beneficios. */
export function FeatureCard({
  icon = 'distribution',
  title,
  description,
}) {
  return (
    <li className="flex min-h-[214px] min-w-0 flex-col rounded-xl border border-white/15 bg-brand-light px-[23px] py-[22px] text-brand-dark max-[600px]:min-h-[210px]">
      <div className="mb-6 text-brand-olive"><FeatureIcon name={icon} /></div>
      <div className="mt-auto">
        <h3 className="type-feature-heading">
          {title}
        </h3>
        <p className="mt-[14px] type-small">
          {description}
        </p>
      </div>
    </li>
  );
}
