import { useDispatch, useSelector } from "react-redux";
import { RootState } from "#/store";
import { resetSelectedItems } from "#/store/selected-items-slice.ts";

export const TopBar = () => {
  const selectedCount = useSelector(
    ({ selectedItems }: RootState) => selectedItems.value.length,
  );

  const dispatch = useDispatch();

  const handleOnResetSelectedItems = () => {
    if (selectedCount === 0) return;
    dispatch(resetSelectedItems());
  };

  return (
    <div className={"h-4"}>
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
      <div className={"w-full bg-[#E1E3E6] h-[1px] mt-2"} />
    </div>
  );
};
