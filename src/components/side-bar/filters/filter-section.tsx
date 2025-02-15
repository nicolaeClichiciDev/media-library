import { ArrowSvg } from "#/components/shared";
import { resetSelectedItems } from "#/store/selected-items-slice.ts";
import { toggleAll } from "#/store/filters-slice.ts";
import { useAppSelector } from "#/store";
import { useDispatch } from "react-redux";

interface Props {
  sectionId: string;
  title: string;
  isExpanded: boolean;
  toggleExpandSection: (id: string) => void;
}

export const FilterSection = (props: Props) => {
  const { title, isExpanded, sectionId, toggleExpandSection } = props;
  const filtersState = useAppSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  const handleOnToggleChecked = () => {
    dispatch(resetSelectedItems());
    dispatch(toggleAll({ type: sectionId }));
  };

  return (
    <div className={"flex justify-between"}>
      <button
        className={"flex gap-2 items-center"}
        onClick={() => toggleExpandSection(sectionId)}
      >
        <p className={"font-normal text-[12px] leading-[20px] text-[#878C91]"}>
          {title}
        </p>
        <ArrowSvg expanded={isExpanded} />
      </button>
      <input
        type="checkbox"
        // TODO: magic number
        checked={filtersState[sectionId].length === 3}
        onChange={handleOnToggleChecked}
      />
    </div>
  );
};
