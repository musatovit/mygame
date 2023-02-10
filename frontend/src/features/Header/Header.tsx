import React, { useState } from 'react';

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
