import React from "react";
import "./UserOutput.css";

export default function UserOutput(props) {
  return (
    <div className="card">
      <p style={{ color: "red", fontSize: "3rem" }}>REACT First Assignment</p>
      <p>This is an username</p>
      <p>{props.userName}</p>
    </div>
  );
}
