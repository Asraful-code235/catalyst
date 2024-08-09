import { AboutSectionProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: AboutSectionProps;
}

export default function AboutSection({ data }: Props) {
  return (
    <section className='flex flex-col gap-4 lg:gap-6'>
      <Title type='h1' size='medium'>
        {data?.title}
      </Title>
      <Text>{data?.description}</Text>
    </section>
  );
}
