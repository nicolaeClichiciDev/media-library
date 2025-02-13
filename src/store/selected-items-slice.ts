import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedItemsState {
  value: string[];
}

const initialState: SelectedItemsState = {
  value: [],
};

export const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    toggleSelected: (state, { payload }: PayloadAction<string>) => {
      if (state.value.includes(payload)) {
        state.value = state.value.filter((x) => x !== payload);
        return;
      }

      state.value.push(payload);
    },
    resetSelectedItems: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSelected, resetSelectedItems } =
  selectedItemsSlice.actions;

export const selectedItemsReducer = selectedItemsSlice.reducer;
