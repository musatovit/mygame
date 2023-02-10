import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as api from "../../App/api";
import { useNavigate } from "react-router";

export function Authorization(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.userState);
  const authO = (e: React.FormEvent<HTMLFormElement>): void => {
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
      <form onSubmit={authO}>
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
