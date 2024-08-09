import {
  AboutSectionProps,
  ListItemSectionProps,
  PageTitleProps,
  WhatCanYouExpectProps,
  WhyChoseUsSectionProps,
} from '@/types/what-we-do';
import {
  FrictionlessCustomerExperience,
  IndustriesEcommerceTitle,
  ThePathtoEcommerceSuccess,
} from '@repo/ui/assets/icons/index';
import Container from '@repo/ui/components/molecules/Container';
import AboutSection from '../../../molecules/What-we-do/industries/AboutSection';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';
import ListItemSection from '../../../molecules/What-we-do/industries/ListItemSection';
import PageTitle from '../../../molecules/What-we-do/industries/PageTitle';
import WhatYouCanExpect from '../../../molecules/What-we-do/industries/WhatCanYouExpect';
import WhyChoseUs from '../../../molecules/What-we-do/industries/WhyChoseUs';

const PageData: PageTitleProps = {
  title: 'Ecommerce',
  category: 'Industries',
  backgroundImage: IndustriesEcommerceTitle,
};

const AboutSectionData: AboutSectionProps = {
  title: 'Elevating Ecommerce Solutions with Catalyst Venture Studio',
  description:
    'In the dynamic world of ecommerce, success hinges on innovation, agility, and a seamless customer experience. Catalyst Venture Studio is your partner in navigating this ever-evolving landscape, offering tailored solutions that drive growth, enhance brand loyalty, and deliver exceptional results.',
};

const WhyChoseUsSectionData: WhyChoseUsSectionProps = {
  title: 'The Path to Ecommerce Success',
  description:
    "Whether you're a startup or an established enterprise, our omnichannel solutions are designed to elevate your brand and captivate your audience across various touchpoints. From strategic development to thoughtful design, we craft custom ecommerce software solutions that resonate with your target market, driving engagement and fostering brand loyalty.",
  image: ThePathtoEcommerceSuccess,
};

const ListItemSectionData: ListItemSectionProps = {
  title: 'Tailored Ecommerce Solutions',
  description:
    'At Catalyst Venture Studio, we understand the diverse needs of modern businesses. Our comprehensive suite of ecommerce services includes:',

  items: [
    {
      title: 'Online Stores',
      description:
        'Seamlessly integrate order processing and payment functionalities to create a cohesive and memorable brand experience.',
    },
    {
      title: 'B2B & B2C Marketplaces',
      description:
        'Build digital storefronts tailored to your unique business requirements, ensuring a seamless shopping experience for both buyers and sellers.',
    },
    {
      title: 'Auction Platforms',
      description:
        'Realize your vision of a fully customizable online auction portal, complete with features like lot tracking, mobile bidding, and digital registration.',
    },
    {
      title: 'Ecommerce Aggregators',
      description:
        'Streamline your drop shipping and inventory operations with a custom solution that optimizes sales and enhances data accessibility.',
    },
    {
      title: 'Mobile Commerce',
      description:
        'Tap into the growing trend of mobile commerce with a robust mobile app that integrates seamlessly with your existing operations.',
    },
    {
      title: 'Custom Ecommerce Solutions',
      description:
        "Whether you're launching a new product or enhancing existing features, our team can bring your vision to life with intuitive interfaces and advanced functionalities.",
    },
  ],
};

const WhatCanYouExpectSectionData: WhatCanYouExpectProps = {
  list: [
    {
      title: 'Frictionless Customer Experience',
      description: [
        {
          text: 'Our development process is centered around delivering a seamless conversion experience for your customers. From discovery to project refinement, we leverage best-in-class ecommerce platforms and technologies to ensure optimal performance and scalability.',
        },
      ],
    },
    {
      title: 'Leverage Best-in-Class Ecommerce Platforms',
      description: [
        {
          text: 'Our team of ecommerce development specialists is well-versed in the latest technologies and platforms driving the industry forward. From Shopify to Magento, we leverage best-in-class tools to create cutting-edge solutions that meet your unique business needs.',
        },
      ],
    },
  ],
  image: FrictionlessCustomerExperience,
};

export function Ecommerce() {
  return (
    <section className='flex flex-col'>
      <PageTitle data={PageData} />
      <Container className='flex flex-col gap-8 lg:gap-[64px]'>
        <AboutSection data={AboutSectionData} />
        <WhyChoseUs data={WhyChoseUsSectionData} />
        <ListItemSection data={ListItemSectionData} />
        <WhatYouCanExpect data={WhatCanYouExpectSectionData} />
        <ContactSection
          title='Connect with our Ecommerce Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
