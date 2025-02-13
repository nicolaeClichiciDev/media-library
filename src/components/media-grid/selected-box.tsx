import { useSelector } from "react-redux";
import { RootState } from "#/store";
import { useMemo } from "react";

export const SelectedBox = ({ id }: { id: string }) => {
  const selectedIds = useSelector((x: RootState) => x.selectedItems.value);

  const countLabel = useMemo(() => {
    if (!selectedIds.includes(id)) return null;
    return selectedIds.findIndex((x) => x === id) + 1;
  }, [selectedIds, id]);

  return (
    <div
      className={
        "absolute bottom-0.5 left-0.5 w-2 h-2 rounded-sm font-normal text-[10px] leading-[16px] text-[#fff] text-center"
      }
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
