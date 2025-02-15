import { DragOverlay } from "@dnd-kit/core";
import { MediaFile } from "#/service";
import { isNullish } from "remeda";
import { createPortal } from "react-dom";
import { snapCenterToCursor } from "@dnd-kit/modifiers";

export const MediaOverlay = ({ mediaFile }: { mediaFile?: MediaFile }) => {
  if (isNullish(mediaFile)) {
    return null;
  }

  return createPortal(
    <DragOverlay modifiers={[snapCenterToCursor]}>
      <div className={`w-[50px] h-[50px] p-0.5 rounded-lg cursor-grabbing`}>
        <img
          className={"object-contain w-full h-full rounded-sm"}
          src={mediaFile.url}
          alt={mediaFile.name}
        />
      </div>
    </DragOverlay>,
    document.body,
  );
};
