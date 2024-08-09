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
  title: 'Software Development',
  description: 'Capabilities - Technology',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Software Development Services',
  description:
    'Catalyst is more than just a provider of software development services; our engineers become an integral part of your business for as long as you need them. The software engineering expertise we provide is synonymous with security, exceptional performance, user-centricity, and scalability. Our mission is to transform your innovative ideas into tangible business value.',
};

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
    title: 'Discovery and Analysis',
    description:
      'Our team collaborates closely with you to define the core concept of your software. This collaborative effort results in a clear, comprehensive project vision with prioritized requirements.',
  },
  {
    id: '2.',
    title: 'UX/UI Design',
    description:
      'Our design experts specialize in crafting engaging user interfaces for your web or mobile applications. Beyond mere functionality, we focus on creating human-computer interactions that are enjoyable and compelling for users.',
  },
  {
    id: '3.',
    title: 'Development',
    description:
      'With a deep understanding of project architecture, our developers immerse themselves in your software development process. Embracing Agile methodologies, we adapt to evolving needs and continuously optimize our code for maximum efficiency. Our team utilizes cutting-edge methodologies, prioritizing both the security and performance of your application. We adhere strictly to industry standards in coding and ensure seamless scalability for your project.',
  },
  {
    id: '4.',
    title: 'Feedback and Testing',
    description:
      'Concurrent with development, our quality assurance experts rigorously test your software to ensure robustness and security. This meticulous process results in a bug-free, secure, and high-quality product ready for launch. We actively seek and incorporate your feedback to ensure all requirements are met.',
  },
  {
    id: '5.',
    title: 'Release',
    description:
      'As we prepare your project for deployment, our expertise in methodologies like Scrum and DevOps ensures a smooth transition from development to production.',
  },
  {
    id: '6.',
    title: 'Refinement',
    description:
      'Our commitment to ongoing collaboration means we stand ready to continuously optimize your software. This ensures it maintains its bug-free, secure, efficient, and powerful performance over time.',
  },
];
export function WebDesignDevelopment() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <div className='flex flex-col gap-8 lg:gap-[64px]'>
          <AboutSection data={AboutSectionData} />
        </div>
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <Title type='h2' size='big'>
          Services We Provide
        </Title>
        <ServiceGrid services={ourServices} />
        <Separator />
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center'>
            <Title type='h2' size='big' className='w-fit tracking-tight'>
              Any Platform, Any Device
            </Title>
            <Text type='p' className='w-full text-left  '>
              With rich experience in wearables, various devices, and sensor
              technologies, we build solutions that operate seamlessly across
              various platforms, ensuring compatibility with desktops, laptops,
              tablets, and smartphones. We fine-tune your software to function
              flawlessly on popular operating systems like Windows, macOS, iOS,
              and Android. Additionally, our commitment to cross-browser
              compatibility ensures your users can access your software through
              preferred web browsers like Chrome, Firefox, Safari, and Edge.
            </Text>
          </div>
          <Separator />
          <Title type='h2' size='big'>
            Choose Your Cooperation Model
          </Title>
          <ServiceGrid
            services={cooperationModel}
            rtl={true}
            className={'lg:gap-[42px]'}
          />
          <Separator />
          <Title type='h2' size='big'>
            Our Approach
          </Title>
          <ServiceGrid services={ourApproach} />
          <Separator />
        </div>
        <div className='flex flex-col gap-8 lg:gap-[106px]'>
          <div className='flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center'>
            <Title type='h2' size='big' className='w-fit leading-normal'>
              How We Work
            </Title>
            <Text type='p' className='w-full text-left lg:max-w-[720px]'>
              From initial concept to execution, we meticulously test and
              iterate at each phase of our software development process to
              deliver precisely what you need at the pace you need it.
            </Text>
          </div>

          <div className='flex flex-col gap-8 lg:gap-[42px]'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-[42px]'
            />
            <Separator />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center max-lg:my-[32px]'>
          <Title type='h2' size='big' className='w-fit tracking-tight'>
            Security and Regulatory Compliance
          </Title>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <Text type='p' className='w-full text-left lg:max-w-[720px]'>
              When you entrust us with your project, you partner with a team
              knowledgeable in domain-specific regulations and compliance
              standards. This expertise not only underpins the transformative
              potential of your solution but also enhances its security.
            </Text>
            <Text>
              Catalyst is committed to delivering high-quality, innovative
              software solutions tailored to your unique business needs and
              driving your success.
            </Text>
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
