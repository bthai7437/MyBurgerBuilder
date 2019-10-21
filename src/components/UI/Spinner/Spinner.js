import React from "react";
import SpinnerStyle from "./Spinner.module.css";

const spinner = props => {
  return (
    <div className={SpinnerStyle.Loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default spinner;
