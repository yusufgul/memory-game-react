import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    end: false,
    scores: [],
    newName: "",
    highScore: false,
  },
  reducers: {
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setScores: (state, action) => {
      state.scores = action.payload;
    },
    setNewName: (state, action) => {
      state.newName = action.payload;
    },
    setHighScore: (state, action) => {
      state.highScore = action.payload;
    },
  },
});

export const { setEnd, setScores, setNewName, setHighScore } =
  gameSlice.actions;
export default gameSlice;
