import { resetSelectedItems } from "#/store/selected-items-slice.ts";
import { changeSelectedFolder } from "#/store/folders-slice.ts";
import { FolderSvg } from "../../../shared/svgs/folder-svg.tsx";
import { useFolderMediaSelector } from "#/hooks";
import { useDispatch } from "react-redux";
import { RefObject, useMemo } from "react";
import { isNullish } from "remeda";
import { RemoveFolderButton } from "#/components/side-bar/folders/folder/remove-folder-button.tsx";
import { useDroppable } from "@dnd-kit/core";
import { useAppSelector } from "#/store";

interface Props {
  id: string;
  name: string;
  showEditMode: () => void;
  hidden: boolean;
  ref?: RefObject<HTMLInputElement | null>;
}

export const FolderDetails = (props: Props) => {
  const { id, name, showEditMode, hidden, ref } = props;
  const files = useFolderMediaSelector(id);
  const foldersState = useAppSelector((state) => state.folders);

  const isSelected = foldersState.selectedFolder === id;

  const { setNodeRef, isOver } = useDroppable({
    id,
    disabled: isSelected,
  });

  const dispatch = useDispatch();

  const handleOnDoubleClick = () => {
    if (isNullish(ref)) return;
    showEditMode();
    // TODO: check if is no other way to fix that
    setTimeout(() => ref.current?.select(), 0);
  };

  const handleOnChangeFolder = () => {
    dispatch(resetSelectedItems());
    dispatch(changeSelectedFolder(id));
  };

  const containerStyles =
    "flex rounded-md pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer";

  const stateStyles = useMemo(() => {
    if (isSelected) return "bg-[rgba(0,0,0,0.05)]";
    if (isOver) return "bg-[rgba(22,119,255,0.1)]";
    return;
  }, [isSelected, isOver]);

  return (
    <div
      ref={setNodeRef}
      className={hidden ? "hidden" : `${containerStyles} ${stateStyles} group`}
    >
      <div
        className={`flex gap-2 flex-1`}
        onClick={handleOnChangeFolder}
        onDoubleClick={handleOnDoubleClick}
      >
        <FolderSvg />
        <p
          className={
            "font-normal text-[14px] leading-[22px] tracking-[-0.05px]"
          }
        >
          {name}
        </p>
        <p
          className={
            "font-normal text-[14px] text-[#9FA4AB] leading-[22px] tracking-[-0.05px]"
          }
        >
          {files.length}
        </p>
      </div>
      <RemoveFolderButton id={id} />
    </div>
  );
};
