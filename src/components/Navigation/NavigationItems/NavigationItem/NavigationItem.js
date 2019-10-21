import React from "react";
import ItemStyle from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const navItem = props => {
  return (
    <li className={ItemStyle.NavigationItem}>
      <NavLink
        to={props.link}
        activeClassName={ItemStyle.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;
