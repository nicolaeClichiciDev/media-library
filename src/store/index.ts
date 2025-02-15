import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters-slice.ts";
import { selectedItemsReducer } from "./selected-items-slice.ts";
import { foldersReducer } from "./folders-slice.ts";
import { mediaReducer } from "./media-slice.ts";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    selectedItems: selectedItemsReducer,
    folders: foldersReducer,
    media: mediaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
