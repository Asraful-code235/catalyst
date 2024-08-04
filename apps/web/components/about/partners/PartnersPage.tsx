import AboutPageTitle from "../AboutPageTitle";

import Microsoft from "../../../public/assets/aboutus/microsoft.webp";
import Aws from "../../../public/assets/aboutus/aws.webp";
import Mercury from "../../../public/assets/aboutus/mercury.webp";
import Meta from "../../../public/assets/aboutus/meta.webp";
import Stripe from "../../../public/assets/aboutus/stripe.webp";
import Image from "next/image";

const partners = [
  {
    img: Aws,
  },
  {
    img: Mercury,
  },
  {
    img: Microsoft,
  },
  {
    img: Meta,
  },
  {
    img: Stripe,
  },
];

const listItems = [
  {
    title: "A Network Built on Knowledge",
    description:
      "We partner with trusted leaders across a wide spectrum of industries to co-create transformative solutions that address the unique challenges and opportunities facing our clients. Whether it's in consumer goods and services, e-commerce, real estate, or software and technology, our collaborations are driven by a shared vision of innovation and excellence.",
  },
  {
    title: "A Sense of Belonging",
    description:
      "In the fast-paced world of technology, collaboration is key. We leverage our network of industry leaders to tap into unparalleled expertise and insights, ensuring that our clients benefit from best-in-class solutions and top-notch results. By fostering a culture of collaboration and knowledge-sharing, we empower our clients to thrive in an ever-evolving landscape.",
  },
  {
    title: "A Pioneering Spirit",
    description:
      "Our partnerships extend beyond the conventional boundaries, embracing the bleeding edge of innovation and disruption. We collaborate with tech giants and industry trailblazers who continually push the boundaries of what's possible, driving forward-thinking solutions that redefine industries and shape the future.",
  },
  {
    title: "A Comprehensive Approach",
    description:
      "With our clients' needs at the forefront, we take a comprehensive approach to our partnerships, encompassing diverse tools, platforms, and expertise areas. From consumer goods and services to e-commerce, real estate, and software and technology, our strategic collaborations enable seamless integrations and deliver holistic solutions tailored to our clients' unique requirements.",
  },
  {
    title: "More Than the Sum of Our Parts",
    description:
      "Our strategic partnerships with industry leaders are more than just collaborations – they're catalysts for innovation and growth. By pooling our collective brainpower and resources, we unlock new possibilities and produce some of the most innovative solutions in the market today. Together, we're driving meaningful change and shaping the future of industries worldwide.",
  },
];
export default function PartnersPage() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[64px] p-8 lg:p-[94px]">
      <AboutPageTitle title={"Partners"} />
      <div className="flex flex-col gap-4">
        <h2 className="header">Our Partnerships</h2>
        <p className="description">
          At Catalyst Venture Studio, we're proud to collaborate with a diverse
          array of industry leaders and innovators. Each partnership is not only
          integral to our work but also essential to the success of your
          business. Our network is built on a foundation of shared knowledge,
          collective expertise, and a commitment to driving transformative
          outcomes for our clients.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="header">Our Partnerships</h2>
          <p className="description">
            We’re honored to collaborate with the industry’s most formidable
            tech titans. Each partnership is core to our work — and core to your
            business success.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className="w-full mx-auto"
        >
          <path
            d="M0 1L1252 0.999883"
            stroke="#1A1A1A"
            stroke-opacity="0.25"
            stroke-width="0.5"
          />
        </svg>
        <div className="max-lg:w-screen  max-lg:-ml-8 flex items-center justify-center flex-wrap gap-4">
          {partners.map((item, key) => (
            <div key={key} className="bg-[#f9f9f9] rounded">
              <Image
                src={item.img}
                alt="partners"
                width={400}
                height={400}
                className="flex-shrink-0 aspect-auto object-cover object-center w-[69px] lg:w-[191px] h-[34px] lg:h-[92px] "
                loading="lazy"
                decoding="async"
                quality={"85"}
              />
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className="w-full mx-auto"
        >
          <path
            d="M0 1L1252 0.999883"
            stroke="#1A1A1A"
            stroke-opacity="0.25"
            stroke-width="0.5"
          />
        </svg>
      </div>
      <ul className="flex flex-col gap-8 lg:gap-[42px]  w-full">
        {listItems.map((item, key) => (
          <li key={key} className="flex flex-col gap-8 lg:gap-[42px]">
            <div className="grid lg:grid-cols-3 gap-4 lg:gap-16">
              <p className="header flex-shrink-0">{item.title}</p>
              <p className="description lg:col-span-2">{item.description}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1252"
              height="2"
              viewBox="0 0 1252 2"
              fill="none"
              className="w-full mx-auto"
            >
              <path
                d="M0 1L1252 0.999883"
                stroke="#1A1A1A"
                stroke-opacity="0.25"
                stroke-width="0.5"
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}
