import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import * as api from '../../App/api';

export function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.userState);
  const registration = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .registration({ name, password, email, password2 })
      .then((data) =>
        dispatch({
          type: 'REG_USER',
          payload: data,
        })
      )
      .then(() => nav('/'));
  };

  return (
    <div className="place-content-center items-center flex flex-auto">
      <form className="flex flex-col w-72 h-56 border-blue-500 space-y-3 items-center place-content-center" onSubmit={registration}>
        <input
          className="mt-5"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          id="password"
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          id="password2"
          name="password2"
          type="text"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="password2"
        />
        <button className="mt-5 bg-blue-700 w-48" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
