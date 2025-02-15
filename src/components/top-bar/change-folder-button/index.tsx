import { ArrowSvg, FolderSvg } from "#/components/shared";
import { useMemo, useState } from "react";
import { useAppSelector } from "#/store";
import { isEmpty } from "remeda";
import { FolderOptionsPopup } from "./folder-options-popup.tsx";
import { changeSelectedFilesFolder } from "#/store/media-slice.ts";
import { useDispatch } from "react-redux";
import { resetSelectedItems } from "#/store/selected-items-slice.ts";

export const ChangeFolderButton = () => {
  const [open, setOpen] = useState(false);
  const { folders, selectedFolder } = useAppSelector((state) => state.folders);

  const selectedMediaFiles = useAppSelector(
    ({ selectedItems }) => selectedItems.selected,
  );

  const currentFolder = useMemo(
    () => folders.find((x) => x.id === selectedFolder)!,
    [folders, selectedFolder],
  );

  const foldersOptions = useMemo(
    () => folders.filter((x) => x.id !== currentFolder.id),
    [folders, currentFolder],
  );

  const dispatch = useDispatch();

  const handleOnFolderChange = (id: string) => {
    dispatch(
      changeSelectedFilesFolder({ folderId: id, fileIds: selectedMediaFiles }),
    );
    dispatch(resetSelectedItems());
    setOpen(false);
  };

  if (isEmpty(selectedMediaFiles) || folders.length === 1) {
    return null;
  }

  return (
    <div className={"relative"}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`${open ? "border-b-transparent rounded-b-none" : ""} border cursor-pointer flex gap-1 items-center border-[#C9CDD1] rounded-sm pt-[3px] pb-[3px] pl-1.5 pr-1.5`}
      >
        <FolderSvg />
        <p className={"font-normal text-[14px] leading-[22px]"}>
          {currentFolder.name}
        </p>
        <ArrowSvg expanded={true} />
      </div>
      <FolderOptionsPopup
        open={open}
        options={foldersOptions}
        onChange={handleOnFolderChange}
      />
    </div>
  );
};
