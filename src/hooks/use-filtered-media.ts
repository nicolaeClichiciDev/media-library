import { useAppSelector } from "#/store";
import { useFolderMediaSelector } from "./use-folder-media-selector.ts";
import { useMemo } from "react";

export const useFilteredMedia = () => {
  const selectedFolder = useAppSelector(
    (state) => state.folders.selectedFolder,
  );

  const { filters, search } = useAppSelector((state) => state.filters);

  const media = useFolderMediaSelector(selectedFolder);

  return useMemo(() => {
    // TODO: another filters logic
    const filteredByMediaType = media.filter((x) =>
      filters.mediaType.includes(x.type),
    );
    return filteredByMediaType.filter(
      (x) =>
        x.name.includes(search.trim()) || x.description.includes(search.trim()),
    );
  }, [media, filters]);
};
