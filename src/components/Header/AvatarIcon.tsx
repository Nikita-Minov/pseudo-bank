import styles from "../../assets/styles/components/avatar-icon.module.css";
import avatar from "../../assets/img/avatar.png";

const AvatarIcon = () => {
  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="" />
    </div>
  );
};
export default AvatarIcon;
