import { NavItem } from "../types/index.js";

export const navItems: NavItem[] = [
  {
    title: "What We Do",
    slug: "what-we-do",
    children: true,
  },
  {
    title: "Case Studies",
    slug: "case-studies",
  },
  {
    title: "Insights",
    slug: "insights",
    children: true,
  },
  {
    title: "About",
    slug: "about",
    children: true,
  },
  {
    title: "Contact Us",
    slug: "contact-us",
  },
];

export const mobileNav: NavItem[] = [
  {
    title: "What We Do",
    children: [
      {
        title: "Industries",
        children: [
          {
            title: "Consumer Goods & Services",
            slug: "consumer-goods-services",
          },

          { title: "Public Sector", slug: "public-sector" },
          { title: "Software & Technology", slug: "software-technology" },
          { title: "Ecommerce", slug: "ecommerce" },
          { title: "Real Estate", slug: "real-estate" },
        ],
      },
      {
        title: "Capabilities",
        children: [
          {
            title: "Technology",
            children: [
              {
                title: "Application Design & Development",
                slug: "application-design-development",
              },
              {
                title: "Blockchain & Cryptocurrency",
                slug: "blockchain-cryptocurrency",
              },
              { title: "Cloud Services", slug: "cloud-services" },
              { title: "Cyber Security", slug: "cyber-security" },
              {
                title: "Web Design & Development",
                slug: "web-design-development",
              },
            ],
          },
          {
            title: "Business Strategy",
            children: [
              {
                title: "Business Transformation",
                slug: "business-transformation",
              },
              {
                title: "Brand Development & Positioning",
                slug: "brand-development-positioning",
              },
              { title: "Finance and Strategy", slug: "finance-strategy" },
              { title: "Go-To-Market Strategy", slug: "go-to-market-strategy" },
              {
                title: "Innovation Strategy and Delivery",
                slug: "innovation-strategy-delivery",
              },
              {
                title: "Pricing & Revenue Management",
                slug: "pricing-revenue-management",
              },
              {
                title: "Product Validation/Market Research",
                slug: "product-validation-market-research",
              },
              { title: "Startup Advisory", slug: "startup-advisory" },
            ],
          },
          {
            title: "Operations Management",
            children: [
              {
                title: "IT Services for Startups",
                slug: "it-services-startups",
              },
              {
                title: "Strategic Management Services",
                slug: "strategic-management-services",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Case Studies",
    slug: "case-studies",
  },
  {
    title: "Insights",
    children: [
      {
        title: "Insights",
        children: [
          { title: "Insight Topic 1", slug: "insight-topic-1" },
          { title: "Insight Topic 2", slug: "insight-topic-2" },
          { title: "Insight Topic 3", slug: "insight-topic-3" },
          { title: "Insight Topic 4", slug: "insight-topic-4" },
          { title: "Insight Topic 5", slug: "insight-topic-5" },
        ],
      },
      {
        title: "Featured Topics",

        children: [
          { title: "Insight Topic 1", slug: "insight-topic-1" },
          { title: "Insight Topic 2", slug: "insight-topic-2" },
          { title: "Insight Topic 3", slug: "insight-topic-3" },
          { title: "Insight Topic 4", slug: "insight-topic-4" },
          { title: "Insight Topic 5", slug: "insight-topic-5" },
          { title: "Insight Topic 6", slug: "insight-topic-6" },
          { title: "Insight Topic 7", slug: "insight-topic-7" },
          { title: "Insight Topic 8", slug: "insight-topic-8" },
          { title: "Insight Topic 9", slug: "insight-topic-9" },
          { title: "Insight Topic 10", slug: "insight-topic-10" },
        ],
      },
    ],
  },
  {
    title: "About",
    children: [
      { title: "Who We Are", slug: "who-we-are" },
      { title: "Partners", slug: "partners" },
      { title: "Startup Program", slug: "startup-program" },
    ],
  },
  {
    title: "Contact Us",
    slug: "contact-us",
  },
];
