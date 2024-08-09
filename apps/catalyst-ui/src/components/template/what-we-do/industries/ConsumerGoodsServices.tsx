import {
  AboutSectionProps,
  ListItemSectionProps,
  PageTitleProps,
  WhatCanYouExpectProps,
  WhyChoseUsSectionProps,
} from '@/types/what-we-do';
import {
  DrivingDigitalExcellence,
  IndustriesConsumerPageTitle,
  UnlockYourGrowthPotential,
} from '@repo/ui/assets/icons/index';
import Container from '@repo/ui/components/molecules/Container';
import AboutSection from '../../../molecules/What-we-do/industries/AboutSection';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';
import ListItemSection from '../../../molecules/What-we-do/industries/ListItemSection';
import PageTitle from '../../../molecules/What-we-do/industries/PageTitle';
import WhatYouCanExpect from '../../../molecules/What-we-do/industries/WhatCanYouExpect';
import WhyChoseUs from '../../../molecules/What-we-do/industries/WhyChoseUs';

const PageData: PageTitleProps = {
  title: 'Consumer Goods & Services',
  category: 'Industries',
  backgroundImage: IndustriesConsumerPageTitle,
};

const AboutSectionData: AboutSectionProps = {
  title: 'Innovating the Consumer Goods and Services Landscape',
  description:
    'Consumer goods and services are experiencing a seismic shift propelled by digital transformation. At Catalyst Venture Studio, we understand the urgency and significance of this transformation, especially for consumer products brands. Our tailored solutions are designed to navigate this evolving landscape, starting with a deep understanding of your business and culminating in the development of digital capabilities that drive consumer-centric innovation.',
};

const WhyChoseUsSectionData: WhyChoseUsSectionProps = {
  title: 'Driving Digital Excellence',
  description:
    'We kickstart our journey with consumer products companies by collaborating with you to define, test, and prove the value of advanced digital solutions. From data analysis to AI integration, digital supply chain enhancements to innovative marketing strategies, we pave the way for transformative change, ensuring your business remains agile and responsive to shifting consumer demands.',
  image: DrivingDigitalExcellence,
};

const ListItemSectionData: ListItemSectionProps = {
  title: 'Preparing for the Future',
  description:
    "Our approach focuses on helping consumer products companies embrace the future with confidence. Here's how we help you stay ahead:",

  items: [
    {
      title: 'Customer Insights',
      description:
        'Delve into consumer behavior and preferences to guide strategic investments and segmentations.',
    },
    {
      title: 'Digital Marketing',
      description:
        'Elevate your digital marketing efforts with integrated strategies and cutting-edge tools.',
    },
    {
      title: 'Supply Chain Management',
      description:
        'Optimize your value chain by leveraging external partnerships and modernizing internal processes.',
    },
    {
      title: 'Personalization',
      description:
        'Craft tailored experiences that resonate with individual consumers, driving engagement and loyalty.',
    },
    {
      title: 'Pricing and Revenue Management',
      description:
        'Unlock revenue opportunities through strategic pricing optimizations.',
    },
    {
      title: 'Climate Change and Sustainability',
      description:
        'Embrace sustainability as a source of competitive advantage, aligning it with corporate values and shareholder returns.',
    },
  ],
};

const WhatCanYouExpectSectionData: WhatCanYouExpectProps = {
  list: [
    {
      title: 'Unlock Your Growth Potential',
      description: [
        {
          text: "With Catalyst Venture Studio by your side, you can unlock new growth opportunities, drive innovation, and navigate the complexities of the consumer goods and services landscape with confidence. Let's embark on this transformative journey together and redefine the future of consumer-centric innovation.",
        },
      ],
    },
  ],
  image: UnlockYourGrowthPotential,
};

export function ConsumerGoodsServices() {
  return (
    <section className='flex flex-col'>
      <PageTitle data={PageData} />
      <Container className='flex flex-col gap-8 lg:gap-[64px]'>
        <AboutSection data={AboutSectionData} />
        <WhyChoseUs data={WhyChoseUsSectionData} />
        <ListItemSection data={ListItemSectionData} />
        <WhatYouCanExpect data={WhatCanYouExpectSectionData} />
        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
