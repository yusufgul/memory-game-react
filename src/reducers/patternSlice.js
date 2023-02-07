import { createSlice } from "@reduxjs/toolkit";

const patternSlice = createSlice({
  name: "pattern",
  initialState: "",
  reducers: {
    setPattern: (state, action) => action.payload,
  },
});

export const { setPattern } = patternSlice.actions;
export default patternSlice;
