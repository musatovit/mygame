import { createStore, combineReducers } from "redux";

import { cardsReducer } from "./features/Board/cardsReducer";
import userReducer from "./features/auth/userReducer";

const store = createStore(
  combineReducers({ cardState: cardsReducer, userState: userReducer })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
