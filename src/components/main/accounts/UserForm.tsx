import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";
import "./accounts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserForm = () => {
  return (
    <div>
      <div
        
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
          width="450px"
        />

        <label>
          <b>Email</b>
        </label>
        <Input
          type="text"
          placeholder="Enter Email"
          name="email"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
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
          onChange={() => {}}
          width="450px"
        />
      </div>
    </div>
  );
};
