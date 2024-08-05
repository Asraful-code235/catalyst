import { Module } from "utils";

export default function CapabilitiesPageTitle({
  data: { title, description },
}: Module) {
  if (!title || !description) return null;
  return (
    <section className="p-8 lg:px-[94px] lg:pt-[94px] max-w-[1440px] mx-auto flex flex-col gap-3 lg:gap-8 ">
      <div className=" flex flex-col gap-3 lg:gap-4 ">
        <h1 className="text-[32px] lg:text-[64px] font-medium leading-normal max-sm:max-w-[366px]  ">
          {title}
        </h1>
        <p className="text-[10px] lg:text-xl font-medium leading-normal">
          {description}
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
          opacity="0.4"
          d="M1252 1L0 1"
          stroke="#1A1A1A"
          strokeWidth="0.5"
        />
      </svg>
    </section>
  );
}
