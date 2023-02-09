import React from "react";
import React, { useState } from "react";

export function Card(): JSX.Element {
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <form>
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
