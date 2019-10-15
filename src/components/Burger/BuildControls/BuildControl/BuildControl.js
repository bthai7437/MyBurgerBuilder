import React from "react";
import ControlStyle from "./BuildControls.module.css";

const buildControl = props => {
  return (
    <div className={ControlStyle.BuildControl}>
      <div className={ControlStyle.Label}>{props.label}</div>
      <button className={ControlStyle.Less}>Less</button>
      <button className={ControlStyle.More} onClick={props.addIngredients}>
        More
      </button>
    </div>
  );
};

export default buildControl;
