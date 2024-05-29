import React from "react";
import styles from "./input.module.css";

const Input = ({ label, type, value, setValue, variant }) => {
  return (
    <div className={styles.body}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${styles[variant]}`}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
