import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu, closeMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
