import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedItemsState {
  selected: string[];
}

const initialState: SelectedItemsState = {
  selected: [],
};

export const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    toggleSelected: (state, { payload }: PayloadAction<string>) => {
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter((x) => x !== payload);
        return;
      }

      state.selected.push(payload);
    },
    resetSelectedItems: (state) => {
      state.selected = [];
    },
  },
});

export const { toggleSelected, resetSelectedItems } =
  selectedItemsSlice.actions;

export const selectedItemsReducer = selectedItemsSlice.reducer;
