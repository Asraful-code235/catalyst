import { Module } from '@repo/ui/types/index';
import Cards from './Cards';

export default function HowWeWorkAndWhatWeGet({ data }: Module) {
  if (!data) return null;
  return (
    <section className='max-w-[1440px] mx-auto px-8 pb-8 lg:px-[94px] lg:pb-16 flex flex-col gap-8 lg:gap-[64px]'>
      <div className='flex flex-col gap-8'>
        <div className='space-y-4'>
          <h2 className='header'>{data?.title}</h2>
          <p className='description'>{data?.description}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 '>
          {data?.cards?.map((item: Module, key: number) => (
            <Cards item={item} key={key} />
          ))}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-[42px]'>
        <div className='flex flex-col gap-4 lg:gap-6 '>
          <h2 className='header '>{data?.technologiesTitle}</h2>
          <p className='description lg:max-w-[649px]'>
            {data?.technologiesDescription}
          </p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='308'
          viewBox='0 0 2 308'
          fill='none'
          className='h-full my-auto hidden lg:block'
        >
          <path
            opacity='0.4'
            d='M1 308L1.00001 0'
            stroke='#1A1A1A'
            strokeWidth='0.5'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='366'
          height='2'
          viewBox='0 0 366 2'
          fill='none'
          className='lg:hidden mx-auto w-full'
        >
          <path
            d='M0 1L366 1.00003'
            stroke='#1A1A1A'
            strokeOpacity='0.25'
            strokeWidth='0.5'
          />
        </svg>
        <div className='flex justify-between lg:gap-[64px] lg:flex-shrink-0 w-full flex-1'>
          {data?.technologies?.map((item: Module, key: number) => (
            <div key={key} className='flex flex-col gap-4 lg:flex-shrink-0'>
              <p className='header'>{item.title}</p>
              <ul className='flex flex-col gap-0.5 list-disc description'>
                {item.skills?.map((skill: Module, key: number) => (
                  <li className='ml-6' key={key}>
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
