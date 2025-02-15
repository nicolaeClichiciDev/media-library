import { toggleSelected } from "#/store/selected-items-slice.ts";
import { ExpandSvg } from "./expand-svg.tsx";
import { RemoveSvg } from "./remove-svg.tsx";
import { SelectedBox } from "./selected-box.tsx";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "#/store";
import { MediaFile } from "#/service";

export const MediaThumb = (data: MediaFile) => {
  const [hovered, setHovered] = useState(false);
  const selectedIds = useAppSelector((x) => x.selectedItems.selected);

  const dispatch = useDispatch();

  const isSelected = useMemo(
    () => selectedIds.includes(data.id),
    [selectedIds, data.id],
  );

  const selectedStyles = isSelected
    ? "bg-[rgba(22,119,255,0.1)]! border-[#1677FF]!"
    : "";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`hover:bg-[rgba(0,0,0,0.2)] border border-transparent ${selectedStyles} box-border w-[185px] h-[185px] p-0.5 rounded-lg cursor-pointer relative`}
    >
      <img
        className={"object-contain w-full h-full rounded-sm"}
        onClick={() => dispatch(toggleSelected(data.id))}
        src={data.url}
        alt={data.name}
      />
      {hovered && (
        <>
          <ExpandSvg id={data.id} />
          <RemoveSvg id={data.id} />
        </>
      )}
      {(hovered || isSelected) && <SelectedBox id={data.id} />}
    </div>
  );
};
