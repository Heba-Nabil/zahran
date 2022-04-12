// Main Imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
  user: null,
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLang, setUser } = sharedSlice.actions;

export default sharedSlice.reducer;
