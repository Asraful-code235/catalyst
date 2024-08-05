import { Module } from 'utils';

export default function TwoGridSection({ data }: Module) {
  if (!data) return null;
  return (
    <section className='max-w-[1440px] mx-auto px-8 lg:px-[94px] py-8 lg:py-[64px]'>
      <div className='flex flex-col gap-[42px]'>
        {data?.sections?.map((item: Module, key: number) => (
          <div key={key} className='flex flex-col gap-8 lg:gap-[42px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
              <h2 className='header lg:text-40px]'>{item.title}</h2>

              <div className='flex flex-col gap-4 lg:gap-6 paragraph text-start '>
                {item?.descriptions?.map((description: Module, key: number) => (
                  <div key={key} className='flex flex-col gap-4 lg:gap-6'>
                    <p>{description.description}</p>

                    {description?.items?.length > 0 && (
                      <ul className='flex flex-col list-disc'>
                        {description?.items?.map(
                          (child: Module, key: number) => (
                            <li className='ml-4' key={key}>
                              {child.item}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1252'
              height='2'
              viewBox='0 0 1252 2'
              fill='none'
              className='w-full mx-auto'
            >
              <path
                opacity='0.4'
                d='M1252 1L0 1'
                stroke='#1A1A1A'
                stroke-width='0.5'
              />
            </svg>
          </div>
        ))}
      </div>
      <p className='paragraph font-medium  text-left mt-8 lg:mt-[94px]'>
        These are complex questions, especially given the unfamiliarity of the
        technology for many business and public-sector leaders. Catalyst not
        only helps organizations answer these questions but supports them
        through the entire journey with a unique and proven four-step process:
      </p>
    </section>
  );
}
