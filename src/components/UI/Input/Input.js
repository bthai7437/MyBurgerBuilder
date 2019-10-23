import React from "react";
import InputStyle from "./Input.module.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [InputStyle.InputElement];
  if (props.invalid && props.shouldValidate) {
    inputClasses.push(InputStyle.Invalid);
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
    </div>
  );
};

export default input;
