import React from "react";
import styles from "./button.module.css";

const Button = ({ children, variant }) => {
  return (
    <div className={`${styles.yellowButtonContainer} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default Button;
