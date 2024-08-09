import { ListItemProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

const List = ({ title, technologies }: ListItemProps) => (
  <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-0.5'>
      <Title size='medium' type='h3'>
        {title}
      </Title>
    </div>
    <ul className='flex flex-col gap-2 list-disc'>
      {technologies.map((technology, index: number) => (
        <li key={index} className='ml-6 lg:ml-8'>
          <Text className='tracking-tight font-normal leading-[32px]'>
            {technology.title}
          </Text>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
