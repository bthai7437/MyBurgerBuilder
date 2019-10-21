import React from "react";
import Burger from "../../../Burger/Burger";
import Button from "../../../UI/Button/Button";
import CheckoutStyle from "./OrderSummary.module.css";
const checkoutSummary = props => {
  return (
    <div className={CheckoutStyle.Checkout}>
      <h1>Checkout Summary</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" click={props.onCheckoutCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" click={props.onCheckoutContinue}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};
export default checkoutSummary;
