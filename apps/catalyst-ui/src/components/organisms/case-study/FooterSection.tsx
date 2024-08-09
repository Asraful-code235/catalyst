import { ListProps, PhaseProps } from '@/types/case-study';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: ListProps;
}
export default function FooterSection({ data }: Props) {
  if (!data) return null;
  return (
    <section className='flex flex-col gap-8 lg:gap-[42px]'>
      {data?.list?.map((list: PhaseProps, key: number) => (
        <section
          key={key}
          className='max-w-[1440px] mx-auto px-8 lg:px-[94px] flex flex-col gap-6 lg:gap-8'
        >
          <Title
            type='h2'
            size='big'
            className='text-[32px] lg:text-[40px] leading-[35.2px]] lg:leading-[110%] font-medium'
          >
            {list?.title}
          </Title>
          <Text>{list?.description}</Text>
        </section>
      ))}
    </section>
  );
}
