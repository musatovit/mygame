import Action from './Types/Action';
import { State } from './Types/types';

export const init = { cards: [] };

export const cardsReducer = (state: State = init, action: Action): State => {
    switch (action.type) {
        case 'INIT_CARDS':
            return {
                ...state,
                cards: action.payload
            };
        default:
            return state;
    }
};
