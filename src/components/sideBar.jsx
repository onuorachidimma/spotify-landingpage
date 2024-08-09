import React from "react";
import SideBarIcon from "./sideBarIcons";
import styles from "./sidebar.module.css";
import Button from "./button";
import buttonStyles from "./button.module.css"
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  Logo,
  PlusIcon,
  GlobeIcon,
} from "./svgIcon";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHomeStory}>
        <div>
          <Logo />
        </div>
        <div className={styles.sideBarIcons} id="me">
          <SideBarIcon icon={<HomeIcon />} iconText="Home" />
        </div>
        <div className={styles.sideBarIcons}>
          <SideBarIcon icon={<SearchIcon />} iconText="Search" />
        </div>
      </div>

      <div className={styles.sideaBarLibrary}>
        <div className={styles.libraryAndPlusContainer}>
          <div className={styles.libraryIcons}>
            <SideBarIcon icon={<LibraryIcon />} iconText="Library" />
          </div>
          <div className={styles.plusIcon}>
            <PlusIcon />
          </div>
        </div>

        <div className={styles.sidebarPlaylistAndPodcast}>
          <div>
            <p className={styles.create}>Create your first playlist</p>
            <p className={styles.todo}>It's easy, we'll help you</p>
            <Button variant="whiteBgwithThinPadding">
              <button type="button" className={buttonStyles.spotifyBtns}>
                Create playlist
              </button>
            </Button>
          </div>
          <div>
            <p className={styles.create}>Let's find some podcasts to folow</p>
            <p className={styles.todo}>We'll keep you updated on new episodes</p>
            <div>
            <Button variant="whiteBgwithThinPadding">
              <button type="button" className={buttonStyles.spotifyBtns}>
                Create podcast
              </button>
            </Button>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className={styles.libraryFooter}>
          <ul>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Safety & Privacy Center</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">About Ads</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div className={styles.languageContainer}>
          <div><GlobeIcon /></div>
          <a href="#">English</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
