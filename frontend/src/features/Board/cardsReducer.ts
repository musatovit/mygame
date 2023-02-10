import Action from './Types/Action';
import { State } from './Types/type';

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
        case 'CHANGE_ACTIVE':
            return {
                ...state,
                cards: state.cards.map((el) => el.id !== action.payload ? { ...el } : { ...el, active: true })
            };
        case 'CHANGE_UNACTIVE':
            return {
                ...state,
                cards: state.cards.map((el) => el.id !== action.payload ? { ...el } : { ...el, active: false })
            };
        default:
            return state;
    }
};
