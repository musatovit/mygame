export type Card = {
    id: number;
    theme: string;
    answer: string;
    question: string;
    score: number;
    active?: boolean
};

export type State = {
    cards: Card[];
};

export type CardId = Card['id'];
