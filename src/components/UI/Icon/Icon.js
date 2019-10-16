import React from "react";
import IconStyle from "./Icon.module.css";
const icon = props => {
  return (
    <div onClick={props.clicked} className={IconStyle.Icon}>
      <div></div>

      <div></div>

      <div></div>
    </div>
  );
};

export default icon;
