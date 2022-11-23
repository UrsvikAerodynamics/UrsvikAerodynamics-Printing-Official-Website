import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";
import "./accounts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";

export default function Register() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {page === 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#808080",
            width: "min-content",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <UserForm />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-between",
              alignItems: "center",
              width: "450px",
            }}
          >
            <Button
              content="Back"
              color="red"
              onClick={() => {
                setPage(1);
              }}
            />

            <Button
              content="Register"
              color="#29ABE2"
              onClick={() => {
                setPage(2);
              }}
            />
          </div>
        </div>
      ) : page === 2 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "450px",
          }}
        >
          <AddressForm />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-between",
              alignItems: "center",
              width: "450px",
            }}
          >
            <Button
              content="Back"
              color="red"
              onClick={() => {
                setPage(1);
              }}
            />

            <Button
              content="Register"
              color="#29ABE2"
              onClick={() => {
                setPage(2);
              }}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
