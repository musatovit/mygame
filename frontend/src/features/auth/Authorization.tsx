import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as api from "../../App/api";

export function Authorization(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { user, message } = useSelector((store: RootState) => store.userState);

  const auth = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api.auth({ password, email }).then((data) =>
      dispatch({
        type: "AUTH_USER",
        payload: data,
      })
    );
  };

  return (
    <div>
      <form onSubmit={auth}>
        <input
          id="name"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  );
}
