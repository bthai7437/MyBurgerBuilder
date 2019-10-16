import React from "react";
import ControlsStyle from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className={ControlsStyle.BuildControls}>
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredients={() => props.added(ctrl.type)}
          removeIngredients={() => props.deleted(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={ControlsStyle.OrderButton}
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
