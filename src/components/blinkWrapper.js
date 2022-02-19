import React from "react";
import "./animationStyle.css";

const BlinkWrapper = ({ children }) => {
  return <span className="blink">{children}</span>;
};

export default BlinkWrapper;
