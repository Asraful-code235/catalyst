import { Module } from "utils";

export default function ListItems({ data }: Module) {
  if (!data) return null;
  return (
    <section
      className={`max-w-[1440px] mx-auto px-8 lg:px-[94px] ${!data?.showTitle ? "pt-8 lg:pt-[64px] gap-6" : "gap-8"} pb-8 lg:pb-[64px] flex flex-col lg:gap-[64px]`}
    >
      {data?.showTitle && (
        <div
          className={`${data.rtl != true ? "flex flex-col w-full" : "flex items-center flex-col lg:flex-row lg:justify-between gap-6"}`}
        >
          {data?.title && (
            <h2
              className={`text-[32px] lg:text-[64px] flex-shrink-0 leading-normal font-medium ${data?.rtl ? "lg:w-fit" : "lg:max-w-[720px]"} ${data?.tranketedDescription == true ? "lg:!w-[431px] " : " "} w-full`}
            >
              {data?.title}
            </h2>
          )}
          {data?.description && (
            <h2
              className={`description lg:max-w-[710px] w-full ${data?.tranketedDescription == true ? "lg:!max-w-[437px] lg:!ml-auto !font-medium text-right" : " "}`}
            >
              {data?.description}
            </h2>
          )}
        </div>
      )}

      <ul
        className={`grid grid-cols-1 ${data?.rtl ? "gap-8" : "lg:grid-cols-2 lg:gap-x-[84px] gap-8 lg:gap-y-[58px]"} `}
      >
        {data?.services?.map((item: Module, key: number) => (
          <li
            key={key}
            className={`flex flex-col gap-4 ${data?.rtl ? "" : "lg:gap-6"}`}
          >
            <p className="header">{item.title}</p>
            <p className="description tracking-tight">{item.description}</p>
          </li>
        ))}
      </ul>

      {data?.ourMoto ? (
        <p className="header tracking-tight max-lg:mb-8 lg:mt-[30px]">
          {data?.ourMoto}
        </p>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="2"
          viewBox="0 0 1252 2"
          fill="none"
          className="mx-auto w-full"
        >
          <path
            opacity="0.4"
            d="M1252 1L0 1"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          />
        </svg>
      )}
    </section>
  );
}
