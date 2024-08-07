import Footer from "./footer";
import styles from "./main.module.css";
import { PlayIcon } from "./svgIcon";
const Card = ({ children, variant }) => {
  return (
    <div>
      <div className={`${styles.sectionContainer} ${styles[variant]}`}>
        {children}
        
      </div>
    </div>
  );
};

export default Card;
