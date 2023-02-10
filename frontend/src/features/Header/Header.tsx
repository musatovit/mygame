import React, { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../App/api";
import { RootState } from "../../store";

export default function Header(): JSX.Element {
  const { user, message } = useSelector((store: RootState) => store.userState);
  return (
    <>
      {!("name" in user) ? (
        <div className="flex space-x-4 text-3xl place-content-center mt-3">
          <div>
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
          <div>
            <NavLink to="/authorization">Авторизация</NavLink>
          </div>
        </div>
      ) : (
        <div className="flex space-x-4 text-3xl place-content-center mt-3">
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
