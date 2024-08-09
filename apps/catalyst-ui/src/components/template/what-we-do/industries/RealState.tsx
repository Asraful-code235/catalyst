import {
  AboutSectionProps,
  PageTitleProps,
  WhatCanYouExpectProps,
} from '@/types/what-we-do';
import {
  CatalystCanHelp,
  IndustriesRealStateSectorTitle,
} from '@repo/ui/assets/icons/index';
import Container from '@repo/ui/components/molecules/Container';
import AboutSection from '../../../molecules/What-we-do/industries/AboutSection';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';
import PageTitle from '../../../molecules/What-we-do/industries/PageTitle';
import WhatYouCanExpect from '../../../molecules/What-we-do/industries/WhatCanYouExpect';

const PageData: PageTitleProps = {
  title: 'Real Estate',
  category: 'Industries',
  backgroundImage: IndustriesRealStateSectorTitle,
};

const AboutSectionData: AboutSectionProps = {
  title: 'Empowering Real Estate Innovation',
  description:
    "Catalyst Venture Studio serves as your strategic partner in driving innovation and growth across the real estate sector. Whether you're involved in commercial or residential real estate, our tailored solutions are designed to unlock new opportunities, build stronger brands, and drive success in today's dynamic market.",
};

const WhatCanYouExpectSectionData: WhatCanYouExpectProps = {
  rtl: true,
  list: [
    {
      title: 'Tailored Solutions for Real Estate Success',
      description: [
        {
          text: "Catalyst Venture Studio serves as your strategic partner in driving innovation and growth across the real estate sector. Whether you're involved in commercial or residential real estate, our tailored solutions are designed to unlock new opportunities, build stronger brands, and drive success in today's dynamic market.",
        },
      ],
    },
    {
      title: 'Driving Success Through Innovation',
      description: [
        {
          text: 'In addition to our strategic services, we leverage cutting-edge technologies to drive innovation and efficiency in both commercial and residential real estate. Whether through custom software solutions, immersive AR & VR experiences, or AI-driven insights, we help you stay ahead of the curve and deliver exceptional value to your clients and investors.',
        },
      ],
    },
    {
      title: 'Unlocking Potential, Driving Success',
      description: [
        {
          text: "Whether you're launching a new commercial development, managing residential properties, or exploring opportunities in both sectors, Catalyst Venture Studio is your trusted partner every step of the way. Let us help you unlock new opportunities, build stronger brands, and drive success in today's competitive real estate landscape, regardless of the segment you operate in.",
        },
      ],
    },
  ],
  image: CatalystCanHelp,
};

export function RealState() {
  return (
    <section className='flex flex-col'>
      <PageTitle data={PageData} />
      <Container className='flex flex-col gap-8 lg:gap-[64px]'>
        <AboutSection data={AboutSectionData} />
        <WhatYouCanExpect data={WhatCanYouExpectSectionData} />
        <ContactSection
          title='Connect with our Software & Technology Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
