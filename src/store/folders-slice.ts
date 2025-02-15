import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MediaFolder, MOCK } from "#/service";

export interface FoldersState {
  folders: MediaFolder[];
  selectedFolder: string;
}

const initialState: FoldersState = {
  folders: MOCK.folders,
  selectedFolder: MOCK.folders[0].id,
};

export const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder: (state, { payload }: PayloadAction<string>) => {
      const newFolder: MediaFolder = {
        id: new Date().toString(),
        name: payload,
      };

      state.folders.unshift(newFolder);
      state.selectedFolder = newFolder.id;
    },
    removeFolder: (state, { payload }: PayloadAction<string>) => {
      //TODO: remove current selected folder scenario need to be processed
      const filteredFolders = state.folders.filter(
        (folder) => folder.id !== payload,
      );
      state.folders = filteredFolders;
      state.selectedFolder = filteredFolders[0].id;
    },

    renameFolder: (
      state,
      { payload }: PayloadAction<{ id: string; name: string }>,
    ) => {
      const foldersIndex = state.folders.findIndex((x) => x.id === payload.id);
      state.folders[foldersIndex].name = payload.name;
    },

    changeSelectedFolder: (state, { payload }: PayloadAction<string>) => {
      state.selectedFolder = payload;
    },
  },
});

export const { addFolder, removeFolder, changeSelectedFolder, renameFolder } =
  foldersSlice.actions;

export const foldersReducer = foldersSlice.reducer;
