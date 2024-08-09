import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  title: string;
  description: string;
}

export default function RowSeparatedItem({ title, description }: Props) {
  return (
    <div className=' flex flex-col lg:flex-row gap-4 lg:gap-6 '>
      <Title type='h3' size='medium' className=' w-full flex-[0.75]'>
        {title}
      </Title>
      <Text className='text-left lg:text-right flex-1 '>{description}</Text>
    </div>
  );
}
