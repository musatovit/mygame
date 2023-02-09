import { createStore, combineReducers } from 'redux';

import { cardsReducer } from './features/Board/cardsReducer';

const store = createStore(combineReducers({ cardState: cardsReducer }));

export default store;

export type RootState = ReturnType<typeof store.getState>;
