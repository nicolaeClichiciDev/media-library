import { ExpandSvg } from "./expand-svg.tsx";
import { SelectedBox } from "./selected-box.tsx";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "#/store";
import { toggleSelected } from "#/store/selected-items-slice.ts";

interface Props {
  data: {
    name: string;
    url: string;
    id: string;
  };
}

export const Card = ({ data }: Props) => {
  const [hovered, setHovered] = useState(false);

  const selectedIds = useSelector((x: RootState) => x.selectedItems.value);
  const dispatch = useDispatch();

  const isSelected = useMemo(
    () => selectedIds.includes(data.id),
    [selectedIds, data.id],
  );

  const selectedStyles = isSelected
    ? "bg-[rgba(22,119,255,0.1)]! border-[#1677FF]!"
    : "";

  return (
    <div className={"flex flex-col items-center gap-0.75"}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => dispatch(toggleSelected(data.id))}
        className={`hover:bg-[rgba(0,0,0,0.2)] border border-transparent ${selectedStyles} box-border w-[185px] h-[185px] p-0.5 rounded-lg cursor-pointer relative`}
      >
        <img
          className={"object-contain w-full h-full rounded-sm"}
          src={data.url}
          alt={data.name}
        />
        {hovered && <ExpandSvg />}
        {(hovered || isSelected) && <SelectedBox id={data.id} />}
      </div>
      <p className={"font-normal text-[12px] text-[#5E6166] leading-[16px]"}>
        {data.name}
      </p>
    </div>
  );
};
