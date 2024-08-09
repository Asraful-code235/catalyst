import Text from '@repo/ui/components/atoms/Text';

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card = ({ number, title, description }: CardProps) => (
  <div className='p-4 bg-[#1A1A1A] text-white flex flex-col gap-8 lg:gap-[42px]'>
    <div className='flex flex-col gap-0.5'>
      <Text type='h4' className='font-medium'>
        {number}.
      </Text>
      <Text type='h4' className='font-medium tracking-tight'>
        {title}
      </Text>
    </div>
    <Text className='tracking-tight font-normal'>{description}</Text>
  </div>
);

export default Card;
