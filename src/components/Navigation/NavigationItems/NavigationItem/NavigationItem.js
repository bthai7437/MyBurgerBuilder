import React from "react";
import ItemStyle from "./NavigationItem.module.css";
const navItem = props => {
  return (
    <li className={ItemStyle.NavigationItem}>
      <a href={props.link} className={props.active ? ItemStyle.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navItem;
