import toronto from "../../public/assets/icons/svg/toronto.svg";
import tradible from "../../public/assets/icons/svg/tradible.svg";
import miami from "../../public/assets/icons/svg/miami.svg";
import boston from "../../public/assets/icons/svg/boston.svg";
import etr from "../../public/assets/icons/svg/407.svg";
import Image from "next/image";

export default function OurClients() {
  return (
    <section className="max-w-[1440px] mx-auto px-[94px] py-[90px] flex flex-col gap-8">
      <h3 className="paragraph text-2xl text-left font-medium">Our Clients</h3>
      <p className="paragraph text-left leading-4 text-base -mt-4">
        Setting new benchmarks in market innovation, our clients redefine
        success through visionary strategies and ground breaking solutions.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className=""
      >
        <path
          d="M0 1L1252 0.999883"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
      <section className="flex items-center justify-center gap-[42px] flex-wrap">
        {[toronto, tradible, miami, boston, etr].map((client, index) => (
          <div key={index}>
            <Image
              src={client}
              width={191}
              height={92}
              alt="clients"
              className="object-cover object-center aspect-auto"
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
        className="mt-4"
      >
        <path
          d="M0 1L1252 0.999883"
          stroke="#1A1A1A"
          stroke-opacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
    </section>
  );
}
