import React from "react";
import Input from "../../extra/Input";

export default function Login() {
  return (
    <div style={{display: "flex", justifyContent: "center", height:"100vh", alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",

        }}
      >
        <label>
          <b>Username</b>
        </label>
        <Input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required={true}
          borderColor="#D9D9D9"
          onChange={() => {}}
        />

        <label>
          <b>Password</b>
        </label>

        <Input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required={true}
          borderColor="#D9D9D9"
          onChange={() => {}}
        />


        <button type="submit">Login</button>
        <div>
          <button type="button">Cancel</button>
          <span>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </div>
    </div>
  );
}
