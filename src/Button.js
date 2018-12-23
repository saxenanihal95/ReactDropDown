import React from "react";
const Button = props => (
  <button
    style={{
      height: 20,
      width: 20,
      margin: "0px 5px",
      color: "white",
      backgroundColor: props.disabled ? "grey" : "black",
      border: "none"
    }}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.text}
  </button>
);

export default Button;
