import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";
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
      <Button btnType="Danger" click={props.clickCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.clickContinue}>
        CONTINUE
      </Button>
      <p>
        <strong>Total Price: {props.priceTotal.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default orderSummary;
