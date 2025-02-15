import { useAppSelector } from "#/store";
import { Folder } from "./folder";
import { PlusSvg } from "./plus-svg.tsx";
import { useState } from "react";
import { AddFolderField } from "#/components/side-bar/folders/folder/add-folder-field.tsx";

export const Folders = () => {
  const [newFolder, setNewFolder] = useState<string>();
  const foldersState = useAppSelector((state) => state.folders);

  return (
    <div className={"flex flex-col gap-2 align-middle"}>
      <div className={"flex gap-1"}>
        <p
          className={"font-medium text-[14px] leading-[22px] tracking-[-0.2px]"}
        >
          Folders
        </p>
        <div onClick={() => setNewFolder("")}>
          <PlusSvg />
        </div>
      </div>
      <div className={"flex flex-col gap-0.5"}>
        <AddFolderField onChange={setNewFolder} value={newFolder} />
        {foldersState.folders.map((data) => (
          <Folder {...data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
