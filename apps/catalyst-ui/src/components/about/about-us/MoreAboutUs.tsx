export default function MoreAboutUs() {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 max-md:-mt-8 '>
      <div className='flex flex-col gap-6 md:gap-8 p-8 md:py-[149px] md:px-16 bg-primary'>
        <div className='flex flex-col gap-6 md:gap-8 md:max-w-[506px] md:ml-auto'>
          <p className='text-left md:text-right text-xs md:text-2xl leading-[150%]'>
            &quot;Here at Catalyst, we believe in a future where innovation
            isn&apos;t just a goal but a pathway to transformative change. By
            investing in visionary founders and companies worldwide, we&apos;re
            not only shaping industries but redefining what&apos;s possible for
            generations to come.&quot;
          </p>
          <span className='text-left md:text-right text-xs md:text-base font-bold'>
            CTO, Oliver Darby
          </span>
        </div>
      </div>
      <div className='paragraph text-left md:text-base md:leading-[150%] p-8 md:px-16 flex items-center'>
        At Catalyst Venture Studio, we envision a future where passionate
        founders and entrepreneurs from around the globe come together to shape
        a better tomorrow. We are dedicated to investing in individuals who not
        only have the drive to innovate but also the vision to disrupt
        industries and create lasting impact. Drawing upon our wealth of
        experience and global network of partners, we empower founders and
        entrepreneurs to turn their bold ideas into successful ventures.
      </div>
    </section>
  );
}
