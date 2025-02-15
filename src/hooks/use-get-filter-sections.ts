import { useAppSelector } from "#/store";
import { useFolderMediaSelector } from "./use-folder-media-selector.ts";
import { useMemo } from "react";
import { getFilterSections } from "#/utils";

export const useGetFilterSections = () => {
  const selectedFolder = useAppSelector(
    (state) => state.folders.selectedFolder,
  );

  const mediaFiles = useFolderMediaSelector(selectedFolder);

  return useMemo(() => {
    return getFilterSections({
      image: mediaFiles.filter((x) => x.type === "img").length,
      video: mediaFiles.filter((x) => x.type === "video").length,
      gif: mediaFiles.filter((x) => x.type === "gif").length,
    });
  }, [mediaFiles]);
};
