import React from "react";
import { Registration } from "../features/auth/Registration";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "../features/auth/Authorization";
import { Header } from "../features/Header/Header";
import * as api from './api';


// useEffect(() => {
//     console.log('qqq')
//     //api.loadCards().then((data: any) => console.log(data))
// }, [])

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
