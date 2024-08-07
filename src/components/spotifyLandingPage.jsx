import { useRef, useState, useEffect } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import SignupFooter from "./signUpFooter";
import styles from "./spotifyLandingPage.module.css";
import popularArtist1 from "../../src/assets/images/popularArtist1.jpeg";
import Button from "./button";
import buttonStyles from "./button.module.css";
import mainStyles from "./main.module.css";
import Main from "./main";

const SpotifyLandingPage = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const sidebarRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = e.clientX;
    if (newWidth >= 250 && newWidth <= 400) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const handleResize = () => {
      // Logic to remove one picture container if needed
      const mainContent = document.querySelector(`.${styles.mainContent}`);
      const children = Array.from(mainContent.children);
      const containerWidth = mainContent.clientWidth;

      children.forEach((child, index) => {
        if (containerWidth < (index + 1) * 200) {
          child.style.display = "none";
        } else {
          child.style.display = "block";
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={sidebarRef}
        className={styles.sidebar}
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar />
        <div className={styles.resizer} onMouseDown={handleMouseDown} />
      </div>
      <div className={styles.mainContent}>
        <Main />
      </div>
      <SignupFooter />
    </div>
  );
};

export default SpotifyLandingPage;
