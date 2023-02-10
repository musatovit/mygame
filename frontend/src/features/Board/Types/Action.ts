import { Card, CardId } from './type';

type Action = {
    type: 'INIT_CARDS';
    payload: Card[]
} | {
    type: 'CHANGE_ACTIVE';
    payload: CardId
} | {
    type: 'CHANGE_UNACTIVE';
    payload: CardId
} | {
    type: 'CLICKED';
    payload: CardId
};
export default Action;
