import styles from "./main.module.css";
import Button from "./button";
import buttonStyles from "./button.module.css";
import { PreviousIcon, NextIcon } from "./svgIcon";
const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.nextPrevContainer}>
        <PreviousIcon />
        <NextIcon />
      </div>
      <div className={buttonStyles.navButtonContsiner}>
        <Button variant="noBg">
          <button className={buttonStyles.spotifyBtns}>Sign up</button>
        </Button>

        <Button variant="whiteBgwithLongPadding">
          <button className={buttonStyles.spotifyBtns}>Log in</button>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
