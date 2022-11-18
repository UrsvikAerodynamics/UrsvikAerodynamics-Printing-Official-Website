import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/main/accounts/Login"
import Register from "./components/main/accounts/Register"

import { Routes ,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
