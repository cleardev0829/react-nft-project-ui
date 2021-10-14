import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  scrollY: 0,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActive(state, action) {
      state.isActive = action.payload;
    },
    setScrollY(state, action) {
      state.scrollY = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setActive, setScrollY } = slice.actions;
