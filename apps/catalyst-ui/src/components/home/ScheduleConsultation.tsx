import { placeholder } from '@repo/ui/assets/icons/index';
import { Button } from '@repo/ui/components/ui/button';
import Image from 'next/image';
import scImage from '../../../public/assets/icons/svg/scheduleconsultation.svg';

export default function ScheduleConsultation() {
  return (
    <section className='w-full grid lg:grid-cols-2 lg:h-[263px] xl:overflow-hidden'>
      <div className='w-full bg-[#1A1A1A] text-white '>
        <div className=' lg:max-w-[718px] w-full lg:ml-auto flex flex-col gap-6 lg:gap-4 px-8 lg:px-[63px] py-8'>
          <h3 className='font-medium text-base lg:text-2xl leading-[17.6px] lg:leading-[26.4px] w-full'>
            Strategy, Transactions, and Transformation
          </h3>
          <p className='lg:leading-6 max-lg:text-xs leading-[18px] font-normal '>
            Catalyst helps you achieve your goals with an innovative approach
            that integrates strategy, transactions, transformation, and
            technology. Our seamless design and delivery process ensures
            effective and cohesive solutions at every step.
          </p>
          <Button className='max-lg:mt-2'>Schedule a Consultation</Button>
        </div>
      </div>
      <div className='hidden lg:block'>
        <Image
          src={scImage}
          width={600}
          height={263}
          placeholder='blur'
          blurDataURL={placeholder.src}
          loading='lazy'
          decoding='async'
          alt='image'
          className='w-full h-full object-cover object-center aspect-auto'
        />
      </div>
    </section>
  );
}
