import React from "react";
import "./Main.css";
import Printform from "./printform/Printform";

export default function Main() {
  return (
    <div>
      <div style={{ height: "465px", backgroundColor: "greenyellow" }}>
        Image
      </div>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div style={{ width: "50%", height: "500px", background: "white" }}>
            <div style={{width: "70%", marginTop: "30px", marginLeft: "30px" }}>
              <h1>UAERO PRINTING -Modern 3D printing solutions</h1>
              <p style={{ color: "#29ABE2", fontWeight: "bold" }}>
                Power by Ursvik Aerodynamics
              </p>
            </div>
          </div>
          <div style={{ width: "50%", height: "500px", display: "flex", justifyContent: "right" }}>
            <div style={{ width:"70%",background: "orange", marginTop: "30px", marginRight: "30px" }}>
              <Printform />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
