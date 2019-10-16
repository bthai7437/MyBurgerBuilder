import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import ItemsStyle from "./NavigationItems.module.css";

const navitem = props => {
  return (
    <ul className={ItemsStyle.NavigationItems}>
      <NavigationItem active>Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
    </ul>
  );
};

export default navitem;
