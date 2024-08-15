'use client';
import { ContactForm } from '@/components/organisms/contact/ContactForm';
import { instagram, linkedIn, x } from '@repo/ui/assets/icons/index';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';

import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    title: 'Instagram:',
    icon: instagram,
    url: '/',
  },
  {
    title: 'LinkedIn:',
    icon: linkedIn,
    url: '/',
  },
  {
    title: 'X (formerly Twitter):',
    icon: x,
    url: '/',
  },
];

export function ContactUs() {
  return (
    <section className='w-full lg:grid grid-cols-1 lg:grid-cols-6 lg:min-h-screen lg:relative'>
      <div className='col-span-4 h-full hidden lg:block '></div>
      <div className='col-span-2 bg-[#1A1A1A] h-auto lg:min-h-[140dvh] hidden lg:block '></div>
      <div className='lg:absolute max-lg:max-w-[1440px] max-lg:mx-auto lg:px-[96px] flex flex-col lg:grid h-full lg:grid-cols-6 lg:gap-[136px] lg:py-[94px] lg:top-0 lg:left-0 lg:right-0'>
        {/* form */}
        <div className='lg:max-w-[865px] max-lg:p-8 max-lg:order-2 lg:ml-auto lg:pb-[94px] flex-1 col-span-4 flex flex-col gap-16 w-full'>
          <h1 className='text-[40px] leading-[44px] font-medium'>Contact Us</h1>
          <ContactForm />
          <div className='flex max-lg:flex-col gap-8 lg:items-center justify-between w-full max-lg:pb-16'>
            <div className='flex flex-col gap-4'>
              <Title
                type='h1'
                size='medium'
                className='text-[40px] leading-[44px] font-medium'
              >
                Book a Consultation
              </Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur ut tempor velit tortor
                porta.
              </Text>
            </div>
            <a
              href='/'
              className='flex items-center gap-3 group transition-all duration-300 ease-in-out'
            >
              <p className='description font-medium group-hover:font-bold'>
                Calendar
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='group-hover:font-bold group-hover:translate-x-2'
              >
                <path
                  d='M5 4.175L8.7085 8L5 11.825L6.1417 13L11 8L6.1417 3L5 4.175Z'
                  fill='#1A1A1A'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* social links */}
        <div className='flex flex-col gap-[62px] max-lg:order-1 w-full col-span-2 bg-[#1A1A1A] max-lg:p-8'>
          <div className='flex flex-col gap-8'>
            <h2 className='header text-white'>Follow Us</h2>
            <div className='flex flex-col gap-8 '>
              {socialLinks.map((link, index: number) => (
                <Link
                  href={link.url}
                  key={index}
                  className='description text-white flex gap-3 items-center'
                >
                  <Image
                    width={24}
                    height={24}
                    src={link.icon}
                    alt={link.title}
                    className='w-6 h-6'
                  />

                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className='header text-white'>Our Offices</h2>
            <span className='description text-white flex gap-3 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12 20.8999L16.95 15.9499C17.9289 14.9709 18.5955 13.7236 18.8656 12.3658C19.1356 11.0079 18.9969 9.60052 18.4671 8.32148C17.9373 7.04244 17.04 5.94923 15.8889 5.18009C14.7378 4.41095 13.3844 4.00043 12 4.00043C10.6156 4.00043 9.26222 4.41095 8.11109 5.18009C6.95996 5.94923 6.06275 7.04244 5.53292 8.32148C5.00308 9.60052 4.86442 11.0079 5.13445 12.3658C5.40449 13.7236 6.07111 14.9709 7.05 15.9499L12 20.8999ZM12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639L12 23.7279ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999ZM12 14.9999C10.9391 14.9999 9.92172 14.5785 9.17158 13.8283C8.42143 13.0782 8 12.0608 8 10.9999C8 9.93906 8.42143 8.92164 9.17158 8.17149C9.92172 7.42135 10.9391 6.99992 12 6.99992C13.0609 6.99992 14.0783 7.42135 14.8284 8.17149C15.5786 8.92164 16 9.93906 16 10.9999C16 12.0608 15.5786 13.0782 14.8284 13.8283C14.0783 14.5785 13.0609 14.9999 12 14.9999Z'
                  fill='white'
                />
              </svg>
              <p className='lg:max-w-[227px] w-full'>
                447 Broadway, 2nd Floor New York, NY 10013 United States
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
