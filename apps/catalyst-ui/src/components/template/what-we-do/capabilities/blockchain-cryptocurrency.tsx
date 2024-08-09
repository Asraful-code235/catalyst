import {
  AboutSectionProps,
  PageTitleProps,
  QnaItem,
  TwoGridSectionData,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import TwoGridQnaList from '@/components/organisms/what-we-do/TwoGridQnaList';
import TwoGridSection from '@/components/organisms/what-we-do/TwoGridSection';
import Text from '@repo/ui/components/atoms/Text';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Blockchain',
  description: 'Capabilities - Technology',
};

const AboutSectionData: AboutSectionProps = {
  title: 'Blockchain Services',
  description:
    'Blockchain creates trust and transparency regarding data and can be used in a variety of compelling applications. Catalyst experts help organizations identify—and seize—the potential of blockchain technology.',
};

const understandingBlockChainData: TwoGridSectionData = {
  title: 'Understanding Blockchain',
  descriptions: [
    {
      description:
        'Blockchain is a potent and versatile emerging technology that is just beginning to live up to its potential. Best known for its use in cryptocurrency, blockchain—a distributed database that fosters trust and lowers transaction costs—has the potential to transform organizational operations. Currently, blockchain is used in various business and public-sector applications, such as tracking items in supply chains, automating customs clearances, and facilitating financial transactions, with many more applications awaiting development.',
      extraDescription:
        'The challenge for organizations is threefold: understanding the technology, determining how blockchain can create value, and developing an approach to capture value early on, funding the journey.',
    },
  ],
};

const OurApproach: TwoGridSectionData = {
  title: 'Our Approach to Blockchain',
  descriptions: [
    {
      description:
        'By removing intermediaries, automating processes, and creating trust and transparency with shared data, blockchain unlocks value. Capturing that value requires business model innovation, operational efficiency, risk management, and social impact. Before organizations can seize these opportunities, they need to answer several key questions:',
      items: [
        {
          item: 'Should we create our own blockchain solution or work with existing solutions or players?',
        },
        {
          item: 'If we build our own solution, will it require an ecosystem of other participants to succeed? If so, how do we ensure that enough value is shared to make the journey self-funding for everyone?',
        },
        {
          item: 'How do we build and launch our solution? Specifically: What technology stack is needed? What features are critical to creating scale? How do we go to market?',
        },
      ],
    },
  ],
};

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: 'Blockchain Workshop',
    description:
      'We typically start our blockchain consulting efforts with an educational workshop, bringing together senior leaders and industry experts. Participants learn what blockchain technology is and—through relevant case studies—where it is useful. Together, we start to identify industry opportunities and considerations relevant to your business.',
  },
  {
    id: '2.',
    title: 'Innovation Sprints',
    description:
      'Participants take a closer look at the most promising opportunities and the best ways to engage in a blockchain strategy. We help organizations identify, prioritize, and evaluate potential use cases based on business value, risk, and difficulty. We also evaluate different approaches to execution: building in-house, leveraging third-party solutions, and joining existing consortia. Strategy teams and business unit leaders work together to develop an economic model and an implementation plan for each major use case.',
  },
  {
    id: '3.',
    title: 'Development of a Blockchain Proof of Concept',
    description:
      'The third phase tests and demonstrates the feasibility of a blockchain-based approach. We help organizations identify and evaluate the implementation platform and architecture best suited to the chosen use case(s). Business unit leaders develop a blockchain concept that is tested for its market fit, likely customer acceptance, and competitive viability. Teams engage in rapid iterations—combining early customer testing with market research—to build solutions and pilot them quickly.',
  },
  {
    id: '4.',
    title: 'Blockchain Commercialization',
    description:
      'We work with business unit leaders to develop a blockchain solution, a detailed execution and ecosystem development strategy, and a rollout implementation plan and timeline. Our solution, though comprehensive, is an MVP—minimum viable product—version intended for rapid deployment, testing, and adjustment. We also align the solution with the organization’s overall innovation strategy, provide robust go-to-market capabilities, and assist with customer onboarding and pricing.',
  },
];

export function BlockchainCryptocurrency() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <AboutSection data={AboutSectionData} />
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-8 lg:gap-[42px]'>
          <TwoGridSection data={understandingBlockChainData} />
          <Separator />
          <TwoGridSection data={OurApproach} />
          <Separator />
        </div>
        <Text className='lg:mt-[30px] font-medium'>
          These are complex questions, especially given the unfamiliarity of the
          technology for many business and public-sector leaders. Catalyst not
          only helps organizations answer these questions but supports them
          through the entire journey with a unique and proven four-step process:
        </Text>
        <TwoGridQnaList lists={qnaData} />
        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
