import React from "react";
import ToolbarStyle from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Icon from "../../UI/Icon/Icon";

const toolbar = props => {
  return (
    <header className={ToolbarStyle.Toolbar}>
      <div>
        <Icon clicked={props.openClick} />
      </div>
      <div className={ToolbarStyle.Logo}>
        <Logo />
      </div>
      <nav className={ToolbarStyle.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
