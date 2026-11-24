import { FeatureIcon } from './Icons.jsx';

/** Una sola tarjeta para los cuatro beneficios. */
export function FeatureCard({
  icon = 'distribution',
  title,
  description,
}) {
  return (
    <li className="flex min-h-[214px] min-w-0 flex-col rounded-xl bg-brand-light px-[23px] py-[22px] text-brand-dark max-[600px]:min-h-[210px]">
      <FeatureIcon name={icon} />
      <div className="mt-auto">
        <h3 className="font-display text-[clamp(15px,1.15vw,17px)] leading-[1.25] font-semibold tracking-[-0.025em]">
          {title}
        </h3>
        <p className="mt-[14px] font-display text-[clamp(14px,1.15vw,16px)] leading-[1.35] tracking-[-0.018em]">
          {description}
        </p>
      </div>
    </li>
  );
}
