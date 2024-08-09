import { ItemList, ListItemSectionProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: ListItemSectionProps;
}

export default function ListItemSection({ data }: Props) {
  if (!data) return null;
  const { title, description, items } = data;
  return (
    <section>
      <div className='flex flex-col gap-4 lg:gap-6'>
        <Title type='h2' size='medium'>
          {title}
        </Title>
        <Text>{description}</Text>
        <ul className='flex flex-col list-disc text-xs lg:text-base font-medium leading-6 lg:leading-8 ml-6 tracking-tight'>
          {items?.map((item: ItemList, index: number) => (
            <li key={index} className='space-x-1'>
              <span>{item.title}:</span>
              <span className='font-normal'>{item.description}</span>{' '}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
