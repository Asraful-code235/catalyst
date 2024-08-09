import ImageAtom from '@/components/atoms/Image';
import { PageTitleProps } from '@/types/what-we-do';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

interface Props {
  data: PageTitleProps;
}

export default function PageTitle({ data }: Props) {
  if (!data) return null;
  const { title, category, backgroundImage } = data;
  return (
    <section className='flex flex-col relative'>
      <ImageAtom
        src={backgroundImage}
        alt={title}
        width={1200}
        height={434}
        className='h-[227px] lg:h-[434px] w-full aspect-auto'
      />
      <div className='max-w-[1440px] mx-auto w-full lg:gap-6 px-8 lg:px-[94] py-[42px] absolute bottom-0 left-0 right-0  '>
        <div className='flex flex-col gap-4 lg:gap-6 '>
          <Title
            type='h1'
            size='big'
            className='max-lg:max-w-[300px] leading-normal text-white line-clamp-4'
          >
            {title}
          </Title>
          <Text className='max-lg:text-[10px] font-medium text-white'>
            {category}
          </Text>
        </div>
      </div>
    </section>
  );
}
