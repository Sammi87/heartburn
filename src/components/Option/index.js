import styles from "./Option.module.css";
import { ReactComponent as Checkmark } from "../../icons/ic-checkmark.svg";
import Button from "../Button";

function Option({ id, checked, onSelect, label }) {
  return (
    <Button
      className={styles.button}
      label={label}
      onClick={() => onSelect(id)}
      stroked={!checked}
      icon={
        checked && (
          <span className={styles.checkmark}>
            <Checkmark />
          </span>
        )
      }
      round
    />
  );
}

export default Option;
