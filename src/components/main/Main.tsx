import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <div style={{ height: "350px", backgroundColor: "greenyellow" }}>
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
            <div style={{ width: "80%", margin: "30px" }}>
              <h1>UAERO PRINTING -A modern printing solutions</h1>
              <p style={{ color: "#29ABE2", fontWeight: "bold" }}>
                Power by Ursvik Aerodunamics
              </p>
            </div>
          </div>
          <div style={{ width: "50%", height: "500px", background: "orange" }}>
            Div 2
          </div>
        </div>
      </main>
    </div>
  );
}
