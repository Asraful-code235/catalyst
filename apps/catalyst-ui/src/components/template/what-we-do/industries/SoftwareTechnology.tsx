import {
  AboutSectionProps,
  ListItemSectionProps,
  PageTitleProps,
  WhatCanYouExpectProps,
  WhyChoseUsSectionProps,
} from '@/types/what-we-do';
import {
  IndustriesSoftwareIndustriesTitle,
  NavigatingRapidlyChangingMarkets,
  softwareAndtec,
} from '@repo/ui/assets/icons/index';
import Container from '@repo/ui/components/molecules/Container';
import AboutSection from '../../../molecules/What-we-do/industries/AboutSection';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';
import ListItemSection from '../../../molecules/What-we-do/industries/ListItemSection';
import PageTitle from '../../../molecules/What-we-do/industries/PageTitle';
import WhatYouCanExpect from '../../../molecules/What-we-do/industries/WhatCanYouExpect';
import WhyChoseUs from '../../../molecules/What-we-do/industries/WhyChoseUs';

const PageData: PageTitleProps = {
  title: 'Software & Technology',
  category: 'Industries',
  backgroundImage: IndustriesSoftwareIndustriesTitle,
};

const AboutSectionData: AboutSectionProps = {
  title: 'Empowering Innovation in Software & Technology',
  description:
    'In the fast-paced realm of software and technology, innovation is the currency of success. At Catalyst Venture Studio, we specialize in empowering companies to navigate this ever-evolving landscape, harnessing the power of digital solutions to drive growth, enhance efficiency, and deliver unparalleled value to their customers.',
};

const WhyChoseUsSectionData: WhyChoseUsSectionProps = {
  title: 'Navigating Rapidly Changing Markets',
  description:
    'The software and technology sector is at the forefront of the digital revolution, shaping the way people live, work, and interact with the world around them. However, with innovation comes disruption, and companies must continually adapt to stay ahead of the curve. Our comprehensive approach to technology industry consulting is designed to help leaders navigate rapidly changing markets, promote innovation, capture new opportunities, and create sustainable value for their organizations.',
  image: NavigatingRapidlyChangingMarkets,
};

const ListItemSectionData: ListItemSectionProps = {
  title: 'Our Services',
  description:
    'At Catalyst Venture Studio, we offer a wide range of software development services tailored to meet the unique needs of technology companies:',
  items: [
    {
      title: 'Software Development Consulting',
      description:
        "Our team of experts dives deep into your organization's unique requirements, providing expert insights and guidance to kickstart your software development project on the right path.",
    },
    {
      title: 'Custom Software Development',
      description:
        'We specialize in creating perfect, scalable, and one-of-a-kind solutions that align perfectly with your unique business vision and company culture.',
    },
    {
      title: 'Software Product Development',
      description:
        'From prototyping to deployment and support, we provide end-to-end solutions to bring your product vision to life and ensure a seamless user experience.',
    },
    {
      title: 'Software Enhancement',
      description:
        'We optimize your solutions with advanced technologies like AI, AR/VR, blockchain, and IoT to stay competitive in the market and meet evolving customer needs.',
    },
    {
      title: 'Software Integration Services',
      description:
        'Our experts handle API development and integration of third-party services to streamline your operations and maximize ROI.',
    },
    {
      title: 'Software Modernization',
      description:
        "We guarantee effective updates and architectural improvements to your existing solutions, ensuring they remain relevant and competitive in today's fast-paced digital landscape.",
    },
    {
      title: 'Cloud Computing',
      description:
        'Leveraging the capabilities of industry-leading cloud platforms, we provide seamless, secure, and native cloud solutions to enhance your software development practices.',
    },
  ],
};

const WhatCanYouExpectSectionData: WhatCanYouExpectProps = {
  list: [
    {
      title: 'Our Approach to Technology Industry Consulting',
      description: [
        {
          text: 'At Catalyst Venture Studio, we go beyond traditional consulting to help technology leaders go further and faster. Our approach recognizes the unique challenges and opportunities in each sector of the technology industry, from IT services to consumer tech, and provides tailored solutions to drive growth and innovation.',
        },
      ],
    },
  ],
  image: softwareAndtec,
};

export function SoftwareTechnology() {
  return (
    <section className='flex flex-col'>
      <PageTitle data={PageData} />
      <Container className='flex flex-col gap-8 lg:gap-[64px]'>
        <AboutSection data={AboutSectionData} />
        <WhyChoseUs data={WhyChoseUsSectionData} />
        <ListItemSection data={ListItemSectionData} />
        <WhatYouCanExpect data={WhatCanYouExpectSectionData} />
        <ContactSection
          title='Connect with our Software & Technology Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
