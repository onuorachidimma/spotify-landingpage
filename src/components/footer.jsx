import styles from "./footer.module.css";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "./svgIcon";
const Footer = ({ children, variant, navVariant }) => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerSetionsContainer}>
          <div className={styles.footerSection}>
            <p>Company</p>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">For the Records</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <p>Communities</p>
            <ul>
              <li>
                <a href="">For Artists</a>
              </li>
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Advertising</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Vendors</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <p>Useful Links</p>
            <ul>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Free Mobile App</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <p>Spotify Plans</p>
            <ul>
              <li>
                <a href="">Premium Individual</a>
              </li>
              <li>
                <a href="">Premium duo</a>
              </li>
              <li>
                <a href="">Premium Family</a>
              </li>
              <li>
                <a href="">Premium Student</a>
              </li>
              <li>
                <a href="">Premium Free</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocialMediaSvgContainer}>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <span>&copy;</span> 2024 Spotfy AB
        </p>
      </div>
    </>
  );
};

export default Footer;
