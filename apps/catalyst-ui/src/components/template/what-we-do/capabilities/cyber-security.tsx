import {
  AboutSectionProps,
  PageTitleProps,
  QnaItem,
  Service,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import ServiceGrid from '@/components/organisms/what-we-do/ServiceGrid';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Cyber Security',
  description: 'Capabilities - Technology',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Cybersecurity Services',
  description:
    'Catalyst provides cybersecurity consulting services to help organizations manage and protect against cyberattacks. A well-protected business has the potential to be confident and the most innovative. The smartest businesses don’t just manage cyber risk; they use it as a source of growth and market edge. While technology makes many things possible, possible doesn’t always mean safe. As cyber threats grow in volume and sophistication and technology becomes essential for meeting the needs of your customers, employees, suppliers, and society, your cybersecurity must build resilience and trust.',
};

const ourServices: Service[] = [
  {
    title: 'Strategy and Governance',
    description:
      'Turn risk into a competitive advantage by aligning your cybersecurity strategy with your business goals. We help develop policies and frameworks that integrate security into your organizational culture and governance structures.',
  },
  {
    title: 'Security Transformation',
    description:
      'Accelerate your cybersecurity initiatives in an agile world. We assist in designing and implementing security transformations that support your business’s rapid evolution and technological advancements.',
  },
  {
    title: 'Cyber Defense',
    description:
      'Confidently seize opportunities while protecting your digital assets. We build robust defense mechanisms that detect, prevent, and respond to cyber threats, ensuring your business operations are secure and resilient.',
  },
  {
    title: 'Cyber Response',
    description:
      'Operate with confidence in a digital world by preparing for and responding to cyber incidents. Our response strategies and protocols help minimize damage, recover swiftly, and maintain business continuity.',
  },
  {
    title: 'Privacy, Regulatory, and Information Management (PRIM)',
    description:
      'Providing end-to-end privacy solutions and advisory services to help you navigate complex regulatory environments and manage sensitive information responsibly.',
  },
];

const innovativeApproach: Service[] = [
  {
    title: 'Managed Services',
    description:
      'Free up your teams for strategic initiatives by accessing dedicated resources and technology for day-to-day security operations.',
  },
  {
    title: 'Digital Products and Services',
    description:
      'Leverage deep technical experience through subscription-based services, supported by technology-based delivery capabilities.',
  },

  {
    title: 'Catalyst Powered Enterprise | Cyber',
    description:
      'Accelerate the delivery of security transformation programs such as identity and access management and security operations through preconfigured cloud technologies, processes, and organizational designs tailored to your unique business.',
  },
  {
    title: 'Industrial Internet of Things (IIoT)',
    description:
      'Safely embrace the integration of IT and Operational Technology (OT) with our expertise, turning industrial cybersecurity into a business enabler.',
  },
];

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Managed Detection and Response (MDR) as a Service',
    description:
      'Safeguarding organizations against attacks requires innovative thinking. Simplify your threat protection with our MDR services, which offer continuous monitoring, advanced threat detection, and rapid response to security incidents.',
  },
  {
    id: '2.',
    title: 'Strategic Alliances',
    description:
      'Our strategic alliances equip your organization with the right technology solutions to address your toughest business challenges. Whether entering a new market, launching products and services, or interacting with customers in new ways, Catalyst helps you anticipate tomorrow, move faster, and gain a competitive edge with secure and trusted technology.',
  },
  {
    id: '3.',
    title: 'Creating a Trusted Digital World Together',
    description:
      'Catalyst combines technological experience, deep business knowledge, and creative professionals passionate about protecting and building your business. By partnering with us, you can confidently navigate the digital landscape and unlock new growth opportunities while ensuring robust cybersecurity measures are in place.',
  },
];
export function CyberSecurity() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <div className='flex flex-col gap-8 lg:gap-[64px]'>
          <AboutSection data={AboutSectionData} />
          <AboutSection
            data={{
              title: 'Catalyst Cybersecurity Services',
              description:
                'Catalyst helps you create a resilient and trusted digital world, even in the face of evolving threats. Our approach combines technological expertise, deep business knowledge, and creative professionals passionate about protecting and building your business. Together, let’s create a trusted digital world so you can push the limits of what’s possible.',
            }}
          />
        </div>
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <Title type='h2' size='big'>
          Our Services
        </Title>
        <ServiceGrid services={ourServices} rtl={true} />
        <Separator />
        <div className='flex flex-col gap-6 lg:gap-16'>
          <div className='flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center'>
            <Title type='h2' size='big' className='w-fit tracking-tight'>
              Innovative Approach
            </Title>
            <Text type='p' className='w-full text-left lg:text-right'>
              As a leading provider and implementer of cybersecurity solutions,
              Catalyst applies industry-leading security practices and develops
              new ones fit for your specific purposes. Our innovative approach
              includes various delivery methods, ensuring you work with
              extraordinary professionals who understand your business and
              technology needs.
            </Text>
          </div>
          <ServiceGrid services={innovativeApproach} />
        </div>
        <Separator />
        <RowSeparatedListSection lists={qnaData} />
        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
