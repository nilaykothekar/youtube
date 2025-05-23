import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from "../slices/toggleMenuSlice";

const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuSlice
    }
});

export default store;