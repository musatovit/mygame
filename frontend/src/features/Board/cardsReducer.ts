import Action from './Types/Action';
import { State } from './Types/types';

export const init = { cards: [] };

// eslint-disable-next-line import/prefer-default-export
export const cardsReducer = (state: State = init, action: Action): State => {
    switch (action.type) {
        case 'INIT_CARDS':
            return {
                ...state,
                cards: action.payload.map((card) => ({
                    ...card,
                    active: false
                }))
            };
        default:
            return state;
    }
};
