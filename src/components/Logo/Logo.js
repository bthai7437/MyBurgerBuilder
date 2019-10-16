import React from "react";
import burgerLogo from "../Assets/Images/burger-logo.png";
import LogoStyle from "./Logo.module.css";

const logo = props => {
  return (
    <div className={LogoStyle.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
