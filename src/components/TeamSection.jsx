import { SectionPanel } from './SectionPanel.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { TeamMemberCard } from './TeamMemberCard.jsx';
import { CarouselControls } from './CarouselControls.jsx';
import { useHorizontalCarousel } from '../hooks/useHorizontalCarousel.js';

export function TeamSection({ id = 'equipo', eyebrow, heading, members = [] }) {
  const headingId = `${id}-title`;
  const trackId = `${id}-lista`;
  const { trackRef, canPrevious, canNext, move } = useHorizontalCarousel(members.length);
  return (
    <SectionPanel id={id} labelledBy={headingId}>
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5 md:mb-12">
        <SectionHeading id={headingId} eyebrow={eyebrow} heading={heading} />
        {members.length > 1 && <CarouselControls controlsId={trackId} canPrevious={canPrevious} canNext={canNext} onPrevious={() => move(-1)} onNext={() => move(1)} />}
      </div>
      <ul id={trackId} ref={trackRef} aria-label="Integrantes del equipo" tabIndex={members.length ? 0 : undefined} className="m-0 grid list-none auto-cols-[86%] grid-flow-col grid-rows-1 items-stretch gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-3 sm:auto-cols-[calc((100%_-_1.25rem)/2)] lg:auto-cols-[calc((100%_-_2.5rem)/3)] motion-reduce:scroll-auto">
        {members.map((member) => <li key={member.id} className="min-w-0 snap-start"><TeamMemberCard {...member} /></li>)}
      </ul>
    </SectionPanel>
  );
}
