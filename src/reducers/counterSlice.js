import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    setCounter: (state, action) => state + 1,
  },
});

export const { setCounter } = menuSlice.actions;
export default menuSlice;
