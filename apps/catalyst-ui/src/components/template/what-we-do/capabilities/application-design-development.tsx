import {
  AboutSectionProps,
  CardProps,
  PageTitleProps,
  Service,
  Technology,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import CardSection from '@/components/organisms/what-we-do/CardSection';
import List from '@/components/organisms/what-we-do/List';
import ServiceGrid from '@/components/organisms/what-we-do/ServiceGrid';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Application Design & Development',
  description: 'Capabilities - Technology',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Web App Development Services',
  description:
    "Forget conventional solutions. Catalyst developers possess a sophisticated and nuanced understanding of how a top-tier web application can revolutionize your business's operations, profitability, and scalability.",
};

const ServicesSectionData: Service[] = [
  {
    title: 'UI/UX Design',
    description:
      'Our dedicated UI/UX professionals create visually compelling web app experiences that are streamlined and engaging, ensuring they attract and retain users.',
  },
  {
    title: 'Integration Services',
    description:
      'We build and implement a range of customized, business-critical integrations that enhance your web app’s functionality and respond to evolving customer demands.',
  },
  {
    title: 'Frontend Development',
    description:
      'Working in tandem with UI/UX teams, our developers utilize both mainstream and specialized technologies to ensure your app’s frontend is intuitive, seamless, and reflective of your brand.',
  },
  {
    title: 'QA and Testing',
    description:
      'Robust testing is integrated across every stage of the development cycle, ensuring your app performs optimally at any given moment.',
  },
  {
    title: 'Backend Development',
    description:
      'Whether your web app is on-premise, cloud-based, or serverless, our senior-level developers build secure and scalable backend solutions that deliver powerful data processing.',
  },
  {
    title: 'Modernization and Refinement',
    description:
      'Our team can upgrade your legacy application to make it more efficient and resilient, freeing up valuable resources for other revenue-generating activities.',
  },
];
const Solutions: Service[] = [
  {
    title: 'Prototypical Single-Page Applications',
    description:
      'We develop single-page applications that offer a smooth, dynamic user experience with robust backend support.',
  },
  {
    title: 'Web Content Management',
    description:
      'We build advanced content management systems that facilitate web content creation, SEO optimization, and streamline lead generation activities.',
  },
  {
    title: 'Cloud-Based Designs',
    description:
      'Our cloud-based web applications are designed for scalability, security, and performance, maximizing your cloud investment.',
  },
  {
    title: 'Friction-Free Ecommerce Platforms',
    description:
      'Our ecommerce solutions include online stores, marketplaces, digital auctions, and trade portals that ensure a consistent and integrated customer journey.',
  },
];
const WebProtals: Service[] = [
  {
    title: 'XaaS',
    description:
      'Catalyst helps you maximize your cloud investment by delivering XaaS solutions that enhance performance and security while decreasing operating costs.',
  },
  {
    title: 'CMS',
    description:
      'Our specialized content management systems not only facilitate web content creation and SEO optimization but also streamline lead generation activities and workflows.',
  },
  {
    title: 'Ecommerce Development',
    description:
      'We create online stores, marketplaces, digital auctions, trade portals, and m-commerce apps that make the customer journey integrated and consistent.',
  },
  {
    title: 'Websites',
    description:
      'From single-page applications to complex enterprise networks, we create custom websites quickly and reliably — exactly the way you envision them.',
  },
];

export const cardsData: CardProps[] = [
  {
    number: '01',
    title: 'Gathering Requirements',
    description:
      'We start with a thorough understanding of your needs to lay a solid foundation for your project.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our designers create engaging and user-friendly interfaces that enhance the user experience.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Our developers bring your vision to life, utilizing cutting-edge technologies and best practices.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'An array of tests ensures that your solution is stable and secure. We generally use real devices rather than emulators to gather and analyze feedback from test users.',
  },
  {
    number: '05',
    title: 'Support and Maintenance',
    description:
      'We provide ongoing support and maintenance to ensure your web application continues to perform at its best.',
  },
];

const Languages: Technology[] = [
  {
    title: '.NET',
  },
  {
    title: 'PHP',
  },
  {
    title: 'Java',
  },
  {
    title: 'Golang',
  },
  {
    title: 'Node.js',
  },
  {
    title: 'Python',
  },
  {
    title: 'Elixir',
  },
  {
    title: 'Scala',
  },
];
const frameworks: Technology[] = [
  { title: 'Django' },
  {
    title: 'MeteorJS',
  },
  {
    title: 'Ruby on Rails',
  },
  {
    title: 'Spring',
  },
  {
    title: 'ExpressJS',
  },
  {
    title: 'Symfony',
  },
];
const databases: Technology[] = [
  {
    title: 'MySQL',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'MS SQL',
  },
  {
    title: 'PostgreSQL',
  },
  {
    title: 'Oracle',
  },
];

export function ApplicationDesignAndDevelopment() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <AboutSection data={AboutSectionData} />
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <ServiceGrid services={ServicesSectionData} />
        <Separator />
        <div className='flex flex-col gap-[42px] lg:gap-16'>
          <Title
            type='h2'
            size='big'
            className='w-full lg:max-w-[750px] tracking-tight'
          >
            A Full Stack of Web Development Solutions
          </Title>
          <ServiceGrid services={Solutions} />
        </div>
        <div className='flex flex-col gap-6 lg:gap-16'>
          <div className='flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center'>
            <Title type='h2' size='big' className='w-fit tracking-tight'>
              Web Portals
            </Title>
            <Text type='p' className='w-full lg:max-w-[760px] '>
              We build fully-fledged web portals tailored to your target
              audience and intended functionality, embedded in your current
              ecosystem and connected with third-party solutions.
            </Text>
          </div>
          <ServiceGrid services={WebProtals} rtl={true} />
        </div>
        <Separator />
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <Title size='medium' type='h2'>
              How We Work and What You Get
            </Title>
            <Text>
              Our partnerships with clients are guided by two principles:
              excellence and transparency.
            </Text>
          </div>
          <CardSection cards={cardsData} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[42px] lg:divide-x-2 divide-gray-200 '>
          <div className='flex flex-col gap-6'>
            <Title type='h2' size='medium'>
              Score the Maximum Value from the Top Tech Platforms
            </Title>
            <Text>
              We harness the most promising web technologies and tech stacks to
              give you a competitive advantage.
            </Text>
          </div>
          <div className='lg:hidden'>
            <Separator />
          </div>
          <div className='flex flex-wrap max-[500px]:justify-between gap-[42px] lg:gap-[64px] lg:pl-[42px]'>
            <List title='Languages' technologies={Languages} />
            <List title='Frameworks' technologies={frameworks} />
            <List title='Databases' technologies={databases} />
          </div>
        </div>

        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
