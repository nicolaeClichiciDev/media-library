import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  value: Record<string, string[]>;
}

const initialState: FiltersState = {
  value: { mediaType: ["all"] },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggle: (
      state,
      { payload }: PayloadAction<{ type: string; id: string }>,
    ) => {
      if (state.value[payload.type].includes(payload.id)) {
        state.value[payload.type] = state.value[payload.type].filter(
          (x) => x !== payload.id,
        );
        return;
      }
      state.value[payload.type].push(payload.id);
    },
    toggleAll: (state, { payload }: PayloadAction<{ type: string }>) => {
      if (state.value[payload.type].includes("all")) {
        state.value[payload.type] = state.value[payload.type].filter(
          (x) => x !== "all",
        );
        return;
      }

      state.value[payload.type] = ["all"];
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, toggleAll } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
