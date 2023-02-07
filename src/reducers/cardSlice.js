import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardWidth: null,
    cardHeight: null,
    cardsList: [],
    flippedCards: [],
    matchedCards: [],
  },
  reducers: {
    setMatchedCards: (state, action) => {
      state.matchedCards = action.payload;
    },
    setFlippedCards: (state, action) => {
      state.flippedCards = action.payload;
    },
    setCardsList: (state, action) => {
      state.cardsList = action.payload;
    },
    setCardWidth: (state, action) => {
      state.cardWidth = action.payload;
    },
    setCardHeight: (state, action) => {
      state.cardHeight = action.payload;
    },
  },
});

export const {
  setCardsList,
  setCardWidth,
  setCardHeight,
  setFlippedCards,
  setMatchedCards,
  setCardGlow,
} = cardSlice.actions;
export default cardSlice;
