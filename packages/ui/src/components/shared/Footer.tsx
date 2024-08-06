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
    <footer className="w-full bg-[#1A1A1A]">
      <div className="px-8 lg:px-[64px] max-w-[1440px] mx-auto max-lg:space-y-[42px] ">
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-4 ">
          <div className="paragraph lg:pb-[42px] col-span-2 lg:col-span-2 pt-8 lg:pt-[42px] text-left flex-1 flex flex-col  gap-8 lg:gap-4 lg:max-w-[393px] w-full text-white">
            <div className="w-full flex items-center max-lg:lg:justify-center">
              <img
                src={FooterLogo.src}
                alt="footer-logo"
                className="w-[117px] lg:w-[116.667px] h-[35px] object-cover object-center aspect-auto items-center "
              />
            </div>
            <p className="text-xs lg:text-base font-medium leading-[18px] lg:leading-6 w-full">
              Subscribe for Featured Insights
            </p>
            <p className="max-lg:text-[10px] max-lg:leading-[18px]  max-lg:-mt-5 max-w-[393px]">
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
          <div className="flex items-center max-md:justify-center col-span-2 max-md:mt-[42px] justify-end gap-[42px] md:gap-[64px] w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="256"
              viewBox="0 0 2 256"
              fill="none"
              className="h-full w-fit my-auto hidden lg:block"
            >
              <path
                d="M1 256L1.00001 0"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="0.5"
              />
            </svg>
            <ul className="paragraph  w-full lg:w-fit text-center lg:text-left text-white grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
              {footerItems.map((items, index) => (
                <li
                  key={index}
                  className="flex flex-col lg:w-fit gap-6 flex-1 whitespace-nowrap"
                >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1312"
          height="2"
          viewBox="0 0 1312 2"
          fill="none"
          className="w-full mx-auto flex-1 hidden lg:block"
        >
          <path
            d="M1312 1L0 1"
            stroke="white"
            stroke-opacity="0.5"
            stroke-width="0.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="346"
          height="2"
          viewBox="0 0 346 2"
          fill="none"
          className="w-full h-auto block lg:hidden"
        >
          <path
            d="M0 1L346 0.999985"
            stroke="white"
            strokeOpacity="0.5"
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
              strokeOpacity="0.5"
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
      </div>
    </footer>
  );
}
