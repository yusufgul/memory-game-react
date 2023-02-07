import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageWidth: window.innerWidth,
    pageHeight: window.innerHeight,
  },
  reducers: {
    setPageWidth: (state, action) => {
      state.pageWidth = action.payload;
    },
    setPageHeight: (state, action) => {
      state.pageHeight = action.payload;
    },
  },
});

export const { setPageWidth, setPageHeight } = pageSlice.actions;
export default pageSlice;
