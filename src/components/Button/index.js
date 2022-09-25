import React from "react";
import styles from "./styles.module.css";

const Button = ({
  size = "small", // "small" || "big"
  label = "label",
  type = "button",
  customClassName="",
  theme = "theme1",
  buttonGroupName = "operand", //can be "equal" || "operand" || "action"
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        ${styles.button} 
        ${styles[size]} 
        ${styles[buttonGroupName]}
        ${customClassName} 
      `}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
