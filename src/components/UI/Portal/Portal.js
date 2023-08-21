import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children: rederComponent, destId }) => {
  return ReactDOM.createPortal(rederComponent, document.getElementById(destId));
};

export default Portal;
