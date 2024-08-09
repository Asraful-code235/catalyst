import AboutPageTitle from '@/components/organisms/about/AboutPageTitle';
import WhatDrivesUs from '@/components/organisms/about/who-we-are/MoreAboutUs';
import MoreAboutUs from '@/components/organisms/about/who-we-are/WhatDrivesUs';
import WhatMakesUsUnique from '@/components/organisms/about/who-we-are/WhatMakesUsUnique';
import WhoWeAreSection from '@/components/organisms/about/who-we-are/WoWeAreSection';

export function WhoWeAre() {
  return (
    <section className='lg:pt-[94px] flex flex-col gap-8 lg:gap-[64px]'>
      <section className='max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[64px] p-8 lg:py-0 lg:px-[94px]'>
        <AboutPageTitle title={'About Us'} />
        <WhoWeAreSection />
        <WhatDrivesUs />
      </section>
      <WhatMakesUsUnique />
      <MoreAboutUs />
    </section>
  );
}
