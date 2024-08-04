import {
  aws,
  mercury,
  meta,
  microsoft,
  stripe,
} from "@repo/ui/assets/icons/index";
import { CapabilitiesModules } from "../../types/index.js";
import { externalLinks } from "../links/externalLinks.js";

export const capabilitiesModuleData: CapabilitiesModules = {
  "application-design-development": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Application Design & Development",
        description: "Capabilities - Technology",
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        sections: [
          {
            title: "Web App Development Services",
            description:
              "Forget conventional solutions. Catalyst developers possess a sophisticated and nuanced understanding of how a top-tier web application can revolutionize your business's operations, profitability, and scalability.",
          },
        ],
      },
    },
    {
      _type: "list-item",
      _key: "3",
      data: {
        services: [
          {
            title: "UI/UX Design",
            description:
              "Our dedicated UI/UX professionals create visually compelling web app experiences that are streamlined and engaging, ensuring they attract and retain users.",
          },
          {
            title: "Integration Services",
            description:
              "We build and implement a range of customized, business-critical integrations that enhance your web app’s functionality and respond to evolving customer demands.",
          },
          {
            title: "Frontend Development",
            description:
              "Working in tandem with UI/UX teams, our developers utilize both mainstream and specialized technologies to ensure your app’s frontend is intuitive, seamless, and reflective of your brand.",
          },
          {
            title: "QA and Testing",
            description:
              "Robust testing is integrated across every stage of the development cycle, ensuring your app performs optimally at any given moment.",
          },
          {
            title: "Backend Development",
            description:
              "Whether your web app is on-premise, cloud-based, or serverless, our senior-level developers build secure and scalable backend solutions that deliver powerful data processing.",
          },
          {
            title: "Modernization and Refinement",
            description:
              "Our team can upgrade your legacy application to make it more efficient and resilient, freeing up valuable resources for other revenue-generating activities.",
          },
        ],
      },
    },
    {
      _type: "list-item",
      _key: "4",
      data: {
        showTitle: true,
        rtl: false,
        title: "A Full Stack of Web Development Solutions",
        services: [
          {
            title: "Prototypical Single-Page Applications",
            description:
              "We develop single-page applications that offer a smooth, dynamic user experience with robust backend support.",
          },
          {
            title: "Web Content Management",
            description:
              "We build advanced content management systems that facilitate web content creation, SEO optimization, and streamline lead generation activities.",
          },
          {
            title: "Cloud-Based Designs",
            description:
              "Our cloud-based web applications are designed for scalability, security, and performance, maximizing your cloud investment.",
          },
          {
            title: "QA and Testing",
            description:
              "Robust testing is integrated across every stage of the development cycle, ensuring your app performs optimally at any given moment.",
          },
          {
            title: "Friction-Free Ecommerce Platforms",
            description:
              "Our ecommerce solutions include online stores, marketplaces, digital auctions, and trade portals that ensure a consistent and integrated customer journey.",
          },
        ],
      },
    },
    {
      _type: "list-item",
      _key: "5",
      data: {
        rtl: true,
        showTitle: true,
        title: "Web Portals",
        description:
          "We build fully-fledged web portals tailored to your target audience and intended functionality, embedded in your current ecosystem and connected with third-party solutions.",
        services: [
          {
            title: "Prototypical Single-Page Applications",
            description:
              "We develop single-page applications that offer a smooth, dynamic user experience with robust backend support.",
          },
          {
            title: "Web Content Management",
            description:
              "We build advanced content management systems that facilitate web content creation, SEO optimization, and streamline lead generation activities.",
          },
          {
            title: "Cloud-Based Designs",
            description:
              "Our cloud-based web applications are designed for scalability, security, and performance, maximizing your cloud investment.",
          },
          {
            title: "QA and Testing",
            description:
              "Robust testing is integrated across every stage of the development cycle, ensuring your app performs optimally at any given moment.",
          },
          {
            title: "Friction-Free Ecommerce Platforms",
            description:
              "Our ecommerce solutions include online stores, marketplaces, digital auctions, and trade portals that ensure a consistent and integrated customer journey.",
          },
        ],
      },
    },
    {
      _type: "how-we-work",
      _key: "6",
      data: {
        title: "How We Work and What You Get",
        description:
          "Our partnerships with clients are guided by two principles: excellence and transparency.",
        cards: [
          {
            id: "01",
            title: "Gathering Requirements",
            description:
              "We start with a thorough understanding of your needs to lay a solid foundation for your project.",
          },
          {
            id: "02",
            title: "Gathering Requirements",
            description:
              "Our designers create engaging and user-friendly interfaces that enhance the user experience.",
          },
          {
            id: "03",
            title: "Development",
            description:
              "Our developers bring your vision to life, utilizing cutting-edge technologies and best practices.",
          },
          {
            id: "04",
            title: "Testing",
            description:
              "An array of tests ensures that your solution is stable and secure. We generally use real devices rather than emulators to gather and analyze feedback from test users.",
          },
          {
            id: "05",
            title: "Support and Maintenance",
            description:
              "We provide ongoing support and maintenance to ensure your web application continues to perform at its best.",
          },
        ],
        technologiesTitle:
          "Score the Maximum Value from the Top Tech Platforms",
        technologiesDescription:
          "We harness the most promising web technologies and tech stacks to give you a competitive advantage.",
        technologies: [
          {
            title: "Languages",
            skills: [
              {
                title: ".NET",
              },
              {
                title: "PHP",
              },
              {
                title: "Java",
              },
              {
                title: "Golang",
              },
              {
                title: "Node.js",
              },
              {
                title: "Python",
              },
              {
                title: "Elixir",
              },
              {
                title: "Scala",
              },
            ],
          },
          {
            title: "Frameworks",
            skills: [
              {
                title: "Django",
              },
              {
                title: "MeteorJS",
              },
              {
                title: "Ruby on Rails",
              },
              {
                title: "Spring",
              },
              {
                title: "ExpressJS",
              },
              {
                title: "Symfony",
              },
            ],
          },
          {
            title: "Databases",
            skills: [
              {
                title: "MySQL",
              },
              {
                title: "MongoDB",
              },
              {
                title: "MS SQL",
              },
              {
                title: "PostgreSQL",
              },
              {
                title: "Oracle",
              },
            ],
          },
        ],
      },
    },
    {
      _type: "contactTeam",
      _key: "7",
      data: {
        title: "Connect with our Application Design & Development Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "blockchain-cryptocurrency": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Blockchain",
        description: "Capabilities - technology ",
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        sections: [
          {
            title: "Blockchain Services",
            description:
              "Blockchain creates trust and transparency regarding data and can be used in a variety of compelling applications. Catalyst experts help organizations identify—and seize—the potential of blockchain technology.",
          },
        ],
      },
    },
    {
      _type: "two-grid-section",
      _key: "3",
      data: {
        sections: [
          {
            title: "Understanding Blockchain",
            descriptions: [
              {
                description:
                  "Blockchain is a potent and versatile emerging technology that is just beginning to live up to its potential. Best known for its use in cryptocurrency, blockchain—a distributed database that fosters trust and lowers transaction costs—has the potential to transform organizational operations. Currently, blockchain is used in various business and public-sector applications, such as tracking items in supply chains, automating customs clearances, and facilitating financial transactions, with many more applications awaiting development.",
              },
              {
                description:
                  "The challenge for organizations is threefold: understanding the technology, determining how blockchain can create value, and developing an approach to capture value early on, funding the journey.",
              },
            ],
          },
          {
            title: "Our Approach to Blockchain",
            descriptions: [
              {
                description:
                  "By removing intermediaries, automating processes, and creating trust and transparency with shared data, blockchain unlocks value. Capturing that value requires business model innovation, operational efficiency, risk management, and social impact. Before organizations can seize these opportunities, they need to answer several key questions:",
                items: [
                  {
                    item: "Should we create our own blockchain solution or work with existing solutions or players?",
                  },
                  {
                    item: "If we build our own solution, will it require an ecosystem of other participants to succeed? If so, how do we ensure that enough value is shared to make the journey self-funding for everyone?",
                  },
                  {
                    item: "How do we build and launch our solution? Specifically: What technology stack is needed? What features are critical to creating scale? How do we go to market?",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      _type: "accordion-list",
      _key: "4",
      data: {
        accordion: [
          {
            id: "1",
            title: "Blockchain Workshop",
            description:
              "We typically start our blockchain consulting efforts with an educational workshop, bringing together senior leaders and industry experts. Participants learn what blockchain technology is and—through relevant case studies—where it is useful. Together, we start to identify industry opportunities and considerations relevant to your business.",
          },
          {
            id: "2",
            title: "Innovation Sprints",
            description:
              "Participants take a closer look at the most promising opportunities and the best ways to engage in a blockchain strategy. We help organizations identify, prioritize, and evaluate potential use cases based on business value, risk, and difficulty. We also evaluate different approaches to execution: building in-house, leveraging third-party solutions, and joining existing consortia. Strategy teams and business unit leaders work together to develop an economic model and an implementation plan for each major use case.",
          },
          {
            id: "3",
            title: "Development of a Blockchain Proof of Concept",
            description:
              "The third phase tests and demonstrates the feasibility of a blockchain-based approach. We help organizations identify and evaluate the implementation platform and architecture best suited to the chosen use case(s). Business unit leaders develop a blockchain concept that is tested for its market fit, likely customer acceptance, and competitive viability. Teams engage in rapid iterations—combining early customer testing with market research—to build solutions and pilot them quickly.",
          },
          {
            id: "4",
            title: "Blockchain Commercialization",
            description:
              "We work with business unit leaders to develop a blockchain solution, a detailed execution and ecosystem development strategy, and a rollout implementation plan and timeline. Our solution, though comprehensive, is an MVP—minimum viable product—version intended for rapid deployment, testing, and adjustment. We also align the solution with the organization’s overall innovation strategy, provide robust go-to-market capabilities, and assist with customer onboarding and pricing.",
          },
        ],
      },
    },
    {
      _type: "contactTeam",
      _key: "5",
      data: {
        title: "Connect with our blockchain Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "cloud-services": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Cloud Services",
        description: "Capabilities - technology ",
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        services: [
          {
            img: aws,
            title: "Aws",
          },
          {
            img: mercury,
            title: "Mercury",
          },
          {
            img: microsoft,
            title: "Microsoft",
          },
          {
            img: meta,
            title: "Meta",
          },
          {
            img: stripe,
            title: "Strip",
          },
          {
            img: null,
            title: "",
          },
          {
            img: null,
            title: "",
          },
        ],
        sections: [
          {
            title: "Blockchain Services",
            description:
              "Blockchain creates trust and transparency regarding data and can be used in a variety of compelling applications. Catalyst experts help organizations identify—and seize—the potential of blockchain technology.",
          },
          {
            title: "Our Cloud Partners",
            description:
              "Collaborating with leading cloud partners to deliver innovative and secure solutions tailored for your needs.",
          },
        ],
      },
    },
    {
      _type: "contactTeam",
      _key: "6",
      data: {
        title: "Connect with our blockchain Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "business-transformation": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Business Transformation",
        description: "Capabilities - technology ",
      },
    },
    {
      _type: "about-with-cards",
      _key: "2",
      data: {
        title: "Software Development Services",
        topDescription:
          "Transformation is imperative—even for thriving companies. At Catalyst Venture Studio, we specialize in helping our clients unlock their full potential and expedite performance and value creation in a sustainable manner. While many business transformations yield short-term results, 75% fail to effect long-term, fundamental change. Successful transformations are characterized by three pivotal outcomes:",
        cards: [
          {
            id: "01",
            title: "Sustainable Value Creation",
            description:
              "We prioritize sustained gains post-transformation, emphasizing continuous value delivery.",
          },
          {
            id: "02",
            title: "Step Changes in Capabilities",
            description:
              "Our goal is to equip organizations with the necessary capabilities to implement changes and drive continuous improvement effectively.",
          },
          {
            id: "03",
            title: "Sustained Culture Shift",
            description:
              "We foster a culture that ensures alignment and engagement in new ways of working, facilitating long-term success.",
          },
        ],
        bottomDescription:
          "Companies achieving these outcomes are three times more likely to outperform average short- and long-term total shareholder returns for their sector. Notably, the 50 largest transformations we've undertaken over the past five years have delivered 17% higher TSR for those companies compared to relevant stock indices.",
      },
    },
  ],
};
