import {
  CatalystCanHelp,
  DrivingDigitalExcellence,
  FrictionlessCustomerExperience,
  HowCatalystVentureStudioHelps,
  IndustriesConsumerPageTitle,
  IndustriesEcommerceTitle,
  IndustriesPublicSectorTitle,
  IndustriesRealStateSectorTitle,
  IndustriesSoftwareIndustriesTitle,
  NavigatingRapidlyChangingMarkets,
  softwareAndtec,
  ThePathtoEcommerceSuccess,
  UnlockYourGrowthPotential,
} from "@repo/ui/assets/icons/index";

import { IndustryModules } from "../../types/index.js";
import { externalLinks } from "../links/externalLinks.js";

export const IndustriesModuleData: IndustryModules = {
  "consumer-goods-services": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Consumer Goods & Services",
        category: "Industries",
        backgroundImage: IndustriesConsumerPageTitle,
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        title: "Innovating the Consumer Goods and Services Landscape",
        description:
          "Consumer goods and services are experiencing a seismic shift propelled by digital transformation. At Catalyst Venture Studio, we understand the urgency and significance of this transformation, especially for consumer products brands. Our tailored solutions are designed to navigate this evolving landscape, starting with a deep understanding of your business and culminating in the development of digital capabilities that drive consumer-centric innovation.",
      },
    },
    {
      _type: "whyChoseUs",
      _key: "3",
      data: {
        title: "Driving Digital Excellence",
        description:
          "We kickstart our journey with consumer products companies by collaborating with you to define, test, and prove the value of advanced digital solutions. From data analysis to AI integration, digital supply chain enhancements to innovative marketing strategies, we pave the way for transformative change, ensuring your business remains agile and responsive to shifting consumer demands.",
        image: DrivingDigitalExcellence,
      },
    },
    {
      _type: "listItemSection",
      _key: "4",
      data: {
        title: "Preparing for the Future",
        description:
          "Our approach focuses on helping consumer products companies embrace the future with confidence. Here's how we help you stay ahead:",

        items: [
          {
            title: "Customer Insights",
            description:
              "Delve into consumer behavior and preferences to guide strategic investments and segmentations.",
          },
          {
            title: "Digital Marketing",
            description:
              "Elevate your digital marketing efforts with integrated strategies and cutting-edge tools.",
          },
          {
            title: "Supply Chain Management",
            description:
              "Optimize your value chain by leveraging external partnerships and modernizing internal processes.",
          },
          {
            title: "Personalization",
            description:
              "Craft tailored experiences that resonate with individual consumers, driving engagement and loyalty.",
          },
          {
            title: "Pricing and Revenue Management",
            description:
              "Unlock revenue opportunities through strategic pricing optimizations.",
          },
          {
            title: "Climate Change and Sustainability",
            description:
              "Embrace sustainability as a source of competitive advantage, aligning it with corporate values and shareholder returns.",
          },
        ],
      },
    },
    {
      _type: "whatYouCanExpect",
      _key: "5",
      data: {
        list: [
          {
            title: "Unlock Your Growth Potential",
            description: [
              {
                list: "With Catalyst Venture Studio by your side, you can unlock new growth opportunities, drive innovation, and navigate the complexities of the consumer goods and services landscape with confidence. Let's embark on this transformative journey together and redefine the future of consumer-centric innovation.",
              },
            ],
          },
        ],
        image: UnlockYourGrowthPotential,
      },
    },
    {
      _type: "contactTeam",
      _key: "6",
      data: {
        title: "Connect with our Consumer Goods & Services Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "public-sector": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Public Sector",
        category: "Industries",
        backgroundImage: IndustriesPublicSectorTitle,
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        title: "Driving Public Sector Transformation",
        description:
          "Public sector organizations face unprecedented pressure to deliver more for their citizens. Catalyst Venture Studio’s public sector consultants help government leaders meet—and surpass—these expectations.",
        extraDescription:
          "To improve the social, economic, and environmental well-being of citizens—today and tomorrow—governments must be responsive, agile, and capable of creatively solving complex problems. Yet many public sector organizations remain hierarchical, bureaucratic, and built for a bygone era. The public sector can positively impact billions of lives by solving pressing societal challenges, responding to crises, and capitalizing on AI, among other valuable initiatives, but it must transform how it’s organized and how it operates.",
      },
    },
    {
      _type: "gridListItem",
      _key: "3",
      data: {
        title: "grid",
        items: [
          {
            title: "Our Public Sector Consulting Services",
            list: [
              "Economic Development",
              "Defense and Security",
              "Cities of the Future",
              "Digitizing Government Services",
              "Infrastructure",
              "Mobility",
              "Space Sector",
            ],
          },
          {
            title: "Related Services",
            list: [
              "Reskilling Workforce",
              "Education",
              "Climate Risk, Adaptation, and Resilience",
              "Health Care Systems",
            ],
          },
        ],
      },
    },

    {
      _type: "whatYouCanExpect",
      _key: "4",
      data: {
        rtl: true,
        list: [
          {
            title:
              "How Catalyst Venture Studio Helps Transform Public Sector Organizations",
            description: [
              {
                list: "Our public sector consultants support governments around the world by bringing together insights and capabilities from the private sector and from decades of experience supporting public sector clients. Our government consulting teams have completed numerous public sector consulting projects in the past five years. We also founded, and continue to support, the independent Centre for Public Impact; a learning partner for governments, public servants, and those leading the charge to reimagine government so that it works for everyone.",
              },
              {
                list: "Public sector transformations equip organizations with the right delivery models to realize their vision and achieve stakeholder buy-in, as well as the communication strategies necessary to support the transformation journey. Our framework for transformation in the public sector focuses on process, progress, transparency, and people.",
              },
              {
                list: "Embracing new technologies such as AI and blockchain is only part of successful digital transformation in the public sector. Changes to culture, organization structures, capabilities, governance, and workflows are also critical to long-term success. Our Center for Digital Government can assess organizations’ digital maturity and identify opportunities to enhance public sector digital strategy.",
              },
              {
                list: "Talent is one of government’s greatest assets, particularly in the digital age. We work with public sector clients to develop world-class people and organizational capabilities, build agile organizations, support leadership development, manage change, and undertake HR transformations.",
              },
              {
                list: "At all levels, public sector institutions can do more with less. We help optimize cost and productivity, manage costs, deliver higher quality through lean approaches, and professionalize the procurement function. Our market-informed design and sourcing framework (MIDAS) is one tool that improves public sector procurement and creates greater value.",
              },
            ],
          },
        ],
        image: HowCatalystVentureStudioHelps,
      },
    },
    {
      _type: "contactTeam",
      _key: "5",
      data: {
        title: "Connect with our Public Sector Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "software-technology": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Software & Technology",
        category: "Industries",
        backgroundImage: IndustriesSoftwareIndustriesTitle,
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        title: "Empowering Innovation in Software & Technology",
        description:
          "In the fast-paced realm of software and technology, innovation is the currency of success. At Catalyst Venture Studio, we specialize in empowering companies to navigate this ever-evolving landscape, harnessing the power of digital solutions to drive growth, enhance efficiency, and deliver unparalleled value to their customers.",
      },
    },
    {
      _type: "whyChoseUs",
      _key: "3",
      data: {
        title: "Navigating Rapidly Changing Markets",
        description:
          "The software and technology sector is at the forefront of the digital revolution, shaping the way people live, work, and interact with the world around them. However, with innovation comes disruption, and companies must continually adapt to stay ahead of the curve. Our comprehensive approach to technology industry consulting is designed to help leaders navigate rapidly changing markets, promote innovation, capture new opportunities, and create sustainable value for their organizations.",
        image: NavigatingRapidlyChangingMarkets,
      },
    },
    {
      _type: "listItemSection",
      _key: "4",
      data: {
        title: "Our Services",
        description:
          "At Catalyst Venture Studio, we offer a wide range of software development services tailored to meet the unique needs of technology companies:",

        items: [
          {
            title: "Software Development Consulting",
            description:
              "Our team of experts dives deep into your organization's unique requirements, providing expert insights and guidance to kickstart your software development project on the right path.",
          },
          {
            title: "Custom Software Development",
            description:
              "We specialize in creating perfect, scalable, and one-of-a-kind solutions that align perfectly with your unique business vision and company culture.",
          },
          {
            title: "Software Product Development",
            description:
              "From prototyping to deployment and support, we provide end-to-end solutions to bring your product vision to life and ensure a seamless user experience.",
          },
          {
            title: "Software Enhancement",
            description:
              "We optimize your solutions with advanced technologies like AI, AR/VR, blockchain, and IoT to stay competitive in the market and meet evolving customer needs.",
          },
          {
            title: "Software Integration Services",
            description:
              "Our experts handle API development and integration of third-party services to streamline your operations and maximize ROI.",
          },
          {
            title: "Software Modernization",
            description:
              "We guarantee effective updates and architectural improvements to your existing solutions, ensuring they remain relevant and competitive in today's fast-paced digital landscape.",
          },
          {
            title: "Cloud Computing",
            description:
              "Leveraging the capabilities of industry-leading cloud platforms, we provide seamless, secure, and native cloud solutions to enhance your software development practices.",
          },
        ],
      },
    },
    {
      _type: "whatYouCanExpect",
      _key: "5",
      data: {
        list: [
          {
            title: "Our Approach to Technology Industry Consulting",
            description: [
              {
                list: "At Catalyst Venture Studio, we go beyond traditional consulting to help technology leaders go further and faster. Our approach recognizes the unique challenges and opportunities in each sector of the technology industry, from IT services to consumer tech, and provides tailored solutions to drive growth and innovation.",
              },
            ],
          },
        ],
        image: softwareAndtec,
      },
    },
    {
      _type: "contactTeam",
      _key: "6",
      data: {
        title: "Connect with our Software & Technology Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  ecommerce: [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Ecommerce",
        category: "Industries",
        backgroundImage: IndustriesEcommerceTitle,
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        title: "Elevating Ecommerce Solutions with Catalyst Venture Studio",
        description:
          "In the dynamic world of ecommerce, success hinges on innovation, agility, and a seamless customer experience. Catalyst Venture Studio is your partner in navigating this ever-evolving landscape, offering tailored solutions that drive growth, enhance brand loyalty, and deliver exceptional results.",
      },
    },
    {
      _type: "whyChoseUs",
      _key: "3",
      data: {
        title: "The Path to Ecommerce Success",
        description:
          "Whether you're a startup or an established enterprise, our omnichannel solutions are designed to elevate your brand and captivate your audience across various touchpoints. From strategic development to thoughtful design, we craft custom ecommerce software solutions that resonate with your target market, driving engagement and fostering brand loyalty.",
        image: ThePathtoEcommerceSuccess,
      },
    },
    {
      _type: "listItemSection",
      _key: "4",
      data: {
        title: "Tailored Ecommerce Solutions",
        description:
          "At Catalyst Venture Studio, we understand the diverse needs of modern businesses. Our comprehensive suite of ecommerce services includes:",

        items: [
          {
            title: "Online Stores",
            description:
              "Seamlessly integrate order processing and payment functionalities to create a cohesive and memorable brand experience.",
          },
          {
            title: "B2B & B2C Marketplaces",
            description:
              "Build digital storefronts tailored to your unique business requirements, ensuring a seamless shopping experience for both buyers and sellers.",
          },
          {
            title: "Auction Platforms",
            description:
              "Realize your vision of a fully customizable online auction portal, complete with features like lot tracking, mobile bidding, and digital registration.",
          },
          {
            title: "Ecommerce Aggregators",
            description:
              "Streamline your drop shipping and inventory operations with a custom solution that optimizes sales and enhances data accessibility.",
          },
          {
            title: "Mobile Commerce",
            description:
              "Tap into the growing trend of mobile commerce with a robust mobile app that integrates seamlessly with your existing operations.",
          },
          {
            title: "Custom Ecommerce Solutions",
            description:
              "Whether you're launching a new product or enhancing existing features, our team can bring your vision to life with intuitive interfaces and advanced functionalities.",
          },
        ],
      },
    },
    {
      _type: "whatYouCanExpect",
      _key: "5",
      data: {
        list: [
          {
            title: "Frictionless Customer Experience",
            description: [
              {
                list: "Our development process is centered around delivering a seamless conversion experience for your customers. From discovery to project refinement, we leverage best-in-class ecommerce platforms and technologies to ensure optimal performance and scalability.",
              },
            ],
          },
          {
            title: "Leverage Best-in-Class Ecommerce Platforms",
            description: [
              {
                list: "Our team of ecommerce development specialists is well-versed in the latest technologies and platforms driving the industry forward. From Shopify to Magento, we leverage best-in-class tools to create cutting-edge solutions that meet your unique business needs.",
              },
            ],
          },
        ],
        image: FrictionlessCustomerExperience,
      },
    },
    {
      _type: "contactTeam",
      _key: "6",
      data: {
        title: "Connect with our Ecommerce  Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
  "real-estate": [
    {
      _type: "pageTitleSection",
      _key: "1",
      data: {
        title: "Real Estate",
        category: "Industries",
        backgroundImage: IndustriesRealStateSectorTitle,
      },
    },
    {
      _type: "about",
      _key: "2",
      data: {
        title: "Empowering Real Estate Innovation",
        description:
          "Catalyst Venture Studio serves as your strategic partner in driving innovation and growth across the real estate sector. Whether you're involved in commercial or residential real estate, our tailored solutions are designed to unlock new opportunities, build stronger brands, and drive success in today's dynamic market.",
      },
    },
    {
      _type: "whatYouCanExpect",
      _key: "3",
      data: {
        rtl: true,
        list: [
          {
            title: "Tailored Solutions for Real Estate Success",
            description: [
              {
                list: "Catalyst Venture Studio serves as your strategic partner in driving innovation and growth across the real estate sector. Whether you're involved in commercial or residential real estate, our tailored solutions are designed to unlock new opportunities, build stronger brands, and drive success in today's dynamic market.",
              },
            ],
          },
          {
            title: "Driving Success Through Innovation",
            description: [
              {
                list: "In addition to our strategic services, we leverage cutting-edge technologies to drive innovation and efficiency in both commercial and residential real estate. Whether through custom software solutions, immersive AR & VR experiences, or AI-driven insights, we help you stay ahead of the curve and deliver exceptional value to your clients and investors.",
              },
            ],
          },
          {
            title: "Unlocking Potential, Driving Success",
            description: [
              {
                list: "Whether you're launching a new commercial development, managing residential properties, or exploring opportunities in both sectors, Catalyst Venture Studio is your trusted partner every step of the way. Let us help you unlock new opportunities, build stronger brands, and drive success in today's competitive real estate landscape, regardless of the segment you operate in.",
              },
            ],
          },
        ],
        image: CatalystCanHelp,
      },
    },
    {
      _type: "contactTeam",
      _key: "4",
      data: {
        title: "Connect with our Real Estate Team",
        scheduleLink: externalLinks,
        contactUs: "",
      },
    },
  ],
};
