import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerStyle from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = props => {
  let attachedClasses = [DrawerStyle.SideDrawer, DrawerStyle.Close];
  if (props.open) {
    attachedClasses = [DrawerStyle.SideDrawer, DrawerStyle.Open];
  }
  console.log(attachedClasses);
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={DrawerStyle.Logo}>
          <Logo clicked={props.openClick} />
        </div>
        <div>
          <NavigationItems />
        </div>
      </div>
    </Aux>
  );
};

export default sideDrawer;
