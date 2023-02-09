import { Card } from './types';

type Action = {
    type: 'INIT_CARDS';
    payload: Card[]
};
export default Action;
