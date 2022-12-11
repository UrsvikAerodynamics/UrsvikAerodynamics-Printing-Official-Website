import React from "react";
import "./Main.css";
import Printform from "./printform/Printform";
import Upload from "./images/icons8-upload-100.png";
import Quote from "./images/icons8-receipt-approved-100.png";
import Shipped from "./images/icons8-shipped-100.png";
import MainImg from "./images/bigprint.jpg";



export default function Main() {
  return (
    <div>
      <div style={{ height: "465px", display:"flex",alignItems:"center", overflow:"hidden"}}>
        <img src={MainImg} alt="mainImg" style={{
          width: "100%",
          height:"max-content",
        }} />
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
            <div style={{ width: "70%", marginTop: "30px", marginLeft: "30px" }}>
              <h1>UAERO PRINTING -Modern 3D printing solutions</h1>
              <a className="Grow" style={{ textDecoration:"none", color: "#29ABE2", fontWeight: "bold" }} href="http://localhost:3000/">Power by Ursvik Aerodynamics</a>
            </div>
            <div style={{ display: "flex" , flexDirection: "column", marginLeft: "30px" }}>
              <div className="icon" style={{ display: "flex", flexDirection: "row" }}>
                <h1>1.</h1>
                <img className="marginLeftRight" src={Upload} alt="Upload" />
                <p>Upload you cad</p>
              </div>
              <div className="icon" style={{ display: "flex", flexDirection: "row" }}>
                <h1>2.</h1>
                <img className="marginLeftRight" src={Quote} alt="Quote" />
                <p>Recive a price quote and pay</p>
              </div>
              <div className="icon" style={{ display: "flex", flexDirection: "row" }}>
                <h1>3.</h1>
                <img className="marginLeftRight" src={Shipped} alt="Shipped" />
                <p>We print and ship</p>
              </div>
            </div>
            <div className="printArt1">
            </div>
          </div>
          <div style={{ width: "50%", height: "500px", display: "flex", justifyContent: "right" }}>
            <div style={{ borderRadius: "20px", width: "70%", background: "#D1D1D1", marginTop: "30px", marginRight: "30px", display:"flex", justifyContent:"center", alignItems:"center", padding:"15px" }}>
              <Printform />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
