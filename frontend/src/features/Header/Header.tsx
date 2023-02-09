import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../App/api";

export function Header(): JSX.Element {
  // const dispatch = useDispatch();
  // const logout = () => {
  //   api.logout().then((data) =>
  //     dispatch({
  //       type: "REG_USER",
  //       payload: { user: {}, message: "" },
  //     })
  //   );
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
        <NavLink onClick={api.logout} to="/">
          Выйти
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
