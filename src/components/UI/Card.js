import React from "react";
import "./Card.css";

const Card = ({ children, className }) => {
  const madeClass = "card" + className;
  return <div className={"card"}>{children}</div>;
};

export default Card;
