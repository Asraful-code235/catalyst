import { Module } from 'utils';
import Blocks from './case-study/Blocks';
import GridAccordionList from './case-study/GridAccordionList';
import HeroSection from './case-study/HeroSection';
import PhaseSection from './case-study/PhaseSection';
import WhyPartnerWithUs from './case-study/WhyPartnerWithUs';

interface ModulesProps {
  modules: Module[];
}
export default function CaseStudyModule({ modules }: ModulesProps) {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px] pb-16 pt-8 lg:py-[94px]'>
      {modules?.map((module) => {
        switch (module._type) {
          case 'heroSection':
            return <HeroSection key={module._key} {...module} />;
          case 'phase':
            return <PhaseSection key={module._key} {...module} />;
          case 'partner-with-us':
            return <WhyPartnerWithUs key={module._key} {...module} />;
          case 'grid-accordion-list':
            return <GridAccordionList key={module._key} {...module} />;
          case 'blocks':
            return <Blocks key={module._key} {...module} />;

          default:
            return null;
        }
      })}
    </section>
  );
}
