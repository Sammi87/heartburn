import styles from "./ContentBody.module.css";
import Heading from "../Heading";
import Button from "../Button";

function ContentBody({ title, children, buttonProps }) {
  return (
    <div className={styles.content}>
      <div>
        <Heading text={title} />
        {children}
      </div>
      <Button {...buttonProps} />
    </div>
  );
}

export default ContentBody;
