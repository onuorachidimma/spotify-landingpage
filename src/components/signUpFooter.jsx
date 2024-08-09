import styles from "./signupFooter.module.css";
import Button from "./button";
import buttonStyles from "./button.module.css";
const SignupFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>

      <div className={styles.footerSignup}>
        <Button variant="whiteBgwithLongPadding">
          <button className={buttonStyles.spotifyBtns}>Sign Up for free</button>
        </Button>
      </div>
    </div>
  );
};

export default SignupFooter;
