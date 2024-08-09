import { PhaseProps } from '@/types/case-study';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface HeroSectionProps {
  data: PhaseProps;
}

export default function PhaseSection({ data }: HeroSectionProps) {
  if (!data) return null;
  return (
    <section className='max-w-[1440px] mx-auto px-8 lg:px-[94px] flex flex-col gap-4 lg:gap-8'>
      <Title
        type='h1'
        size='medium'
        className='text-xs lg:text-[40px] leading-[13.2px] lg:leading-[110%] font-normal'
      >
        <strong className='font-medium  leading-[13.2px]  lg:leading-[44px]'>
          {data?.strongText}
        </strong>
        {data?.title}
      </Title>
      <Text>{data?.description}</Text>
    </section>
  );
}
