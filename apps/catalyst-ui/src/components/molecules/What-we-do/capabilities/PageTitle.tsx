import { PageTitleProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Separator from '../../seperator/Separator';

interface Props {
  data: PageTitleProps;
}

export default function PageTitle({ data: { title, description } }: Props) {
  return (
    <section className=' flex flex-col gap-3 lg:gap-8 '>
      <div className=' flex flex-col gap-3 lg:gap-6 '>
        <Title type='h1' size='big' className='lg:tracking-tighter'>
          {title}
        </Title>
        <Text className='text-[10px] lg:text-xl font-medium leading-normal'>
          {description}
        </Text>
      </div>
      <Separator />
    </section>
  );
}
