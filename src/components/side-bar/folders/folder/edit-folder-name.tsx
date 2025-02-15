import { isNullish } from "remeda";
import { renameFolder } from "#/store/folders-slice.ts";
import { useDispatch } from "react-redux";
import { Dispatch, Ref, SetStateAction } from "react";

interface Props {
  id: string;
  ref: Ref<HTMLInputElement>;
  onChange: Dispatch<SetStateAction<string>>;
  value: string | undefined;
  hidden: boolean;
  hideEdit: () => void;
}

// React 19 --> forwardRef is no needed, we can pass ref without it
export const EditFolderName = (props: Props) => {
  const { id, ref, onChange, value, hidden, hideEdit } = props;
  const dispatch = useDispatch();

  const handleOnFolderRename = () => {
    // TODO: magic number (can be used zod for fields validation)
    if (isNullish(value) || value.length < 3) {
      return;
    }
    dispatch(renameFolder({ id, name: value }));
    hideEdit();
    onChange(value);
  };

  const inputDisplay = !hidden ? "flex" : "hidden";

  return (
    <div className={`${inputDisplay} relative flex-col`}>
      <input
        ref={ref}
        className={
          "border border-[#5E6166] rounded-md pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer font-normal text-[14px] leading-[22px] tracking-[-0.05px]"
        }
        type="text"
        autoFocus
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleOnFolderRename}
      />
    </div>
  );
};
