import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const allMediaTypes = ["img", "video", "gif"];

export interface FiltersState {
  filters: Record<string, string[]>;
  search: string;
}

const initialState: FiltersState = {
  filters: {
    mediaType: allMediaTypes,
  },
  search: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggle: (
      state,
      {
        payload,
      }: PayloadAction<{
        type: string;
        id: string;
      }>,
    ) => {
      if (state.filters[payload.type].includes(payload.id)) {
        state.filters[payload.type] = state.filters[payload.type].filter(
          (x) => x !== payload.id,
        );
        return;
      }

      state.filters[payload.type].push(payload.id);
    },
    toggleAll: (state, { payload }: PayloadAction<{ type: string }>) => {
      // TODO: magic number, need to be more generic implementation
      if (state.filters[payload.type].length === 3) {
        state.filters[payload.type] = [];
        return;
      }

      state.filters[payload.type] = allMediaTypes;
    },

    changeSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
  },
});

export const { toggle, toggleAll, changeSearch } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
