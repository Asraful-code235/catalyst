import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  title: string;
  number: string;
  description: string;
}

export default function RowQnaSection({ number, title, description }: Props) {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
      <Title type='h3' size='medium'>
        {number}
      </Title>
      <div className='lg:max-w-[858px] flex flex-col gap-4 lg:gap-6 '>
        <Title type='h3' size='medium'>
          {title}
        </Title>
        <Text>{description}</Text>
      </div>
    </div>
  );
}
