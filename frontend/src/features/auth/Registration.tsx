import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as api from "../../App/api";
import { useNavigate } from "react-router";

export function Registration(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.userState);
  const registration = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api.registration({ name, password, email, password2 }).then((data) =>
      dispatch({
        type: "REG_USER",
        payload: data,
      })
    );
  };

  return (
    <div>
      <form onSubmit={registration}>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          id="password2"
          name="password2"
          type="text"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
