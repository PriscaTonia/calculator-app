import React from "react";
import styles from "./styles.module.css";

const Button = ({
  size = "small", // "small" || "big"
  label = "label",
  type = "button",
  customClassName="",
  displayExp,
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
      onClick = {displayExp}
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
