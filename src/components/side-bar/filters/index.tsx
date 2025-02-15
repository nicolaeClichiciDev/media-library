import { useState } from "react";
import { SectionItems } from "./section-items.tsx";
import { useGetFilterSections } from "#/hooks";
import { FilterSection } from "#/components/side-bar/filters/filter-section.tsx";

export const Filters = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const filterSections = useGetFilterSections();

  const toggleExpandedSection = (id: string) => {
    setExpandedSections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <p className={"font-medium text-[14px] leading-[22px] tracking-[-0.2px]"}>
        Filters
      </p>
      {filterSections.map(({ title, items, id }) => (
        <div className={"flex flex-col gap-1"} key={`section-${title}`}>
          <FilterSection
            sectionId={id}
            title={title}
            toggleExpandSection={toggleExpandedSection}
            isExpanded={expandedSections.includes(id)}
          />
          <SectionItems
            sectionId={id}
            items={items}
            isExpanded={expandedSections.includes(id)}
          />
        </div>
      ))}
    </div>
  );
};
