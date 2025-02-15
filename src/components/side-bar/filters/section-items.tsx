import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "#/store";
import { toggle } from "#/store/filters-slice.ts";

interface Props {
  items: { icon: ReactElement; title: string; count: number; id: string }[];
  isExpanded: boolean;
  sectionId: string;
}

export const SectionItems = (props: Props) => {
  const { items, isExpanded, sectionId } = props;

  const filtersState = useAppSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  if (!isExpanded) {
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
            checked={filtersState[sectionId].includes(item.id)}
          />
        </div>
      ))}
    </>
  );
};
