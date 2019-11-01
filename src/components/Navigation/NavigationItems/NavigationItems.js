import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import ItemsStyle from "./NavigationItems.module.css";

const navitem = props => {
  const isAuth = !props.isAuthenticated ? (
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  ) : (
    <NavigationItem link="/logout">Logout</NavigationItem>
  );
  const isOrder = props.isAuthenticated ? (
    <NavigationItem link="/orders">Orders</NavigationItem>
  ) : null;
  return (
    <ul className={ItemsStyle.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {isOrder}
      {isAuth}
    </ul>
  );
};

export default navitem;
