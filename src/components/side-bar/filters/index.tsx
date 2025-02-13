import { ArrowSvg } from "./svgs";
import { useMemo, useState } from "react";
import { getFilterSections } from "./filter-sections.tsx";
import { SectionItems } from "./section-items.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "#/store";
import { toggleAll } from "#/store/filters-slice.ts";

const mock = { image: 3, video: 1, gif: 0 };

export const Filters = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const filterSections = useMemo(() => getFilterSections(mock), []);

  const filtersState = useSelector((state: RootState) => state.filters.value);
  const dispatch = useDispatch();

  const toggleExpandedSection = (id: string) => {
    setExpandedSections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  console.log(filtersState);

  return (
    <div className={"flex flex-col gap-2"}>
      <p className={"font-medium text-[14px] leading-[22px] tracking-[-0.2px]"}>
        Filters
      </p>
      {filterSections.map(({ title, items, id }) => (
        <div className={"flex flex-col gap-1"} key={`section-${title}`}>
          <div className={"flex justify-between"}>
            <button
              className={"flex gap-2 items-center"}
              onClick={() => toggleExpandedSection(id)}
            >
              <p
                className={
                  "font-normal text-[12px] leading-[20px] text-[#878C91]"
                }
              >
                {title}
              </p>
              <ArrowSvg expanded={expandedSections.includes(id)} />
            </button>
            <input
              type="checkbox"
              checked={filtersState[id].includes("all")}
              onChange={() => {
                dispatch(toggleAll({ type: id }));
              }}
            />
          </div>
          <SectionItems
            sectionId={id}
            items={items}
            expanded={expandedSections.includes(id)}
          />
        </div>
      ))}
    </div>
  );
};
