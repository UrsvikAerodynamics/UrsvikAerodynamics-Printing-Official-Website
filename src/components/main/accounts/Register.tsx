import React from "react";
import Input from "../../extra/Input";
import Button from "../../extra/Button";
import './accounts.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  const UserForm = () => {
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
            <b>Email</b>
          </label>
          <Input
            type="text"
            placeholder="Enter Email"
            name="email"
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
            <Button content="Cancel" color="red" onClick={() => { navigate("/") }} />

            <Button content="Next" color="#29ABE2" onClick={() => {
              setPage(2);
            }} />
          </div>
        </div>
      </div>
    );

  }

  const AddressForm = () => {
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
            <b>AddressLine1</b>
          </label>
          <Input
            type="text"
            placeholder="Enter AddressLine1"
            name="addressLine1"
            required={true}
            color="#D9D9D9"
            onChange={() => { }}
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
            onChange={() => { }}
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
            onChange={() => { }}
            width="450px"

          />
          <label>
            <b>PostalCode</b>
          </label>

          <Input
            type="text"
            placeholder="Enter PostalCode"
            name="postalCode"
            required={true}
            color="#D9D9D9"
            onChange={() => { }}
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
            onChange={() => { }}
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
            onChange={() => { }}
            width="450px"

          />

          <div style={{marginTop: "20px", width: "100%", display: "flex", flexDirection: "row", justifyContent:"left" }}>
            <input style={{width:"30px"}} type="checkbox" />

            <label style={{display: "flex", flexDirection: "row", alignItems:"center"}}>
              <b >I agree to the Therms and Conditions</b>
            </label>
          </div>

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
            <Button content="Back" color="red" onClick={() => {
              setPage(1);
            }} />

            <Button content="Register" color="#29ABE2" onClick={() => {
              setPage(2);
            }} />
          </div>
        </div>
      </div>
    );

  }

  return (
    <div>

      {
        (page === 1) ?
          <UserForm />
          : (page === 2) ?
            <AddressForm />
            :
            <div></div>
      }

    </div>

  );

}
