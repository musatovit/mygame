import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <>
      <div>
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
