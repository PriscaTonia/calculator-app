import React from "react";
import { Button } from "../../components";
import styles from "./styles.module.css";

const Keypad = ({handleKeyPress}) => {

  const keys_values = [
    {
      label: 7,
      size: "small",
      customClassName: "seven",
      buttonGroupName: "operand",
    },
    {
      label: 8,
      size: "small",
      customClassName: "eight",
      buttonGroupName: "operand",
    },
    {
      label: 9,
      size: "small",
      customClassName: "nine",
      buttonGroupName: "operand",
    },
    {
      label: "DEL",
      size: "small",
      customClassName: styles.del,
      buttonGroupName: "action",
    },
    {
      label: 4,
      size: "small",
      customClassName: "four",
      buttonGroupName: "operand",
    },
    {
      label: 5,
      size: "small",
      customClassName: "five",
      buttonGroupName: "operand",
    },
    {
      label: 6,
      size: "small",
      customClassName: "six",
      buttonGroupName: "operand",
    },
    {
      label: "+",
      size: "small",
      customClassName: "plus",
      buttonGroupName: "operand",
    },
    {
      label: 1,
      size: "small",
      customClassName: "one",
      buttonGroupName: "operand",
    },
    {
      label: 2,
      size: "small",
      customClassName: "two",
      buttonGroupName: "operand",
    },
    {
      label: 3,
      size: "small",
      customClassName: "three",
      buttonGroupName: "operand",
    },
    {
      label: "-",
      size: "small",
      customClassName: "minus",
      buttonGroupName: "operand",
    },
    {
      label: ".",
      size: "small",
      customClassName: "dot",
      buttonGroupName: "operand",
    },
    {
      label: 0,
      size: "small",
      customClassName: "zero",
      buttonGroupName: "operand",
    },
    {
      label: "/",
      size: "small",
      customClassName: "divide",
      buttonGroupName: "operand",
    },
    {
      label: "x",
      size: "small",
      customClassName: "multiply",
      buttonGroupName: "operand",
    },
    {
      label: "RESET",
      size: "big",
      customClassName: styles.reset,
      buttonGroupName: "action",
    },
    {
      label: "=",
      size: "big",
      customClassName: styles.enter,
      buttonGroupName: "equal",
    },
  ];
  return (
    <div className={`${styles.keypad} `}>
      {keys_values.map((singleKey) => {
        return <Button key={singleKey.label} {...singleKey} handleKeyPress= {handleKeyPress} />;
      })}
    </div>
  );
};

export { Keypad };
