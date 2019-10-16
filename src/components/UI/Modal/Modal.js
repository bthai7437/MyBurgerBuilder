import React from "react";
import ModalStyle from "./Modal.module.css";
const modal = props => {
  return <div className={ModalStyle.Modal}>{props.children}</div>;
};

export default modal;
