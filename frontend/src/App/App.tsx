import React, {useEffect, useState} from "react";
import { Registration } from "../features/auth/Registration";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "../features/auth/Authorization";
import { Header } from "../features/Header/Header";
import Board from "../features/Board/Board"
import * as api from './api';



function App(): JSX.Element {

    useEffect(() => {
        api.loadCards().then((data) => console.log(data))
    }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
      </Routes>
        <Board />
    </div>
  );
}

export default App;
