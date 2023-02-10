import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import * as api from "../../App/api";

export function Authorization(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.userState);
  const authO = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .auth({ password, email })
      .then((data) =>
        dispatch({
          type: "AUTH_USER",
          payload: data,
        })
      )
      .then(() => nav("/"));
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
          placeholder="email"
        />
        <input
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  );
}
