import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "#/store";
import { toggle } from "#/store/filters-slice.ts";

interface Props {
  items: { icon: ReactElement; title: string; count: number; id: string }[];
  expanded: boolean;
  sectionId: string;
}

export const SectionItems = (props: Props) => {
  const { items, expanded, sectionId } = props;

  const filtersState = useSelector((state: RootState) => state.filters.value);
  const dispatch = useDispatch();

  if (!expanded) {
    return null;
  }

  return (
    <>
      {items.map((item) => (
        <div className={"flex justify-between"} key={`filter-${item.title}`}>
          <div className={"flex gap-2"}>
            {item.icon}
            <p
              className={
                "font-normal text-[14px] leading-[22px] tracking-[-0.05px]"
              }
            >
              {item.title}
            </p>
            <p
              className={
                "font-normal text-[14px] text-[#9FA4AB] leading-[22px] tracking-[-0.05px]"
              }
            >
              {item.count}
            </p>
          </div>
          <input
            type="checkbox"
            onChange={() => dispatch(toggle({ type: sectionId, id: item.id }))}
            checked={
              filtersState[sectionId].includes(item.id) ||
              filtersState[sectionId].includes("all")
            }
          />
        </div>
      ))}
    </>
  );
};
