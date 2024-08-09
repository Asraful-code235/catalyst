import { AboutSectionProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Separator from '../../seperator/Separator';

interface Props {
  data: AboutSectionProps;
}

export default function AboutSection({ data }: Props) {
  if (!data) return null;
  const { title, description, extraDescription } = data;
  return (
    <section className='flex flex-col gap-8 lg:gap-[94px]'>
      <section className='grid grid-cols-1 lg:grid-cols-2 max-lg:gap-4'>
        <Title type='h2' size='medium' className=' h-fit'>
          {title}
        </Title>
        <div className='aboutDescription tracking-tight flex flex-col gap-6 lg:gap-8 w-full lg:max-w-[671px]'>
          <Text type='p'>{description}</Text>
          {extraDescription ? <Text type='p'>{extraDescription}</Text> : null}
        </div>
      </section>
      <Separator />
    </section>
  );
}
