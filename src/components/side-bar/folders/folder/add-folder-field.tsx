import { isNullish } from "remeda";
import { DoneSvg } from "./done-svg.tsx";
import { addFolder } from "#/store/folders-slice.ts";
import { useDispatch } from "react-redux";

interface Props {
  onChange: (x?: string) => void;
  value?: string;
}

export const AddFolderField = (props: Props) => {
  const { onChange, value } = props;

  const dispatch = useDispatch();

  const handleOnAddNewFolder = () => {
    // TODO: magic number (can be used zod for fields validation)
    if (isNullish(value) || value.length < 3) {
      return;
    }

    dispatch(addFolder(value));
    onChange(undefined);
  };

  if (isNullish(value)) {
    return null;
  }

  return (
    <div className={"relative flex flex-col"}>
      <input
        placeholder={"Folder name"}
        autoFocus
        className={
          "border border-[#5E6166] rounded-md pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer font-normal text-[14px] leading-[22px] tracking-[-0.05px]"
        }
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
      <div
        className={
          "cursor-pointer absolute top-1 right-1 hover:bg-[rgba(0,0,0,0.1)] rounded-sm"
        }
        onClick={handleOnAddNewFolder}
      >
        <DoneSvg />
      </div>
    </div>
  );
};
