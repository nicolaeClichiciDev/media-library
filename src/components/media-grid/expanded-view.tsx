import { isNullish } from "remeda";
import { useAppSelector } from "#/store";
import { useDispatch } from "react-redux";
import { collapseMedia } from "#/store/media-slice.ts";

export const ExpandedView = () => {
  const media = useAppSelector((state) => state.media.expandedMedia);

  const expandedImageClass = "expanded-image";

  const dispatch = useDispatch();

  if (isNullish(media)) {
    return null;
  }

  return (
    <div
      className={
        "absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,.7)]"
      }
      onClick={() => dispatch(collapseMedia())}
    >
      <div className={"w-[500px] h-[500px]"}>
        <img
          className={`object-contain w-full h-full rounded-sm ${expandedImageClass}`}
          src={media.url}
          alt={media.name}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
