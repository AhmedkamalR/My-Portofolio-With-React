import React from "react";

function Button(props) {
  return <button className={`btn btn-${props.color}`}>{props.btnValue}</button>;
}

export default Button;
