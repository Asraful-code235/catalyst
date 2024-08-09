import Separator from '@/components/molecules/seperator/Separator';
import Text from '@repo/ui/components/atoms/Text';

const statisticsItems = [
  { id: 1, number: '100+', name: 'Award-Winning Clients' },
  { id: 2, number: '$500M+', name: 'In Client Acquisitions' },
  { id: 3, number: '32', name: 'Month Average Engagement' },
  { id: 4, number: '1000+', name: 'Startups Supported' },
  { id: 5, number: '20+', name: 'Years Of Experience' },
  { id: 6, number: '5+', name: 'Companies Under Portfolio' },
  { id: 7, number: '$25M+', name: 'Capital Raised' },
];

export default function Statistics() {
  return (
    <section className='p-8 lg:p-[94px] max-w-[1440px] mx-auto flex flex-col gap-[64px]'>
      <Text type='p' className='font-medium lg:text-2xl'>
        With over two decades of experience, Catalyst Venture Studio specializes
        in consulting for global innovation. We guide visionary founders and
        companies from inception to market disruption. Our expertise helps
        navigate challenges, optimize operations, and drive sustainable growth.
      </Text>
      <section className='flex flex-col'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-x-[32px] xl:gap-x-[70px] gap-y-12 max-lg:divide-y max-lg:divide-gray-200 max-lg:gap-y-6'>
          <Text
            type='p'
            className='col-span-3 font-medium mb-4 w-full lg:text-2xl'
          >
            Key Statistics
          </Text>
          {statisticsItems.map((item) => (
            <div
              key={item.id}
              className=' col-span-3 lg:col-span-1 text-left flex flex-col gap-4 lg:gap-6 max-lg:pt-4 lg:mr-6'
            >
              <Text
                type='p'
                className='text-2xl lg:text-5xl leading-[26.4px] lg:leading-[52.8px] font-bold text-secondary '
              >
                {item.number}
              </Text>
              <Text type='p' className='capitalize'>
                {item.name}
              </Text>
            </div>
          ))}
        </div>
      </section>
      <Separator />
    </section>
  );
}
