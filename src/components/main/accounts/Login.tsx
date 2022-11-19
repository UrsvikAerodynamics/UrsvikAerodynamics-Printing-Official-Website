import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";
import './accounts.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          backgroundColor: "#808080",
          padding: "30px",
          borderRadius: "20px",
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
          color="#D9D9D9"
          onChange={() => { }}
          width="450px"

        />

        <label>
          <b>Password</b>
        </label>

        <Input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required={true}
          color="#D9D9D9"
          onChange={() => { }}
          width="450px"

        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "450px"
          }}
        >
          <Button content="Login" color="#29ABE2" onClick={() => { }} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "30px" }}>
              <Button
                content="Forgot password"
                color="#29ABE2"
                onClick={() => { }}
              />
            </div>
            <Button content="Cancel" color="red" onClick={() => { navigate("/") }} />
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
          <p className="Pointer" onClick={()=>{navigate("/register")}} style={{color:"black", textDecoration: "underline"}}>Don`t have a account? Register here</p>
        </div>
      </div>
    </div>
  );
}
