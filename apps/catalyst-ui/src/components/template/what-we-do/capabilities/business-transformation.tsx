import {
  CardProps,
  PageTitleProps,
  QnaItem,
  Service,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import CardSection from '@/components/organisms/what-we-do/CardSection';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Business Transformation',
  description: 'Capabilities - Business Strategy ',
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

const ourServices: Service[] = [
  {
    title: 'Software Development Consulting',
    description:
      "We dive deep into your organization's unique requirements, designing every solution to reflect and incorporate your specific business needs. From concept definition to risk assessment and competitor analysis, we explore the entire user journey and build accordingly. Our team also provides expert insights into selecting the most suitable technology stack, offering a detailed assessment of technology pros and cons to kickstart your software development project on the right path.",
  },
  {
    title: 'Software Product Development',
    description:
      'Software product development demands commitment and attention to detail, starting with prototyping and design to product development, testing, deployment, and support. Our dedication extends through the entire lifecycle, ensuring rigorous testing, seamless deployment, and post-launch support. It’s all about creating an exceptional product experience through a comprehensive customized approach.',
  },
  {
    title: 'Custom Software Development',
    description:
      'For us, custom software development is about creating perfect, scalable, and one-of-a-kind solutions. Whether it’s web or mobile software products that align with your unique business vision and company culture, or even cater to your individual needs, we are here to help. When off-the-shelf solutions fall short, our custom software keeps you connected with your customers and addresses any in-house challenges that may arise along your business journey.',
  },
  {
    title: 'Software Enhancement',
    description:
      'To make your software competitive, our development services include fine-tuning your solutions and optimizing them with advanced technologies like AI, AR/VR, blockchain, and IoT. We also refine UI/UX for greater intuitiveness, strengthen security, fix bugs faster, accelerate speed and responsiveness, and ensure compatibility across various operating systems and devices.',
  },
  {
    title: 'Software Integration Services',
    description:
      'We’re experts in API development and integration of third-party services such as CRM, payment systems, ERP, DMS, and EHR. Our work extends beyond these, catering to a wide array of technological needs aligned with your goals, preferences, business needs, tech stack, or industry. From architectural design to post-launch, we tackle all implementation and software integration hurdles, ensuring a smooth transition to updated systems and optimized performance to maximize ROI.',
  },
  {
    title: 'Software Modernization',
    description:
      'We guarantee effective updates to existing solutions and sound architectural improvements. We start with an evaluation of your software, analyzing relevant documents and reviewing code. Our team identifies crucial points for modernization, from code refactoring to cloud migration, crafting the optimal strategy tailored to your needs. We ensure seamless modernization while preserving the core essence of your original software. If you prefer Agile and DevOps methodologies, we are ready to accommodate.',
  },
];

const cooperationModel: Service[] = [
  {
    title: 'Scenario 1: IT Staff Augmentation',
    description:
      'If you have an existing team, our staff augmentation services provide the additional muscle needed to address technical challenges, bridge skill gaps, and advance your projects. This model prioritizes flexibility and rapid deployment, making it ideal for time-sensitive situations. Whether you need niche expertise or additional resources for a sprint, our staff augmentation solutions meet your specific needs.',
  },
  {
    title: 'Scenario 2: Dedicated Development Teams',
    description:
      'Need a team of engineers dedicated to your business for an entire project or a longer engagement? We assemble a team tailored to your specific needs, both in terms of skills and industry knowledge. This option is ideal for ongoing projects where you want to supplement your in-house team with an external unit, eliminating time-consuming and expensive local hiring. It works well when you have on-site engineers but need additional ones for a distinct project segment or wish to streamline management responsibilities.',
  },

  {
    title: 'Scenario 3: CTO as a Service (CTOaaS)',
    description:
      'If you require more involvement in planning and estimation, our CTO as a Service (CTOaaS) provides a seasoned tech leader to assist in product development, communicate technical matters to investors, assess quality, and create technical roadmaps for your project.',
  },
  {
    title: 'Scenario 4: Software Project Outsourcing',
    description:
      'When you have a project in mind and need a trusted outsourcing partner, we can help define the scope of work and manage your digital journey from start to finish. This allows your core team to focus on other critical priorities.',
  },
];

const ourApproach: Service[] = [
  {
    title: 'Quality Control',
    description:
      'Your security and effective risk management are crucial. Our developers are well-versed in SDLC policy, providing penetration testing, regular code reviews, and continuous monitoring of vulnerabilities.',
  },
  {
    title: 'Transparency',
    description:
      'Transparency is at the heart of our approach. We maintain regular communication with stakeholders, ensuring they are informed about project progress. Our reporting provides clear insights into project developments and milestones.',
  },
  {
    title: 'Flexibility',
    description:
      'Reach out, and within 48 hours, we’ll have CVs of top developers who meet your requirements in your inbox. We can kick off an engagement within two weeks or less. Catalyst ensures responsiveness and rapid scaling, flexible project requirements, and contractual changes to meet your needs.',
  },
  {
    title: 'Software Engineering Methodologies',
    description:
      'We leverage Scrum, Kanban, Test-Driven Development (TDD), Behavior-Driven Development (BDD), Domain-Driven Design (DDD), and DevOps methodologies to ensure an efficient software development process aligned with your objectives.',
  },
];

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Performance and Value Acceleration',
    description:
      'Rather than focusing solely on cost efforts, we drive holistic transformations, re-evaluating strategic opportunities, enhancing topline results, and optimizing the balance sheet.',
  },
  {
    id: '2.',
    title: 'Accelerated Cost Transformation',
    description:
      'Our holistic approach efficiently transforms organizations, leading to effective cost optimization, improved performance, and margins, while reinvesting in future growth, stability, and strategy.',
  },
  {
    id: '3.',
    title: 'Business Turnaround and Restructuring',
    description:
      'In times requiring fast and focused action, we help companies swiftly turn around financial decline, optimize debt management and cash flow, and address operational inefficiencies while making strategic choices.',
  },
  {
    id: '4.',
    title: 'Tech-Led Business Transformation',
    description:
      'We guide clients in leveraging the right technology, digital, or AI levers for their situation, complementing existing capabilities to drive efficiencies, innovation, and superior customer experiences.',
  },
];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: 'Partnership',
    description:
      'We operate in full partnership with leadership teams, sharing the agenda, incentives, and risks.',
  },
  {
    id: '2.',
    title: 'Collaboration',
    description:
      'Working closely with client teams ensures full engagement, empowerment, and upskilling.',
  },
  {
    id: '3.',
    title: 'Expertise',
    description:
      'Our dedicated team of experts brings deep experience along both the what and the how of transformation.',
  },
  {
    id: '4.',
    title: 'Methodology',
    description:
      'Our holistic methodology focuses on strategy, cost, top-line, and balance sheet improvements.',
  },
  {
    id: '5.',
    title: 'Utilization',
    description:
      "We leverage the best of Catalyst Venture Studio's industry, sector, and functional expertise to deliver value.",
  },
  {
    id: '4.',
    title: 'Sustainability',
    description:
      'Our approach ensures that improvements stick by mobilizing and enabling organizations and addressing culture.',
  },
];
export function BusinessTransformation() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <div className='flex flex-col gap-8 lg:gap-[64px]'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <Title type='h2' size='medium'>
              Software Development Services
            </Title>
            <Text>
              Transformation is imperative—even for thriving companies. At
              Catalyst Venture Studio, we specialize in helping our clients
              unlock their full potential and expedite performance and value
              creation in a sustainable manner. While many business
              transformations yield short-term results, 75% fail to effect
              long-term, fundamental change. Successful transformations are
              characterized by three pivotal outcomes:
            </Text>
          </div>
          <div className='flex flex-col gap-8 lg:gap-[42px]'>
            <CardSection
              cards={cardsData}
              className='lg:grid-cols-3 xl:grid-cols-3 lg:gap-8'
            />
            <Text className=''>
              Companies achieving these outcomes are three times more likely to
              outperform average short- and long-term total shareholder returns
              for their sector. Notably, the 50 largest transformations
              we&apos;ve undertaken over the past five years have delivered 17%
              higher TSR for those companies compared to relevant stock indices.
            </Text>
            <div className='flex flex-col gap-4'>
              <Title type='h2' size='medium'>
                Our Business Transformation Services
              </Title>
              <Text>
                We collaborate closely with our clients to accelerate
                performance and drive value creation, employing a proven
                methodology tailored for business transformation:
              </Text>
            </div>
          </div>
          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <Title type='h2' size='big'>
          How We Work with Clients
        </Title>
        <div className='flex flex-col gap-6 lg:gap-6'>
          <RowSeparatedListSection
            lists={howWeWork}
            className='lg:gap-[42px]'
            separatorGap='lg:gap-6'
          />
        </div>
        <div className='-mt-2 lg:-mt-[40px]'>
          <ContactSection
            title='Connect with our Consumer Goods & Services Team'
            scheduleLink='/'
          />
        </div>
      </Container>
    </section>
  );
}
