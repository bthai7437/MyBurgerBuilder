import React from "react";
import InputStyle from "./Input.module.css";

const input = props => {
  let inputElement = null;
  let inValidMsg = null;
  const inputClasses = [InputStyle.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(InputStyle.Invalid);
  }
  if (props.invalid && props.touched) {
    inValidMsg = (
      <p className={InputStyle.Invalid}>Please enter valid values</p>
    );
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join("")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.changed}
          className={inputClasses.join("")}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join("")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={InputStyle.Input}>
      <label className={InputStyle.Label}>{props.label}</label>
      {inputElement}
      {inValidMsg}
    </div>
  );
};

export default input;
