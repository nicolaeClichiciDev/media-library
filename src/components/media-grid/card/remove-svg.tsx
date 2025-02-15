import { removeFile } from "#/store/media-slice.ts";
import { useDispatch } from "react-redux";

export const RemoveSvg = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  return (
    <svg
      className={
        "absolute top-0.75 right-0.75 fill-white hover:fill-red-800 z-20"
      }
      onClick={() => {
        dispatch(removeFile(id));
      }}
      width="16px"
      height="16px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z" />
      </g>
    </svg>
  );
};
