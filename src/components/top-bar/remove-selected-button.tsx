import { useDispatch } from "react-redux";
import { useAppSelector } from "#/store";
import { removeFiles } from "#/store/media-slice.ts";
import { isEmpty } from "remeda";
import { resetSelectedItems } from "#/store/selected-items-slice.ts";

export const RemoveSelectedButton = () => {
  const selectedItems = useAppSelector(
    ({ selectedItems }) => selectedItems.selected,
  );
  const dispatch = useDispatch();

  const handleOnRemoveSelected = () => {
    dispatch(resetSelectedItems());
    dispatch(removeFiles(selectedItems));
  };

  if (isEmpty(selectedItems)) {
    return null;
  }

  return (
    <button
      className={
        "flex gap-1 rounded-md bg-red-800 pt-0.5 pb-0.5 pl-1.5 pr-1.5 cursor-pointer items-center"
      }
      onClick={handleOnRemoveSelected}
    >
      <svg
        width="16px"
        height="24px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill={"white"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
          />
        </g>
      </svg>
      <p className={"font-normal text-[14px] leading-[20px] text-white"}>
        Remove Selected
      </p>
    </button>
  );
};
