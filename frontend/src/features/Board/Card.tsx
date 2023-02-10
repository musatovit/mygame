import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserScore } from '../auth/Types/type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,react/prop-types
// @ts-ignore
// eslint-disable-next-line react/prop-types
export function CardAnswer({ value }): JSX.Element {
  const [answer, setAnswer] = useState('');
  const [isTrue, setIsTrue] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    if (answer.toLowerCase() === value.answer.toLowerCase()) {
      setIsTrue('1');
      // eslint-disable-next-line react/prop-types
      dispatch({ type: 'PLUS_SCORE', payload: value.score });
    } else setIsTrue('0');
  };

  const closeWindow = () => {
    dispatch({
      type: 'CHANGE_UNACTIVE',
      payload: value.id
    });
  };

  return (
      <>
        { /** Just added */}
        <div className="fixed top-48 right-0 left-0 z-20 flex justify-center">
          <div className="mx-4 my-4 bg-white">
            <div className="flex justify-end">
              <button
                onClick={closeWindow}
                className="border-2 text-red-900 px-2 m-2"
              >
                X
              </button>
            </div>
            <div className=" bg-white">
              {isTrue !== '' ? (isTrue === '1' ? <div className="flex justify-around items-center px-2 py-1 "><h1 className="text-green-500">Верно!</h1></div> : <div className="flex justify-around items-center px-2 py-1"><h1 className="text-red-600">Не Верно: {value.answer}</h1></div>) : <div className="flex justify-around items-center px-2 py-1"><h1>.</h1></div>}
              <div className="flex justify-between px-6 py-1">

                <div className="font-bold text-xl">{value.question}</div>
              </div>
              <div className="flex justify-around items-center px-2 py-1">
                {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                <input className="text-center" type="text" name="answer" onChange={(e) => setAnswer(e.target.value)} />
              </div>
              <div className="flex justify-around items-center px-2 py-1" />
              <div className="flex justify-around items-center px-2 py-1">
                <button onClick={handleClick} className="border-2 px-2 py-1 rounded bg-green-500 text-white font-bold font-mono text-lg">Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
