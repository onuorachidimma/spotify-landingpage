import iconStyles from "./sidebar.module.css";
const SideBarIcon = (props) => {
  return (
    <div className={iconStyles.iconsContainer}>
      <div className={iconStyles.icons}>{props.icon}</div>
      <a href="#">{props.iconText}</a>
    </div>
  );
};

export default SideBarIcon;
