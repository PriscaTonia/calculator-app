import styles from "./styles.module.css";

const Screen = ({ screenText = "" }) => {
  return <div className={`${styles.screen}`}>{Number(screenText).toLocaleString(undefined, {maximumFractionDigits: 9})}</div>;
};

export { Screen };
