import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className='flex flex-col gap-4 lg:gap-6'>
    <Title type='h3' size='medium'>
      {title}
    </Title>
    <Text>{description}</Text>
  </div>
);

export default ServiceCard;
