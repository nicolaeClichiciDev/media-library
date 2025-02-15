import { useDispatch } from "react-redux";
import { expandMedia } from "#/store/media-slice.ts";

export const ExpandSvg = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  return (
    <svg
      className={
        "absolute top-0.75 left-0.75 fill-white hover:fill-[rgb(22,119,255)]"
      }
      onClick={() => dispatch(expandMedia(id))}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2.875C3.15482 2.875 2.875 3.15482 2.875 3.5L2.875 8.5C2.875 8.84518 3.15482 9.125 3.5 9.125C3.84518 9.125 4.125 8.84518 4.125 8.5L4.125 4.125L8.5 4.125C8.84518 4.125 9.125 3.84518 9.125 3.5C9.125 3.15482 8.84518 2.875 8.5 2.875L3.5 2.875ZM13.125 7.5C13.125 7.15482 12.8452 6.875 12.5 6.875C12.1548 6.875 11.875 7.15482 11.875 7.5L11.875 11.875L7.5 11.875C7.15482 11.875 6.875 12.1548 6.875 12.5C6.875 12.8452 7.15482 13.125 7.5 13.125L12.5 13.125C12.8452 13.125 13.125 12.8452 13.125 12.5L13.125 7.5Z"
      />
    </svg>
  );
};
