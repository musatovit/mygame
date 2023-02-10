import React, { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../App/api";
import { RootState } from "../../store";

export function Header(): JSX.Element {
  const { user, message } = useSelector((store: RootState) => store.userState);
  // console.log(user, message, "____________________________");
  const [page, usePage] = useState(false);
  // const dispatch = useDispatch();
  // const datat = { user: {}, message: "" };
  // const logout = () => {
  //   api.logout().then((data) =>
  //     dispatch({
  //       type: "LOGOUT_USER",
  //       payload: datat,
  //     })
  //   );
  return (
    <>
      {page === false && (
        <div>
          <div>Игра</div>
          <div>
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
          <div>
            <NavLink to="/authorization">Авторизация</NavLink>
          </div>
          <div onClick={api.logout}>
            <a href="/">Выйти</a>
          </div>
        </div>
      )}
      {page === true && (
        <div>
          <div>Игра</div>
          <div onClick={api.logout}>
            <a href="/">Выйти</a>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
