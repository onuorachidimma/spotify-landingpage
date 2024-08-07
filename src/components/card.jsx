import styles from "./main.module.css";

const Card = ({ children, variant }) => {
  return (
    <div className={`${styles.sectionContainer} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default Card;
