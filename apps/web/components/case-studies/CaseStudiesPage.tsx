import {
  CityOfBoston,
  Etr,
  Lamemoire,
  Lcbo,
  Miami,
  placeholder,
  Toronto,
  Tradible,
} from "@repo/ui/assets/icons/index";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface CaseProps {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: any;
}

const caseStudiesData: CaseProps[] = [
  {
    id: 1,
    title: "407 ETR",
    slug: "407-etr",
    date: "2023",
    image: Etr,
  },
  {
    id: 2,
    title: "La Mémoire",
    slug: "la-memoire",
    date: "2024",

    image: Lamemoire,
  },
  {
    id: 3,
    title: "City of Toronto",
    slug: "city-of-tronto",
    date: "2024",

    image: Toronto,
  },
  {
    id: 4,
    title: "LCBO",
    slug: "lcbo",
    date: "2024",

    image: Lcbo,
  },
  {
    id: 5,
    title: "city of Miami",
    slug: "city-of-miami",
    date: "2024",

    image: Miami,
  },
  {
    id: 6,
    title: "city of Boston",
    slug: "city-of-boston",
    date: "2024",

    image: CityOfBoston,
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="max-w-[1440px] mx-auto p-8 pb-[64px] lg:p-[94px] flex flex-col gap-8 lg:gap-[42px] ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="h-[374px] overflow-hidden lg:h-[388px] border-[0.5px] border-[#1A1A1A66] border-opacity-[0.50] w-full col-span-2 flex items-center justify-center flex-col gap-6">
          <Image
            src={Tradible}
            alt="who we are"
            width={800}
            height={400}
            placeholder="blur"
            blurDataURL={placeholder.src}
            className="object-center object-cover aspect-auto w-[198.992px] h-[47px] lg:w-[436px] lg:h-[103px]"
            loading="lazy"
            decoding="async"
            quality={"85"}
          />
          <p className="header max-lg:text-xs text-center max-lg:font-semibold max-lg:leading-[13.2px] leading-[26.4px] font-semibold">
            Redefining Collectibles for Today's Enthusiasts.
          </p>
        </div>
        <div className="flex flex-col gap-6 justify-between w-full col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-4 lg:gap-8">
            <h2 className="header leading-[26.4px]">Tradible</h2>
            <p className="description w-full lg:max-w-[310px]">
              Explore how Catalyst Venture Studio partnered with Tradible to
              revolutionize the $500+ billion collectibles market using
              blockchain technology, ensuring transparent, secure, and
              data-driven trading experiences.
            </p>
          </div>
          <Button className="w-full sm:w-fit">
            <Link href={`/case-studies/tradible`}>View Details</Link>
          </Button>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className="w-full mx-auto max-lg:hidden"
      >
        <path
          opacity="0.4"
          d="M1252 1L0 1"
          stroke="#1A1A1A"
          stroke-width="0.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="366"
        height="2"
        viewBox="0 0 366 2"
        fill="none"
        className="w-full mx-auto lg:hidden"
      >
        <path
          d="M0 1L366 1.00003"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          stroke-width="0.5"
        />
      </svg>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
        {caseStudiesData.map((study: CaseProps, index: number) => (
          <div key={index} className="relative group flex flex-col gap-4">
            <Image
              src={study.image}
              alt={study.title}
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={placeholder.src}
              className="w-full h-full aspect-auto z-10 "
              objectPosition="center"
              loading="lazy"
              decoding="async"
              quality={"85"}
              objectFit="cover"
            />
            <div className="absolute hidden p-3 bg-primary inset-0 lg:flex flex-col items-center justify-center gap-[62px] w-full h-full opacity-0 group-hover:opacity-100">
              <p className="text-[32px] font-bold leading-[35.2px] text-center ">
                {study.title}
              </p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="cursor-pointer flex absolute bottom-3 right-3 p-3 items-center gap-3 text-xs leading-[18px] font-medium justify-end"
              >
                <span className="hover:font-bold">View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M0.500002 2.2625L6.06275 8L0.500001 13.7375L2.21255 15.5L9.5 8L2.21255 0.5L0.500002 2.2625Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex lg:hidden items-center justify-between gap-4 font-medium text-[10px] capitalize leading-[11px]">
              <p> {study.title} </p>
              <p>{study.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
