import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,react/prop-types
// @ts-ignore
// eslint-disable-next-line react/prop-types
export function CardAnswer({ value }): JSX.Element {
  const [answer, setAnswer] = useState('');
  return (
    <div>
      <form>
        {value.question}
        <div>Вопрос</div>
        <div>
          <input
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button type="submit">Жми</button>
      </form>
    </div>
  );
}
