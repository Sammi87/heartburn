import styles from "./Header.module.css";
import { TITLE } from "../../messages";
import { ReactComponent as LeftArrow } from "../../icons/ic-arrow-left-green.svg";

function Header({ progress, onBack }) {
  const progressStyle = { "--progress": progress + "%" };
  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={onBack}>
        <LeftArrow />
      </button>
      <span className={styles.title}>{TITLE}</span>
      <div className={styles.progress} style={progressStyle} />
    </div>
  );
}

export default Header;
