import { useDispatch } from "react-redux";
import { resetSelectedItems } from "#/store/selected-items-slice.ts";
import { useAppSelector } from "#/store";

export const SelectedItemsCount = () => {
  const selectedCount = useAppSelector(
    ({ selectedItems }) => selectedItems.selected.length,
  );

  const dispatch = useDispatch();

  const handleOnResetSelectedItems = () => {
    if (selectedCount === 0) return;
    dispatch(resetSelectedItems());
  };

  return (
    <div className={"flex gap-1 items-center"}>
      <div
        onClick={handleOnResetSelectedItems}
        className={
          "w-2 h-2 rounded-sm border border-[#C9CDD1] relative flex items-center justify-center"
        }
      >
        {selectedCount > 0 && <div className={"w-1 h-1 bg-[#1677FF]"} />}
      </div>
      <p
        className={
          "font-normal text-[14px] text-[#878C91] leading-[22px] tracking-[-0.05px]"
        }
      >
        {selectedCount} selected
      </p>
    </div>
  );
};
