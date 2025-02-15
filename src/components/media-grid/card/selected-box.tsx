import { useAppSelector } from "#/store";
import { useMemo } from "react";
import { toggleSelected } from "#/store/selected-items-slice.ts";
import { useDispatch } from "react-redux";

export const SelectedBox = ({ id }: { id: string }) => {
  const selectedIds = useAppSelector((x) => x.selectedItems.selected);
  const dispatch = useDispatch();

  const countLabel = useMemo(() => {
    if (!selectedIds.includes(id)) return null;
    return selectedIds.findIndex((x) => x === id) + 1;
  }, [selectedIds, id]);

  return (
    <div
      className={
        "absolute bottom-0.5 left-0.5 w-2 h-2 rounded-sm font-normal text-[10px] leading-[16px] text-[#fff] text-center"
      }
      onClick={() => dispatch(toggleSelected(id))}
      style={
        selectedIds.includes(id)
          ? { backgroundColor: "#1677FF" }
          : { border: "1.5px solid #fff" }
      }
    >
      {countLabel}
    </div>
  );
};
