import {
  AboutSectionProps,
  PageTitleProps,
  QnaItem,
  Service,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import ExploreCloudService from '@/components/molecules/What-we-do/capabilities/ExploreCloudService';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import PartnerSlider from '@/components/organisms/partners-slider/PartnersSlider';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import ServiceGrid from '@/components/organisms/what-we-do/ServiceGrid';
import {
  aws,
  mercury,
  meta,
  microsoft,
  stripe,
} from '@repo/ui/assets/icons/index';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Cloud Services',
  description: 'Capabilities - Technology',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Your Pathway to Possible',
  description:
    "Cloud is more than a place, a journey, or a technology—it's an opportunity to reimagine everything, transforming how your business operates and continuously innovates. Our cloud services enable organizations to harness the power and agility of the cloud to become AI-driven, leverage IoT data securely, and create supply chain transparency with blockchain.",
};
const ourCloudPartners: AboutSectionProps = {
  title: 'Our Cloud Partners',
  description:
    'Collaborating with leading cloud partners to deliver innovative and secure solutions tailored for your needs.',
};

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Digital Identity Services',
    description: 'Secure and manage digital identities.',
  },
  {
    id: '2.',
    title: 'Managed Control and Compliance',
    description: 'Ensure compliance with regulatory standards.',
  },
  {
    id: '3.',
    title: 'Managed Detection and Response',
    description: 'Proactively detect and respond to threats.',
  },
  {
    id: '4.',
    title: 'Managed Infrastructure and Application Security',
    description: 'Secure cloud infrastructure and applications.',
  },
];
const erpAndSassData: QnaItem[] = [
  {
    id: '1.',
    title: 'Cloud SaaS Solutions',
    description: 'Implement scalable SaaS solutions to meet business needs.',
  },
  {
    id: '2.',
    title: 'Oracle on Cloud',
    description: 'Leverage Oracle cloud solutions for enterprise applications.',
  },
  {
    id: '3.',
    title: 'SAP on Cloud',
    description:
      'Utilize SAP cloud solutions for integrated business processes.',
  },
  {
    id: '4.',
    title: 'Hybrid Cloud',
    description: 'Build your cloud, your way, from on-premises to the edge.',
  },
];

const partners = [
  {
    img: aws,
  },
  {
    img: mercury,
  },
  {
    img: microsoft,
  },
  {
    img: meta,
  },
  {
    img: stripe,
  },
];

const servicesSelectData = [
  {
    title: 'Application Modernization & Migration',
    value: 'application-modernization-and-migration',
  },
];

const ourServices: Service[] = [
  {
    title: 'Global Depth and Presence',
    description:
      'Our extensive global resources support cloud migration and development, offering capabilities such as digital and cloud studios for testing solutions, ensuring confidence in successful cloud transformations.',
  },
  {
    title: 'Ecosystems and Alliances',
    description:
      'We orchestrate business ecosystems of client and technology vendor relationships, combining best-of-breed technology providers with our consulting expertise to help your organization make informed technology choices.',
  },
  {
    title: 'Independent Perspective',
    description:
      'Our objective, independent approach to cloud vendor selection ensures the best fit for your business challenges.',
  },
  {
    title: 'Custom Delivery',
    description:
      'We offer customized delivery and terms through our Public Cloud Provider practices, helping you plan, implement, and scale your cloud transformations cost-effectively.',
  },
  {
    title: 'Comprehensive Cloud Support',
    description:
      'From advising and strategizing to implementing and operating, we support your business throughout its cloud journey and beyond, combining business acumen with integrated technology services for a people-first approach.',
  },
];

export function CloudServices() {
  return (
    <section className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <AboutSection data={AboutSectionData} />
        <AboutSection data={ourCloudPartners} />
        <Separator />
      </div>
      <PartnerSlider partners={partners} />
      <div className='max-w-[1440px] mx-auto px-8 lg:px-[94px] flex flex-col gap-8 lg:gap-[54px]'>
        <Separator />
        <ExploreCloudService
          title='Explore Our Cloud Services'
          items={servicesSelectData}
          description='Reimagine, build, and deliver applications designed for cloud success.'
        />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[94px] lg:pb-[64px]'>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-end'>
            <Title
              type='h2'
              size='big'
              className='w-fit tracking-tight lg:max-w-[431px]'
            >
              Cyber & Strategic Risk
            </Title>
            <Title
              size='medium'
              type='h3'
              className='w-full text-left lg:text-right lg:max-w-[437px] '
            >
              Meet evolving cyber threats head-on and proactively manage risk.
            </Title>
          </div>
          <div className='flex flex-col gap-8 lg:gap-4'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center'>
            <Title type='h2' size='big' className='w-fit tracking-tight'>
              ERP & SaaS
            </Title>
            <Title
              size='medium'
              type='h3'
              className='w-full text-left lg:text-right lg:max-w-[467px] '
            >
              Deploy holistic, flexible, and scalable next-gen ERP & SaaS
              solutions.
            </Title>
          </div>
          <div className='flex flex-col gap-8 lg:gap-4'>
            <RowSeparatedListSection
              lists={erpAndSassData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <Title type='h2' size='big'>
            Why Choose Us for Cloud Services?
          </Title>
          <ServiceGrid services={ourServices} rtl={true} />
        </div>

        <Title type='h3' size='medium' className='lg:mt-[14px] font-medium'>
          We are dedicated to helping organizations discover and activate their
          potential with cloud, enabling enterprise transformation through
          innovative applications of cloud technology. With our full spectrum of
          capabilities, we support your business at every step of the cloud
          journey, delivering better outcomes and new value for our clients.
        </Title>
        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
