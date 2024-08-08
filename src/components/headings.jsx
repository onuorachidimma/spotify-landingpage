import styles from "./headings.module.css";
const Headings = (props) => {
  return (
    <div className={styles.headingsContainer}>
      <a href="#" className={styles.heading}>
        {props.heading}
      </a>
      <a href="#" className={styles.show}>
        {props.showAll}
      </a>
    </div>
  );
};

export default Headings;
