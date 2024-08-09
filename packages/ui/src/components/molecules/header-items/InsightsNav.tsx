const insightItems = [
  {
    title: "Insights",
    children: [
      { title: "Insight Topic 1", slug: "insight-topic-1" },
      { title: "Insight Topic 2", slug: "insight-topic-2" },
      { title: "Insight Topic 3", slug: "insight-topic-3" },
      { title: "Insight Topic 4", slug: "insight-topic-4" },
      { title: "Insight Topic 5", slug: "insight-topic-5" },
    ],
  },
  {
    title: "Featured Topics",
    children: [
      { title: "Insight Topic 1", slug: "insight-topic-1" },
      { title: "Insight Topic 2", slug: "insight-topic-2" },
      { title: "Insight Topic 3", slug: "insight-topic-3" },
      { title: "Insight Topic 4", slug: "insight-topic-4" },
      { title: "Insight Topic 5", slug: "insight-topic-5" },
      { title: "Insight Topic 6", slug: "insight-topic-6" },
      { title: "Insight Topic 7", slug: "insight-topic-7" },
      { title: "Insight Topic 8", slug: "insight-topic-8" },
      { title: "Insight Topic 9", slug: "insight-topic-9" },
      { title: "Insight Topic 10", slug: "insight-topic-10" },
    ],
  },
];

export default function InsightsNav() {
  return (
    <section className="w-full h-auto border-b border-[#1A1A1A] bg-white py-6  max-lg:hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="w-[714px] ml-auto flex flex-col gap-8">
          <div className="flex flex-col gap-[42px]">
            {insightItems.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 w-full">
                <div className="w-fit">
                  <div className="paragraph text-left font-bold text-sm pl-9">
                    {item.title}
                  </div>
                </div>
                <div className="w-full col-span-2 grid grid-cols-3 gap-[15px] ">
                  <ul className="flex flex-col gap-4 w-fit">
                    {item.children.slice(0, 5).map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`paragraph text-xs text-start flex-shrink-0 whitespace-nowrap hover:font-medium`}
                      >
                        <a href={`/insights/${child.slug}`}> {child.title}</a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-4 ">
                    {item.children.slice(5).map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`paragraph text-xs text-start flex-shrink-0 whitespace-nowrap hover:font-medium`}
                      >
                        <a href={`/insights/${child.slug}`}> {child.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
