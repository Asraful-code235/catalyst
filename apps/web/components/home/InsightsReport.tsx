import Image from "next/image";
import InsightsReportImage from "../../public/assets/insightsreport/insightsreport.webp";

const InsightReports = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas. Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas.",
    href: "/insight/",
    img: InsightsReportImage,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas. Lorem ipsum dolor sit amet consectetur. Quis mi cursus auctor donec hendrerit maecenas.",
    href: "/insight/",
    img: InsightsReportImage,
  },
];

export default function InsightsReport() {
  return (
    <section className="pt-[94px] w-full flex flex-col">
      <div className="max-w-[1440px] mx-auto pl-24 pr-8 flex items-center justify-between gap-4 w-full">
        <h3 className="paragraph text-2xl text-left leading-6">
          Insight Reports
        </h3>
        <button className="group paragraph font-medium leading-6 flex items-center gap-3">
          <span className="group-hover:font-bold">See All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="group-hover:transform group-hover:translate-x-1"
          >
            <path
              d="M7.5 6.2625L13.0628 12L7.5 17.7375L9.21255 19.5L16.5 12L9.21255 4.5L7.5 6.2625Z"
              fill="#1A1A1A"
            />
          </svg>
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="2"
        viewBox="0 0 1440 2"
        fill="none"
        className="w-screen mx-auto mt-8"
      >
        <path
          d="M0 1L1440 1.00013"
          stroke="#1A1A1A"
          strokeOpacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
      <section className=" w-full">
        {InsightReports.map((insight, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 ${
              index % 2 === 0 ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
            }`}
          >
            <div
              className={`paragraph flex flex-col gap-4 text-left pt-[75px] ${
                index % 2 === 0
                  ? " pr-[122px] max-w-[626px] ml-auto"
                  : "order-2 lg:order-1 px-[42px] max-w-[584px] mr-auto pr-[42px]"
              }`}
            >
              <h4 className="text-2xl font-medium leading-[26.4px]">
                {insight.title}
              </h4>
              <p className="">{insight.description}</p>
              <button className="font-medium group text-base leading-[17px] flex items-center gap-4 mt-[9px] ">
                <span className="group-hover:font-bold">Read more </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:transform group-hover:translate-x-1"
                >
                  <path
                    d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
            </div>
            <div>
              <Image
                src={insight.img}
                width={800}
                height={282}
                alt={insight.title}
                className="w-full aspect-auto object-cover object-center h-[282px]"
              />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
