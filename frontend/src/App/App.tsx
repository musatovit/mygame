import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Registration } from '../features/auth/Registration';
import './App.css';
import { Authorization } from '../features/auth/Authorization';
import Header from '../features/Header/Header';
import Board from '../features/Board/Board';
import * as api from './api';
import { RootState } from '../store';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .loadCards()
      .then((data) => dispatch({ type: 'INIT_CARDS', payload: data }));
  }, []);

  useEffect(() => {
    api
      .checkUser()
      .then((data) => dispatch({ type: 'CHECK_USER', payload: data }));
  }, []);
  const { user, message } = useSelector((store: RootState) => store.userState);
  return (
    <div>
      {!('name' in user) ? (
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/registration" element={<Registration />} />
              <Route path="/" element={<Authorization />} />
            </Route>
          </Routes>
          {/* <Authorization /> */}
        </div>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/registration" element={<Registration />} />
              {/* <Route path="/" element={<Authorization />} /> */}
            </Route>
          </Routes>
          <Board />
        </div>
      )}
    </div>
  );
}

export default App;
