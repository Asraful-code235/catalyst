import Image from 'next/image';

import Separator from '@/components/molecules/seperator/Separator';
import AboutPageTitle from '@/components/organisms/about/AboutPageTitle';
import StartUpProgramAccordion from '@/components/organisms/about/startup-program/StartUpProgramAccordion';
import { placeholder } from '@repo/ui/assets/icons/index';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import StartUpImage from '../../../../public/assets/aboutus/startupProgram.png';

export function StartupProgram() {
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
              <Title
                type='h2'
                size='medium'
                className=' leading-[40px] lg:leading-[80px]'
              >
                Empowering Start-ups to Thrive
              </Title>
              <Text>
                Our startup program is meticulously designed to provide founders
                and entrepreneurs with the resources, mentorship, and strategic
                insights needed to navigate every stage of their journey, from
                inception to exit. With decades of experience and a proven track
                record of successful exits, Catalyst Venture Studio offers a
                unique blend of expertise and support tailored to the needs of
                early-stage ventures.
              </Text>
            </div>
            <div className='flex flex-col gap-4 lg:gap-6'>
              <Title type='h2' size='medium'>
                Your Journey with Catalyst Venture Studio
              </Title>
              <Text className='description'>
                Join us on a transformative journey that spans validation,
                foundation, growth, scale, and ultimately, exit. Each phase of
                the journey is carefully crafted to address the unique
                challenges and opportunities encountered by startups, with a
                focus on driving sustainable growth, maximizing value creation,
                and positioning your venture for long-term success.
              </Text>
            </div>
          </div>
        </div>
        <Separator />
      </div>

      <StartUpProgramAccordion />
    </section>
  );
}
