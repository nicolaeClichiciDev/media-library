import { useMemo } from "react";
import { RootState, useAppSelector } from "#/store";
import { selectCurrentFolderMedia } from "#/store/media-slice.ts";

export const useFolderMediaSelector = (folder: string) => {
  const selectMedia = useMemo(
    () => (state: RootState) => selectCurrentFolderMedia(state, folder),
    [folder],
  );

  return useAppSelector((state) => selectMedia(state));
};
