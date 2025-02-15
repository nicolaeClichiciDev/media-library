import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MediaFile, MOCK } from "#/service";
import { RootState } from "./index.ts";

interface MediaState {
  value: MediaFile[];
  expandedMedia?: MediaFile;
}

const initialState: MediaState = {
  value: MOCK.media,
  expandedMedia: undefined,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    removeFile: (state, { payload }: PayloadAction<string>) => {
      state.value = state.value.filter((file) => file.id !== payload);
    },

    removeFiles: (state, { payload }: PayloadAction<string[]>) => {
      state.value = state.value.filter((file) => !payload.includes(file.id));
    },

    renameFile: (
      state,
      { payload }: PayloadAction<{ id: string; name: string }>,
    ) => {
      const fileIndex = state.value.findIndex((file) => file.id === payload.id);
      if (fileIndex === -1) {
        throw new Error("File not found");
      }
      state.value[fileIndex].name = payload.name;
    },

    changeFileFolder: (
      state,
      { payload }: PayloadAction<{ folderId: string; fileId: string }>,
    ) => {
      const fileIndex = state.value.findIndex(
        (file) => file.id === payload.fileId,
      );

      state.value[fileIndex].folderId = payload.folderId;
    },
    changeSelectedFilesFolder: (
      state,
      { payload }: PayloadAction<{ folderId: string; fileIds: string[] }>,
    ) => {
      state.value = state.value.map((x) => {
        if (!payload.fileIds.includes(x.id)) {
          return x;
        }
        return { ...x, folderId: payload.folderId };
      });
    },
    expandMedia: (state, { payload }: PayloadAction<string>) => {
      state.expandedMedia = state.value.find((x) => x.id === payload);
    },
    collapseMedia: (state) => {
      state.expandedMedia = undefined;
    },
  },
});

export const {
  removeFile,
  renameFile,
  changeFileFolder,
  removeFiles,
  changeSelectedFilesFolder,
  expandMedia,
  collapseMedia,
} = mediaSlice.actions;

export const mediaReducer = mediaSlice.reducer;

export const selectCurrentFolderMedia = (state: RootState, folderId: string) =>
  state.media.value.filter((x) => x.folderId === folderId);
