import { MediaFolder } from "#/service";
import { useRef, useState } from "react";
import { EditFolderName } from "./edit-folder-name.tsx";
import { FolderDetails } from "./folder-details.tsx";

export const Folder = (props: MediaFolder) => {
  const { id, name } = props;
  const [newName, setNewName] = useState<string>(name);
  const [editMode, setEditMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={"flex flex-col"}>
      <EditFolderName
        id={id}
        ref={inputRef}
        hidden={!editMode}
        hideEdit={() => setEditMode(false)}
        value={newName}
        onChange={setNewName}
      />
      <FolderDetails
        id={id}
        name={name}
        ref={inputRef}
        hidden={editMode}
        showEditMode={() => setEditMode(true)}
      />
    </div>
  );
};
