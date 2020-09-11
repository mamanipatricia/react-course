import React from "react";
import "./UserInput.css";

export default function UserInput(props) {
  return (
    <div>
      <input placeholder={props.placeholder} className="username-input" type="text" onChange={props.changed} value={props.userName}/>
    </div>
  );
}
