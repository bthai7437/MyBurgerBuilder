import React from "react";
import Aux from "../../../hoc/Auxiliary";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <Aux>
        <h3>Your Order</h3>
        <p>ingredients:</p>
        <ul>{ingredientSummary}</ul>
      </Aux>
      <p>Continue to Checkout</p>
    </div>
  );
};

export default orderSummary;
