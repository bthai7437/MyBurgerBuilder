import React from "react";
import ButtonStyle from "./Button.module.css";

const button = props => {
  const classStyle = [ButtonStyle.Button, ButtonStyle[props.btnType]].join(" ");
  return (
    <button
      className={classStyle}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
