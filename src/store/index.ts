import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters-slice.ts";
import { selectedItemsReducer } from "./selected-items-slice.ts";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    selectedItems: selectedItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
