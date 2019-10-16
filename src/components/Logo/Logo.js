import React from "react";
import burgerLogo from "../Assets/Images/burger-logo.png";
import LogoStyle from "./Logo.module.css";

const logo = props => {
  return (
    <div className={LogoStyle.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
