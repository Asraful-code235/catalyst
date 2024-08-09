import { GridSectionProps, PointsList } from '@/types/what-we-do';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: GridSectionProps;
}

export default function GridSection({ data }: Props) {
  if (!data) return null;

  const { items } = data;
  return (
    <section className='max-w-[1440px] mx-auto p-8 pt-0 lg:px-[94px] lg:pb-[64px]'>
      <div className='flex flex-col md:flex-row gap-8 md:gap-[94px]'>
        {items.map((item: PointsList, index: number) => (
          <div
            key={index}
            className={`${items?.length - 1 === index ? 'col-span-2' : 'col-span-1'} flex w-fit flex-col gap-4 lg:gap-6 `}
          >
            <Title type='h2' size='medium'>
              {item.title}
            </Title>
            <ul className='description flex flex-col gap-4 list-disc'>
              {item?.list?.map((services: any, key: number) => (
                <li className='ml-6' key={key}>
                  {services}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
