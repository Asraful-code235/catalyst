import ImageAtom from '@/components/atoms/Image';
import { WhyChoseUsSectionProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: WhyChoseUsSectionProps;
}

export default async function WhyChoseUs({ data }: Props) {
  if (!data) return null;

  const { title, description, image } = data;
  return (
    <section>
      <article className=' space-y-8 lg:space-y-[64px]'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <Title type='h2' size='medium'>
            {title}
          </Title>
          <Text>{description}</Text>
        </div>
        <ImageAtom
          src={image}
          alt={title}
          className='h-[148px] lg:h-[310px] w-full aspect-auto'
        />
      </article>
    </section>
  );
}
