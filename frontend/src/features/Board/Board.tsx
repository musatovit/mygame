import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
// @ts-ignore
import { Card } from './Types/type';
import { CardAnswer } from './Card';

function Board(): JSX.Element {
    const dispatch = useDispatch();
    const { cards } = useSelector((store:RootState) => store.cardState);

    // console.log(cards);
    // eslint-disable-next-line array-callback-return
    const theme = cards.reduce((acc, card) => {
        // @ts-ignore
        if (!acc.includes(card.theme)) {
            // @ts-ignore
            acc.push(card.theme);
        }
        return acc;
    }, []);

    const newCards = theme.map((th, index) => ({
        id: index + 1000,
        theme: th,
        cards: cards.filter((card) => card.theme === th)
    }));

    const clickCard = (clickCard: Card): void => {
        dispatch({
            type: 'CHANGE_ACTIVE',
            payload: clickCard.id
        });
    };

    console.log(newCards);
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
<div className="mt-32">
    {newCards.map((card) => (
        <>
            {/* eslint-disable-next-line react/no-array-index-key */}
        <div className="flex space-x-4 text-2xl place-content-center mt-1 mr-1" key={card.id}>
           <div className="box-content h-16 w-48 p-4 border-4 text-center "><p className="pt-4"> {card.theme}</p></div>
            {card.cards.map((el) => (
                <>
                <div className="box-content h-16 w-16 p-4 border-4 text-center" onClick={() => clickCard(el)} key={el.id}><p className="pt-4">{el.score}</p></div>
                    {el.active && <CardAnswer key={el.id} value={el} />}
                </>
            ))}
        </div>
        </>
  ))}
</div>
    );
}

export default Board;
