import { combineReducers } from "redux";
import cardSlice from "./cardSlice";
import pageSlice from "./pageSlice";
import patternSlice from "./patternSlice";
import menuSlice from "./menuSlice";
import counterSlice from "./counterSlice";
import gameSlice from "./gameSlice";

const rootReducer = combineReducers({
  card: cardSlice.reducer,
  page: pageSlice.reducer,
  pattern: patternSlice.reducer,
  menu: menuSlice.reducer,
  counter: counterSlice.reducer,
  game: gameSlice.reducer,
});

export default rootReducer;
