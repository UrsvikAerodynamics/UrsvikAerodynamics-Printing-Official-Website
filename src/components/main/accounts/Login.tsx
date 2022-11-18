import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";

export default function Login() {
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
          color="#D9D9D9"
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
          color="#D9D9D9"
          onChange={() => {}}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button content="Login" color="#29ABE2" onClick={() => {}} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginRight: "30px" }}>
              <Button
                content="Forgot password"
                color="#29ABE2"
                onClick={() => {}}
              />
            </div>
            <Button content="Cancel" color="red" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
