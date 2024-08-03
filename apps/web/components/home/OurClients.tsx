import toronto from "../../public/assets/icons/svg/toronto.svg";
import tradible from "../../public/assets/icons/svg/tradible.svg";
import miami from "../../public/assets/icons/svg/miami.svg";
import boston from "../../public/assets/icons/svg/boston.svg";
import etr from "../../public/assets/icons/svg/407.svg";
import Image from "next/image";

export default function OurClients() {
  return (
    <section className="max-w-[1440px] mx-auto lg:px-[94px] py-[42px] lg:py-[90px] flex flex-col gap-6 lg:gap-8">
      <h3 className="paragraph text-base lg:text-2xl text-left font-medium  max-lg:px-8">
        Our Clients
      </h3>
      <p className="paragraph text-left leading-[18px] lg:leading-4 text-base lg:-mt-4 max-lg:px-8">
        Setting new benchmarks in market innovation, our clients redefine
        success through visionary strategies and ground breaking solutions.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className="max-lg:hidden w-full mx-auto"
      >
        <path
          d="M0 1L1252 0.999883"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="366"
        height="2"
        viewBox="0 0 366 2"
        fill="none"
        className="lg:hidden w-full flex-1 px-8 "
      >
        <path
          d="M0 1L366 1.00003"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
      <section className="flex items-center justify-center gap-4 lg:gap-[42px] flex-wrap  ">
        {[toronto, tradible, miami, boston, etr].map((client, index) => (
          <div key={index}>
            <Image
              src={client}
              width={400}
              loading="lazy"
              decoding="async"
              height={400}
              alt="clients"
              className="object-cover object-center w-[191px] h-[92px] aspect-auto max-lg:w-[69px] max-lg:h-[34px]"
            />
          </div>
        ))}
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className="mt-4 max-lg:hidden w-full mx-auto"
      >
        <path
          d="M0 1L1252 0.999883"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="366"
        height="2"
        viewBox="0 0 366 2"
        fill="none"
        className="lg:hidden w-full flex-1 px-8"
      >
        <path
          d="M0 1L366 1.00003"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
    </section>
  );
}
