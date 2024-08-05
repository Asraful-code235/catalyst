import { ListProps, PhaseProps } from '@/utils/types/case-study';

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
          <h1 className='text-[32px] lg:text-[40px] leading-[35.2px]] lg:leading-[110%] font-medium'>
            {list?.title}
          </h1>
          <p className='description font-normal'>{list?.description}</p>
        </section>
      ))}
    </section>
  );
}
