import { PhaseProps } from '@/utils/types/case-study';

interface HeroSectionProps {
  data: PhaseProps;
}

export default function PhaseSection({ data }: HeroSectionProps) {
  if (!data) return null;
  return (
    <section className='max-w-[1440px] mx-auto px-8 lg:px-[94px] flex flex-col gap-4 lg:gap-8'>
      <h1 className='text-xs lg:text-[40px] leading-[13.2px] lg:leading-[110%] font-normal'>
        <strong className='font-medium  leading-[13.2px]  lg:leading-[44px]'>
          {data?.strongText}
        </strong>
        {data?.title}
      </h1>
      <p className='description font-normal'>{data?.description}</p>
    </section>
  );
}
