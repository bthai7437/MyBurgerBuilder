import React from "react";
import OrderStyle from "./Order.module.css";
const Order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return (
      <span
        key={ingredient.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0px 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ingredient.name}({ingredient.amount})
      </span>
    );
  });
  return (
    <div className={OrderStyle.Order}>
      <p>Ingredients: {ingredientOutput}</p>

      <p>
        Price:<strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
