import { isNullish } from "remeda";
import { renameFile } from "#/store/media-slice.ts";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { MediaFile } from "#/service";

export const MediaName = (data: MediaFile) => {
  const [newName, setNewName] = useState<string>();
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleOnRenameMedia = () => {
    // TODO: magic number
    if (!isNullish(newName) && newName.length > 3) {
      dispatch(renameFile({ id: data.id, name: newName }));
    }
    setNewName(undefined);
    setEditMode(false);
  };

  const handleOnDoubleClick = () => {
    setEditMode(true);
    // TODO: workaround
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  return (
    <div className={`select-none`} onDoubleClick={handleOnDoubleClick}>
      <input
        ref={inputRef}
        type="text"
        className={
          "font-normal text-[12px] text-[#5E6166] leading-[16px] field-sizing-content pt-0.5 pb-0.5 pl-1 pr-1 disabled:pointer-events-none"
        }
        value={newName || data.name}
        disabled={!editMode}
        autoFocus
        onChange={(e) => setNewName(e.target.value)}
        onBlur={handleOnRenameMedia}
      />
    </div>
  );
};
