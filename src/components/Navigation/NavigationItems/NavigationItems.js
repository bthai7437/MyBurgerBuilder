import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import ItemsStyle from "./NavigationItems.module.css";

const navitem = props => {
  return (
    <ul className={ItemsStyle.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
  );
};

export default navitem;
