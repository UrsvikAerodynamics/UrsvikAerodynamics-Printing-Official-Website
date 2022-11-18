import React from "react";
import "./Header.css";
import Logo from "./images/Logo.png";
import { LoginBtn } from "./LoginBtn";

export default function Header() {
  return (
    <header>
      <nav className="SideLeft">
        <img className="Logo" src={Logo} alt="logo"></img>
      </nav>
      <nav className="SideRight">
        <div style={{ margin: "30px" }}>
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}
