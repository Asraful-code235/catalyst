import React from "react";

const whatWeDoItems = [
  {
    title: "Technology",
    rows: 5,
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
    rows: 5,
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
    rows: 2,
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
];

const industriesItems = [
  {
    title: "Consumer Goods & Services",
    slug: "consumer-goods-services",
  },

  { title: "Public Sector", slug: "public-sector" },
  { title: "Software & Technology", slug: "software-technology" },
  { title: "Ecommerce", slug: "ecommerce" },
  { title: "Real Estate", slug: "real-estate" },
];

export default function IndustriesNav() {
  return (
    <section className="w-full h-auto border-b border-[#1A1A1A] bg-white py-6  max-lg:hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="w-[714px] ml-auto grid grid-cols-3">
          <div className="w-fit">
            <div className="paragraph text-left font-bold text-sm pl-9">
              Industries
            </div>
          </div>
          <div className="w-full col-span-2">
            <ul className="grid grid-cols-3 gap-4 w-full ">
              {industriesItems.map((item, index) => (
                <a
                  key={index}
                  href={`/industries/${item.slug}`}
                  className={`${[1, 4].includes(index) ? "pl-[42px] text-start" : "text-start "} w-fit whitespace-nowrap paragraph text-xs hover:font-bold `}
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[714px] ml-auto flex flex-col gap-8">
          <p className="paragraph text-left font-bold text-sm pl-9">
            Capabilities
          </p>
          <div className="flex flex-col gap-[42px]">
            {whatWeDoItems.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 w-full">
                <div className="w-fit">
                  <div className="paragraph text-left font-bold text-sm pl-9">
                    {item.title}
                  </div>
                </div>
                <div className="w-full col-span-2 flex gap-[15px] ">
                  <ul className="flex flex-col gap-4 w-fit">
                    {item.children.slice(0, 5).map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`paragraph text-xs text-start flex-shrink-0 whitespace-nowrap`}
                      >
                        <a href={`/capabilities/${child.slug}`}>
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-4 ">
                    {item.children.slice(5).map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`paragraph text-xs text-start flex-shrink-0 whitespace-nowrap`}
                      >
                        <a href={child.slug}>{child.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
