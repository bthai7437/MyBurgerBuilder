import React from "react";
import Aux from "../../hoc/Auxiliary";
import style from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <div>Title,Sidebar,Backdrop</div>
      <main className={style.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
