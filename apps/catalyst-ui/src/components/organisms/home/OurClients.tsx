import Separator from '@/components/molecules/seperator/Separator';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Image from 'next/image';
import etr from '../../../../public/assets/icons/svg/407.svg';
import boston from '../../../../public/assets/icons/svg/boston.svg';
import miami from '../../../../public/assets/icons/svg/miami.svg';
import toronto from '../../../../public/assets/icons/svg/toronto.svg';
import tradible from '../../../../public/assets/icons/svg/tradible.svg';

export default function OurClients() {
  return (
    <section className='max-w-[1440px] mx-auto lg:px-[94px] py-[42px] lg:py-[90px] flex flex-col gap-6 lg:gap-8'>
      <Title type='h2' size='medium' className=' max-lg:text-base  max-lg:px-8'>
        Our Clients
      </Title>
      <Text className=' text-base lg:-mt-4 max-lg:px-8'>
        Setting new benchmarks in market innovation, our clients redefine
        success through visionary strategies and ground breaking solutions.
      </Text>
      <Separator />
      <section className='flex items-center justify-center gap-4 lg:gap-[42px] flex-wrap  '>
        {[toronto, tradible, miami, boston, etr].map((client, index) => (
          <div key={index}>
            <Image
              src={client}
              width={400}
              loading='lazy'
              decoding='async'
              height={400}
              alt='clients'
              className='object-cover object-center w-[191px] h-[92px] aspect-auto max-lg:w-[69px] max-lg:h-[34px]'
            />
          </div>
        ))}
      </section>
      <Separator />
    </section>
  );
}
