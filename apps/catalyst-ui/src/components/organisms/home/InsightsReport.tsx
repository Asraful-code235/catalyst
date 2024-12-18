import Text from '@repo/ui/components/atoms/Text';
import Image from 'next/image';
import InsightsReportImage from '../../../../public/assets/insightsreport/insightsreport.webp';

const InsightReports = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    category: 'Insights',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas. Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas.',
    href: '/insight/',
    img: InsightsReportImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    category: 'Insights',
    description:
      'Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas. Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas.',
    href: '/insight/',
    img: InsightsReportImage,
  },
];

export default function InsightsReport() {
  return (
    <section className='max-lg:py-[42px] lg:pt-[94px] w-full flex flex-col max-lg:gap-6'>
      <div className='max-w-[1440px] mx-auto lg:pl-24 lg:pr-8 flex items-center justify-between gap-4 w-full'>
        <Text className='text-base lg:text-2xl max-lg:font-medium leading-[17.6px] text-left w-full lg:leading-6 max-lg:px-8'>
          Insight Reports
        </Text>
        <button className='group paragraph flex-shrink-0 font-medium leading-[18px] lg:leading-6 flex items-center gap-3 max-lg:pr-8'>
          <span className='group-hover:font-bold'>See All</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='group-hover:transform group-hover:translate-x-1'
          >
            <path
              d='M7.5 6.2625L13.0628 12L7.5 17.7375L9.21255 19.5L16.5 12L9.21255 4.5L7.5 6.2625Z'
              fill='#1A1A1A'
            />
          </svg>
        </button>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1440'
        height='2'
        viewBox='0 0 1440 2'
        fill='none'
        className='w-screen mx-auto mt-8 max-lg:hidden'
      >
        <path
          d='M0 1L1440 1.00013'
          stroke='#1A1A1A'
          strokeOpacity='0.25'
          strokeWidth='0.5'
        />
      </svg>
      <section className=' w-full'>
        {InsightReports.map((insight, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 relative ${
              index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
            }`}
          >
            <div
              className={`paragraph flex flex-col gap-3 lg:gap-4 text-left max-lg:px-8 max-lg:py-6 lg:pt-[75px] ${
                index % 2 === 0
                  ? ' lg:ml-auto lg:pl-[94px] lg:pr-[42px] '
                  : 'order-2 lg:order-1 px-[42px] max-w-[584px] mr-auto'
              } max-lg:order-2 `}
            >
              <h4 className='text-base leading-[17.6px] lg:text-2xl font-medium lg:leading-[26.4px]'>
                {insight.title}
              </h4>
              <p className=' max-w-[584px] text-sm max-lg:text-xs max-lg:leading-[18px]'>
                {insight.description}
              </p>
              <button className='font-medium group text-xs lg:text-base leading-[17px] flex items-center gap-4 mt-[9px] '>
                <span className='group-hover:font-bold'>Read more </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='group-hover:transform group-hover:translate-x-1 max-lg:hidden'
                >
                  <path
                    d='M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z'
                    fill='#1A1A1A'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  className='group-hover:transform group-hover:translate-x-1 lg:hidden'
                >
                  <path
                    d='M5 4.175L8.7085 8L5 11.825L6.1417 13L11 8L6.1417 3L5 4.175Z'
                    fill='#1A1A1A'
                  />
                </svg>
              </button>
            </div>
            <div className='max-lg:order-1'>
              <Image
                src={insight.img}
                width={1600}
                height={800}
                alt={insight.title}
                className='w-full aspect-auto object-cover object-center h-[63px] lg:h-[282px]'
              />
              <div className='lg:hidden absolute px-14 py-5 inset-0 text-white'>
                {insight.category}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
