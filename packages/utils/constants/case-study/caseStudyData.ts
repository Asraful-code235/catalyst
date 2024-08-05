import {
  ETRbottomimage,
  EtrHeaderSmallImage,
  LamemoireBigHeaderImage,
  LamemoireBigSmallImage,
  lamemoireBottomImage,
  tradibleHeaderBigImage,
  tradibleHeaderSmallImage,
  tradibleServiceImage,
  whypartnerwithusImage1,
  whypartnerwithusImage2,
} from "@repo/ui/assets/icons/index";
import { CaseStudyModules } from "../../types/index.js";

export const caseStudyData: CaseStudyModules = {
  tradible: [
    {
      _type: "heroSection",
      _key: "1",
      data: {
        category: "Tradible",
        title: "Building Tradible with Catalyst Venture Studio",
        description:
          "Tradible is pioneering the peer-to-peer marketplace for trading cards and collectibles, leveraging blockchain technology to enhance transparency and security in the $500+ billion industry. With a commitment to transparent pricing, asset tokenization, and data-driven trading, Tradible aims to revolutionize how enthusiasts buy, sell, and authenticate their collectibles.",
        smallImage: tradibleHeaderSmallImage,
        bigImage: tradibleHeaderBigImage,
        partnering: {
          title: "Partnering with Catalyst Venture Studio",
          description:
            "Tradible's journey from conceptualization to market leadership exemplifies the transformative impact of Catalyst Venture Studio's comprehensive service offerings. From initial concept validation to ongoing strategic advisory, Catalyst has been integral in shaping Tradible's trajectory as a disruptive force in the digital collectibles market.",
        },
      },
    },
    {
      _type: "phase",
      _key: "2",
      data: {
        strongText: "Phase 1:",
        title: "Validation - Laying the Foundation",
        description:
          "During Phase 1, spanning 2-3 months, Catalyst Venture Studio collaborated closely with Tradible to validate its unique marketplace concept and establish initial market traction. This phase included rigorous market analysis, direct engagement with potential users, and leveraging Catalyst's extensive network to ensure Tradible effectively addresses market needs.",
      },
    },
    {
      _type: "phase",
      _key: "3",
      data: {
        strongText: "Services Deployed",
        description:
          "During Phase 1, spanning 2-3 months, Catalyst Venture Studio collaborated closely with Tradible to validate its unique marketplace concept and establish initial market traction. This phase included rigorous market analysis, direct engagement with potential users, and leveraging Catalyst's extensive network to ensure Tradible effectively addresses market needs.",
      },
    },
    {
      _type: "grid-accordion-list",
      _key: "4",
      data: {
        image: tradibleServiceImage,
        list: [
          {
            title: "Brand Development and Positioning",
            description:
              "Establishing Tradible as the premier peer-to-peer marketplace for trading cards and collectibles.",
          },
          {
            title: "Product Validation and Market Research",
            description:
              "Ensuring alignment with market demands through comprehensive analysis and user feedback.",
          },
          {
            title: "Startup Advisory",
            description:
              "Strategic guidance tailored to Tradible's distinctive challenges and opportunities.",
          },
          {
            title: "Raising Venture Capital",
            description:
              "Facilitating funding to support Tradible's growth and technological advancements.",
          },
          {
            title: "Website Design and Development",
            description:
              "Creating an intuitive platform optimized for seamless trading experiences.",
          },

          {
            title: "Blockchain Development",
            description:
              "Implementing blockchain technology for transparent pricing, secure tokenization, and counterfeit prevention.",
          },
          {
            title: "Full Stack Development",
            description:
              "Building a scalable infrastructure to support Tradible's global marketplace operations.",
          },
        ],
      },
    },
    {
      _type: "blocks",
      _key: "5",
      data: {
        list: [
          {
            title: "Current Status and Ongoing Engagement",
            description:
              "As an ongoing client of Catalyst Venture Studio, Tradible continues to benefit from strategic advisory and support. Positioned in Phase 1, Tradible is refining its platform and preparing for subsequent growth phases. Catalyst remains committed to guiding Tradible towards industry leadership and sustainable growth in the dynamic collectibles market.",
          },
          {
            title: "Future Outlook",
            description:
              "With Catalyst's ongoing support, Tradible is poised to redefine the digital collectibles landscape. The collaboration between Tradible and Catalyst Venture Studio exemplifies a commitment to innovation, excellence, and market disruption. As Tradible progresses through subsequent phases—Foundation, Growth, Scale, and Exit—Catalyst will continue to maximize Tradible's potential and ensure its long-term success.",
          },
          {
            title: "Conclusion",
            description:
              "Tradible's partnership with Catalyst Venture Studio underscores the power of strategic collaboration in transforming visionary concepts into thriving enterprises. By harnessing Catalyst's expertise across technology, business strategy, and startup development, Tradible is not only reshaping the collectibles marketplace but also setting new benchmarks for user-centric digital experiences worldwide. Together, Tradible and Catalyst Venture Studio are paving the way for sustained innovation and leadership in the digital collectibles industry, revolutionizing how enthusiasts engage with their passions through advanced blockchain technology and transparent trading solutions.",
          },
        ],
      },
    },
  ],
  "la-memoire": [
    {
      _type: "heroSection",
      _key: "1",
      data: {
        isImageAbsolute: true,
        category: "La Mémoire",
        title: "La Mémoire’s Journey with Catalyst Venture Studio",
        subTitle: "La Mémoire: A Luxury Home Fragrance Brand",
        description:
          "Tradible is pioneering the peer-to-peer marketplace for trading cards and collectibles, leveraging blockchain technology to enhance transparency and security in the $500+ billion industry. With a commitment to transparent pricing, asset tokenization, and data-driven trading, Tradible aims to revolutionize how enthusiasts buy, sell, and authenticate their collectibles.",
        smallImage: LamemoireBigSmallImage,
        bigImage: LamemoireBigHeaderImage,
      },
    },
    {
      _type: "partner-with-us",
      _key: "2",
      data: {
        title: "Partnering with Catalyst Venture Studio",
        description:
          "La Mémoire’s collaboration with Catalyst Venture Studio has been instrumental in transforming its visionary concept into a market-leading brand. Through strategic brand development, website design, digital strategy, and startup advisory services, Catalyst has helped La Mémoire craft a luxurious and memorable consumer experience.",
        images: [
          {
            title: "image1",
            image: whypartnerwithusImage2,
          },
          {
            title: "image2",
            image: whypartnerwithusImage1,
          },
        ],
      },
    },
    {
      _type: "phase",
      _key: "3",
      data: {
        strongText: "Phase 1:",
        title: "Validation - Establishing Market Presence",
        description:
          "During the initial 2-3 months, Catalyst Venture Studio worked closely with La Mémoire to validate its unique fragrance concept. This phase involved market analysis, direct engagement with potential customers, and leveraging Catalyst’s extensive network to ensure La Mémoire’s offerings met market needs.",
      },
    },
    {
      _type: "grid-accordion-list",
      _key: "4",
      data: {
        image: lamemoireBottomImage,
        list: [
          {
            title: "Brand Development",
            description:
              "Created a unique, heart-first brand identity that stands out in the luxury market.",
          },
          {
            title: "Website Design",
            description:
              "Developed an intuitive, aesthetically pleasing e-commerce site for easy navigation and product selection.",
          },
          {
            title: "Digital Strategy",
            description:
              "Crafted a visually stunning digital narrative, integrating product stories and brand ethos.",
          },
          {
            title: "Pricing and Revenue Management",
            description:
              "Implemented tailored pricing strategies and revenue management practices to optimize growth and profitability.",
          },
          {
            title: "Startup Advisory",
            description:
              "Provided strategic guidance on business model validation, venture capital funding, go-to-market strategy development, and product development.",
          },
        ],
      },
    },
  ],
  "407-etr": [
    {
      _type: "heroSection",
      _key: "1",
      data: {
        rtl: true,
        category: "407 ETR",
        title: "407 ETR Digital Strategy Transformation",
        subTitle: "Client Background: 407 ETR",
        description:
          "407 ETR, a leading toll highway operator in Ontario, partnered with Catalyst Venture Studio to revamp its digital strategy aimed at engaging a younger demographic. The project included a comprehensive redesign and development of their platform to enhance transaction efficiency, user interface (UI), user experience (UX), and information display.",
        smallImage: EtrHeaderSmallImage,
      },
    },
    {
      _type: "grid-accordion-list",
      _key: "2",
      data: {
        rtl: true,
        image: ETRbottomimage,
        title: "Services Deployed",
        list: [
          {
            title: "Application Design and Development",
            description:
              "Catalyst Venture Studio spearheaded the redesign and development of 407 ETR’s platform, focusing on improving usability and functionality for seamless user transactions.",
          },
          {
            title: "Innovation Strategy and Delivery",
            description:
              "Collaborating closely with 407 ETR, Catalyst formulated and executed an innovation strategy to modernize service offerings and capture new market segments.",
          },
          {
            title: "Product Validation and Market Research",
            description:
              "Through rigorous market analysis and user feedback, Catalyst validated product enhancements and market positioning strategies, ensuring alignment with evolving customer expectations.",
          },
        ],
      },
    },
    {
      _type: "blocks",
      _key: "3",
      data: {
        list: [
          {
            title: "Outcome",
            description:
              "The partnership empowered 407 ETR to successfully reposition its brand among younger demographics in Ontario through a modernized digital platform. The enhanced UI/UX and efficient transaction capabilities have bolstered customer engagement and satisfaction, setting a new standard in toll highway services.",
          },
          {
            title: "Conclusion",
            description:
              "407 ETR’s collaboration with Catalyst Venture Studio exemplifies the transformative impact of strategic digital initiatives in driving customer-centric innovation and market leadership. Together, they have set a benchmark for seamless user experiences and operational efficiency in the toll highway industry.",
          },
        ],
      },
    },
  ],
};
