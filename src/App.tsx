import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
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
