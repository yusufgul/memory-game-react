import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    setMenu: (state, action) => action.payload,
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice;
