import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";
import "./accounts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddressForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        alignItems: "center",
        
      }}
    >
      <div style={{
          margin:"20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
        }}>
        <label>
          <b>AddressLine1</b>
        </label>
        <Input
          type="text"
          placeholder="Enter AddressLine1"
          name="addressLine1"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />

        <label>
          <b>AddressLine2</b>
        </label>
        <Input
          type="text"
          placeholder="Enter AddressLine2"
          name="addressLine2"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />

        <label>
          <b>City</b>
        </label>

        <Input
          type="text"
          placeholder="Enter City"
          name="city"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />
      </div>

      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          margin:"20px",

        }}>
        <label>
          <b>PostalCode</b>
        </label>

        <Input
          type="text"
          placeholder="Enter PostalCode"
          name="postalCode"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />
        <label>
          <b>Country</b>
        </label>

        <Input
          type="text"
          placeholder="Enter Country"
          name="country"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />
        <label>
          <b>Number</b>
        </label>

        <Input
          type="number"
          placeholder="Enter Number"
          name="text"
          required={true}
          color="#D9D9D9"
          onChange={() => {}}
          width="450px"
        />
      </div>
      <div
        
      >
        
      </div>
    </div>
  );
};
