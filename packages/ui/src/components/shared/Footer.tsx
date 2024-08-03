import FooterLogo from "../../assets/icons/svg/footer-logo.svg";
import instagram from "../../assets/icons/svg/instagram.svg";
import linkedin from "../../assets/icons/svg/linkedin.svg";
import x from "../../assets/icons/svg/x.svg";
import line from "../../assets/icons/svg/line.svg";

const footerItems = [
  {
    title: "Industries",
    children: [
      {
        title: "Consumer Goods & Services",
        slug: "consumer-goods-services",
      },
      { title: "Ecommerce", slug: "ecommerce" },

      //   { title: "Public Sector", slug: "public-sector" },
      { title: "Real Estate", slug: "real-estate" },
      { title: "Software & Technology", slug: "software-technology" },
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
];

const socialLinks = [
  {
    icon: instagram,
    alt: "instagram",
    url: "/",
  },
  {
    icon: linkedin,
    alt: "linkedin",
    url: "/",
  },
  {
    icon: x,
    alt: "twitter",
    url: "/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] px-[42px] md:px-[64px] max-md:space-y-[42px] ">
      <div className=" mx-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="paragraph col-span-3 pt-8 md:pt-[42px] text-left flex-1 flex flex-col max-md:items-center gap-8 md:gap-4 md:max-w-[393px] w-full text-white">
          <img
            src={FooterLogo.src}
            alt="footer-logo"
            className="w-[117px] md:w-[116.667px] h-[35px] object-cover object-center aspect-auto "
          />
          <p className="text-xs md:text-base font-medium leading-[18px] md:leading-6 w-full">
            Subscribe for Featured Insights
          </p>
          <p className="max-md:text-[10px] max-md:leading-[18px] max-md:-mt-5">
            Stay updated with Catalyst's most inspiring thought leadership on
            key issues shaping the future of business and society.
          </p>
          <div className=" text-white leading-5 flex items-center border-b border-[rgba(255,255,255,0.50)] w-full">
            <input
              type="email"
              placeholder="Email Address*"
              required
              className="border-none outline-none w-full bg-transparent py-3 placeholder:text-opacity-50"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center max-md:justify-center max-md:mt-[42px] gap-[42px] md:gap-[64px] w-full md:w-[477px] md:ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="256"
            viewBox="0 0 2 256"
            fill="none"
            className="hidden md:block"
          >
            <path
              d="M1 256L1.00001 0"
              stroke="white"
              stroke-opacity="0.5"
              strokeWidth="0.5"
            />
          </svg>
          <ul className="paragraph text-center md:text-left text-white grid grid-cols-1 md:grid-cols-2 gap-[64px] md:pt-[42px]">
            {footerItems.map((items, index) => (
              <li key={index} className="flex flex-col gap-6">
                <p className="text-base font-medium">{items.title}</p>

                <div className="flex flex-col gap-4">
                  {items.children.map((item, childIndex) => (
                    <a
                      className="font-normal hover:font-bold"
                      href={`/${items.title.toLowerCase()}/${item.slug}`}
                      key={childIndex}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src={line.src}
        alt="line"
        className="w-full h-auto hidden md:block"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="346"
        height="2"
        viewBox="0 0 346 2"
        fill="none"
        className="w-full h-auto block md:hidden"
      >
        <path
          d="M0 1L346 0.999985"
          stroke="white"
          stroke-opacity="0.5"
          strokeWidth="0.5"
        />
      </svg>
      {/* copyright */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4 max-md:pb-8">
        <p className="paragraph text-white text-center md:text-left flex-1 w-full">
          © 2024 Catalyst Venture Studio. All rights reserved.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="346"
          height="1"
          viewBox="0 0 346 2"
          fill="none"
          className="w-full h-auto block md:hidden"
        >
          <path
            d="M0 1L346 0.999985"
            stroke="white"
            stroke-opacity="0.5"
            strokeWidth="0.5"
          />
        </svg>
        <ul className="flex items-center gap-[64px] md:gap-8 md:py-[30px] ">
          {socialLinks.map((item, index) => (
            <a href={item.url} key={index}>
              <img src={item.icon.src} alt={item.alt} className="w-6 h-6" />
            </a>
          ))}
        </ul>
      </section>
    </footer>
  );
}
