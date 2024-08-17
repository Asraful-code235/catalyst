import { NavItem } from "../types";

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
            slug: "/industries/consumer-goods-services",
          },
          { title: "Public Sector", slug: "/industries/public-sector" },
          {
            title: "Software & Technology",
            slug: "/industries/software-technology",
          },
          { title: "Ecommerce", slug: "/industries/ecommerce" },
          { title: "Real Estate", slug: "/industries/real-estate" },
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
                slug: "/capabilities/application-design-development",
              },
              {
                title: "Blockchain & Cryptocurrency",
                slug: "/capabilities/blockchain-cryptocurrency",
              },
              {
                title: "Cloud Services",
                slug: "/capabilities/cloud-services",
              },
              {
                title: "Cyber Security",
                slug: "/capabilities/cyber-security",
              },
              {
                title: "Web Design & Development",
                slug: "/capabilities/web-design-development",
              },
            ],
          },
          {
            title: "Business Strategy",
            children: [
              {
                title: "Business Transformation",
                slug: "/capabilities/business-transformation",
              },
              {
                title: "Brand Development & Positioning",
                slug: "/capabilities/brand-development-positioning",
              },
              {
                title: "Finance and Strategy",
                slug: "/capabilities/finance-strategy",
              },
              {
                title: "Go-To-Market Strategy",
                slug: "/capabilities/go-to-market-strategy",
              },
              {
                title: "Innovation Strategy and Delivery",
                slug: "/capabilities/innovation-strategy-delivery",
              },
              {
                title: "Pricing & Revenue Management",
                slug: "/capabilities/pricing-revenue-management",
              },
              {
                title: "Product Validation/Market Research",
                slug: "/capabilities/product-validation-market-research",
              },
              {
                title: "Startup Advisory",
                slug: "/capabilities/startup-advisory",
              },
            ],
          },
          {
            title: "Operations Management",
            children: [
              {
                title: "IT Services for Startups",
                slug: "/capabilities/it-services-startups",
              },
              {
                title: "Strategic Management Services",
                slug: "/capabilities/strategic-management-services",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Case Studies",
    slug: "/case-studies",
  },
  {
    title: "Insights",
    children: [
      {
        title: "Insights",
        children: [
          { title: "Insight Topic 1", slug: "/insights/insight-topic-1" },
          { title: "Insight Topic 2", slug: "/insights/insight-topic-2" },
          { title: "Insight Topic 3", slug: "/insights/insight-topic-3" },
          { title: "Insight Topic 4", slug: "/insights/insight-topic-4" },
          { title: "Insight Topic 5", slug: "/insights/insight-topic-5" },
        ],
      },
      {
        title: "Featured Topics",
        children: [
          {
            title: "Insight Topic 1",
            slug: "/featured-topics/insight-topic-1",
          },
          {
            title: "Insight Topic 2",
            slug: "/featured-topics/insight-topic-2",
          },
          {
            title: "Insight Topic 3",
            slug: "/featured-topics/insight-topic-3",
          },
          {
            title: "Insight Topic 4",
            slug: "/featured-topics/insight-topic-4",
          },
          {
            title: "Insight Topic 5",
            slug: "/featured-topics/insight-topic-5",
          },
          {
            title: "Insight Topic 6",
            slug: "/featured-topics/insight-topic-6",
          },
          {
            title: "Insight Topic 7",
            slug: "/featured-topics/insight-topic-7",
          },
          {
            title: "Insight Topic 8",
            slug: "/featured-topics/insight-topic-8",
          },
          {
            title: "Insight Topic 9",
            slug: "/featured-topics/insight-topic-9",
          },
          {
            title: "Insight Topic 10",
            slug: "/featured-topics/insight-topic-10",
          },
        ],
      },
    ],
  },
  {
    title: "About",
    children: [
      { title: "Who We Are", slug: "/about-us/who-we-are" },
      { title: "Partners", slug: "/about-us/partners" },
      { title: "Startup Program", slug: "/about-us/startup-program" },
    ],
  },
  {
    title: "Contact Us",
    slug: "/contact-us",
  },
];
