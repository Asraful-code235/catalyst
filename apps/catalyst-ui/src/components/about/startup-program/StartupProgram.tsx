import Image from 'next/image';
import AboutPageTitle from '../AboutPageTitle';

import { placeholder } from '@repo/ui/assets/icons/index';
import StartUpImage from '../../../../public/assets/aboutus/startupProgram.png';
import Accordion from './Accordion';

export default function StartupProgram() {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px]'>
      <div className='max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[64px] p-8 lg:p-[94px]'>
        <AboutPageTitle title={'Startup Program'} />
        <div className='flex flex-col gap-4'>
          <h2 className='header'>
            Welcome to Catalyst Venture Studio&apos;s Startup Journey
          </h2>
          <p className='description'>
            At Catalyst Venture Studio, we understand that the startup journey
            is a thrilling yet challenging adventure, filled with opportunities
            and uncertainties. For founders and entrepreneurs embarking on this
            path, having the right guidance, expertise, and support can make all
            the difference in transforming visionary ideas into successful
            ventures.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[42px] '>
          <Image
            src={StartUpImage}
            alt='startup'
            width={800}
            height={400}
            placeholder='blur'
            blurDataURL={placeholder.src}
            className='w-[496px] object-cover object-center aspect-auto col-span-2 max-lg:hidden'
            loading='lazy'
            decoding='async'
            quality={'85'}
          />
          <div className='flex flex-col gap-8 lg:gap-[64px] w-full'>
            <div className='flex flex-col gap-6 lg:gap-[42px] '>
              <h2 className='text-[32px] lg:text-[64px] font-medium leading-[40px] lg:leading-[80px]'>
                Empowering Start-ups to Thrive
              </h2>
              <p className='description'>
                Our startup program is meticulously designed to provide founders
                and entrepreneurs with the resources, mentorship, and strategic
                insights needed to navigate every stage of their journey, from
                inception to exit. With decades of experience and a proven track
                record of successful exits, Catalyst Venture Studio offers a
                unique blend of expertise and support tailored to the needs of
                early-stage ventures.
              </p>
            </div>
            <div className='flex flex-col gap-4 lg:gap-6'>
              <h2 className='header'>
                Your Journey with Catalyst Venture Studio
              </h2>
              <p className='description'>
                Join us on a transformative journey that spans validation,
                foundation, growth, scale, and ultimately, exit. Each phase of
                the journey is carefully crafted to address the unique
                challenges and opportunities encountered by startups, with a
                focus on driving sustainable growth, maximizing value creation,
                and positioning your venture for long-term success.
              </p>
            </div>
          </div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1346'
          height='2'
          viewBox='0 0 1346 2'
          fill='none'
          className='w-full mx-auto'
        >
          <path
            opacity='0.4'
            d='M1346 1L0 1'
            stroke='#1A1A1A'
            strokeWidth='0.5'
          />
        </svg>
      </div>

      <Accordion />
    </section>
  );
}
