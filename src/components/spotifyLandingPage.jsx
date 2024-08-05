import { useRef, useState } from "react";
import SideBar from "./sideBar";
import Footer from "./footer";
import SignupFooter from "./signUpFooter";
import styles from "./spotifyLandingPage.module.css";

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
        <Footer />
      </div>
      <SignupFooter />
    </div>
  );
};

export default SpotifyLandingPage;
