import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <>
      <div className="flex space-x-4 text-3xl place-content-center mt-3">
        <div>Игра</div>
        <div>
          <NavLink to="/registration">Регистрация</NavLink>
        </div>
        <div>
          <NavLink to="/authorization">Авторизация</NavLink>
        </div>
        <div>Выйти</div>
      </div>
      <Outlet />
    </>
  );
}
