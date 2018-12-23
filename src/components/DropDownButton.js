import React from "react";

const DropDownButton = props => (
  <button
    style={{
      width: 250,
      height: 40,
      color: "white",
      backgroundColor: "black",
      border: "none"
    }}
    onClick={props.onClick}>
    {props.text}
  </button>
);

export default DropDownButton;
