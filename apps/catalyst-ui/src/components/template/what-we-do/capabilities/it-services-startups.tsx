import {
  AboutSectionProps,
  CardProps,
  PageTitleProps,
  QnaItem,
  Service,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import AccordionList from '@/components/organisms/accordion';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import ServiceGrid from '@/components/organisms/what-we-do/ServiceGrid';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'IT Services for Startups',
  description: 'Capabilities - Operations Management ',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Our IT Services for Startups',
  description:
    'Navigating the dynamic landscape of startups requires agility, expertise, and a reliable partner who can adapt alongside your evolving needs. At Catalyst Venture Studio, we offer precisely that kind of partnership—providing startups with comprehensive IT services designed to empower growth and innovation at every stage of their journey.',
};

export const cardsData: CardProps[] = [
  {
    number: '01',
    title: 'Sustainable Value Creation',
    description:
      'We prioritize sustained gains post-transformation, emphasizing continuous value delivery.',
  },
  {
    number: '02',
    title: 'Step Changes in Capabilities',
    description:
      'Our goal is to equip organizations with the necessary capabilities to implement changes and drive continuous improvement effectively.',
  },
  {
    number: '03',
    title: 'Sustained Culture Shift',
    description:
      'We foster a culture that ensures alignment and engagement in new ways of working, facilitating long-term success.',
  },
];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: '01. Startup Coaching and Mentoring',
    description:
      'Our seasoned startup coaches provide personalized guidance and mentorship to founders, helping them navigate the complexities of entrepreneurship. From refining business models to honing pitch decks, we offer strategic insights and actionable advice to set startups on the path to success.',
  },
  {
    id: '2.',
    title: '02. Venture Capital Funding Coaching',
    description:
      '   Securing venture capital funding is a pivotal milestone for startups, and our VC funding coaching equips founders with the knowledge and tools to navigate the fundraising process effectively. From crafting compelling investment pitches to negotiating term sheets, we provide invaluable support at every stage of the funding journey.',
  },
  {
    id: '3.',
    title: '03. Business Model Validation',
    description:
      '   Validating your business model is essential for startup success, and our advisory services include rigorous analysis and testing to ensure your concept is viable and scalable. By conducting market research, analyzing industry trends, and gathering customer feedback, we help startups refine their business models for maximum impact.',
  },
  {
    id: '4.',
    title: '04. Go-to-Market Strategy Development',
    description:
      '   Launching a product or service requires a well-defined go-to-market strategy, and our experts work closely with startups to develop tailored plans for market entry and growth. From identifying target audiences to crafting messaging and distribution channels, we help startups execute successful go-to-market strategies that drive adoption and revenue.',
  },
  {
    id: '5.',
    title: '05. Product Development and Roadmapping',
    description:
      '   Building a successful product starts with a clear roadmap and strategy, and our advisory services include comprehensive support for product development and planning. From defining product requirements to prioritizing features and milestones, we help startups develop roadmaps that align with their vision and market needs.',
  },
];

const ServicesSectionData: Service[] = [
  {
    title: '01. Discovery Phase',
    description:
      "We begin by conducting a thorough assessment of your startup's goals, challenges, and market opportunities.",
  },
  {
    title: '03. Execution and Implementation',
    description:
      'With a clear roadmap in place, we support you in executing your strategy, providing guidance, resources, and expertise every step of the way.',
  },
  {
    title: '02. Strategy Development',
    description:
      'Based on our findings, we collaborate with you to develop a customized strategy that aligns with your vision and objectives.',
  },
  {
    title: '04. Iterative Optimization',
    description:
      'We continuously monitor and evaluate your progress, making adjustments and optimizations as needed to ensure maximum effectiveness and impact.',
  },
];

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Holistic Approach',
    description:
      'Our startup advisory services are designed to address all aspects of your business, from strategy and funding to product development and growth.',
  },
  {
    id: '2.',
    title: 'Industry Expertise',
    description:
      'With years of experience in the startup ecosystem, our team brings deep industry knowledge and insights to every engagement.',
  },
  {
    id: '3.',
    title: 'Hands-on Support',
    description:
      'We roll up our sleeves and work alongside you, providing hands-on coaching, mentorship, and support to help you achieve your goals.',
  },
  {
    id: '4.',
    title: 'Proven Results',
    description:
      'Our track record of success speaks for itself, with numerous startups benefiting from our strategic guidance and support.',
  },
];

const items = [
  {
    id: '01.',
    title: 'CTO as a Service',
    description:
      'Hiring in-house technical leadership can be time-consuming, especially when your startup needs quick guidance and direction. Our CTO as a Service offers expert support, from selecting the right tech stack to strategizing your next steps, ensuring your technical roadmap aligns with your business goals.',
  },
  {
    id: '02.',
    title: 'Software Development Services',
    description: 'Our software development...',
  },
  {
    id: '03.',
    title: 'Technology Advisory and Consulting',
    description: 'Our software development...',
  },
  {
    id: '04.',
    title: 'Scaling Mature Startups',
    description: 'Our software development...',
  },
  {
    id: '05.',
    title: ' MVP Development',
    description: 'Our software development...',
  },
];

export function ItServicesStartups() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <AboutSection data={AboutSectionData} />
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-6 lg:gap-16'>
          <Title type='h2' size='medium'>
            Our Startup Advisory Services
          </Title>

          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={howWeWork}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
        <Title type='h2' size='big' className='max-lg:py-2.5'>
          Our Engagement Process
        </Title>
        <ServiceGrid services={ServicesSectionData} />
        <Title type='h2' size='big' className='max-lg:py-2.5'>
          Why Choose Catalyst Venture Studio?
        </Title>
        <div className='flex flex-col gap-8 lg:gap-6'>
          <RowSeparatedListSection
            lists={qnaData}
            className='lg:gap-[42px]'
            separatorGap='lg:gap-6'
          />
          <Separator />
        </div>
        <AccordionList items={items} />
        <Text className='lg:-mt-[22px]'>
          At Catalyst Venture Studio, we understand the unique challenges and
          opportunities startups face, and our IT services are crafted to
          empower your growth journey. With our dedicated support and technical
          expertise, we&apos;re committed to helping startups thrive in
          today&apos;s competitive landscape.
        </Text>

        <ContactSection
          title='Connect with our Start-Up Advisory Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
