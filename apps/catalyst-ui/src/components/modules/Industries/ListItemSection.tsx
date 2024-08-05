import { Module } from "utils";

export default function ListItemSection({ data }: Module) {
  if (!data) return null;
  const { title, description, items } = data;
  return (
    <section className="max-w-[1440px] mx-auto p-8 lg:px-[94px] lg:py-[64px]">
      <div className="flex flex-col gap-4 lg:gap-6">
        <h2 className="listItemSectionHeader">{title}</h2>
        <p className="listItemSectionDescription">{description}</p>
        <ul className="flex flex-col list-disc listItemSectionAccordion ml-6 tracking-tight">
          {items?.map((item: Module, index: number) => (
            <li key={index} className="space-x-1">
              <span>{item.title}:</span>
              <span className="font-normal">{item.description}</span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
