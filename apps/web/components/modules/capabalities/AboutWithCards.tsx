import { Module } from "utils";
import Cards from "./Cards";

export default function AboutWithCards({ data }: Module) {
  if (!data) return null;
  return (
    <section className="flex flex-col gap-6 lg:gap-8 w-full max-w-[1440px] mx-auto px-8 lg:px-[94px] pb-8 lg:pb-[42px]">
      <section className=" flex flex-col gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h2 className="header">{data?.title}</h2>
          <p className="description">{data?.topDescription}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data?.cards?.map((item: Module, index: number) => (
            <Cards item={item} key={index} />
          ))}
        </div>
        <p className="description">{data?.bottomDescription}</p>
      </section>
    </section>
  );
}
