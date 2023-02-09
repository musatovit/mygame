import React from "react";
import { Registration } from "../features/auth/Registration";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Authorization } from "../features/auth/Authorization";
import { Header } from "../features/Header/Header";

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
