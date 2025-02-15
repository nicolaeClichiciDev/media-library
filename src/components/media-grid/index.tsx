import { EmptyFolderOverlay } from "./empty-folder-overlay.tsx";
import { isEmpty } from "remeda";
import { Card } from "./card";
import { useDndContext } from "@dnd-kit/core";
import { MediaOverlay } from "./card/media-overlay.tsx";
import { useFilteredMedia } from "#/hooks";
import { useMemo } from "react";
import { ExpandedView } from "./expanded-view.tsx";

export const MediaGrid = () => {
  const { active } = useDndContext();

  const filteredMedia = useFilteredMedia();

  const activeMedia = useMemo(
    () => filteredMedia.find((x) => x.id === active?.id),
    [filteredMedia, active],
  );

  if (isEmpty(filteredMedia)) {
    return <EmptyFolderOverlay />;
  }

  return (
    <>
      <div
        className={
          "h-full flex flex-wrap gap-2 p-1 content-start overflow-auto"
        }
      >
        {filteredMedia.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <MediaOverlay mediaFile={activeMedia} />
      <ExpandedView />
    </>
  );
};
