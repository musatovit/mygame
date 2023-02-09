import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Board(): JSX.Element {
    const { cards } = useSelector((store:RootState) => store.cardState);

    console.log(cards);

    return (
        <div>
            <div>board</div>
        </div>
    );
}

export default Board;
