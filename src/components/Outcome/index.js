import styles from "./Outcome.module.css";
import { BACK_TO_START, BOOK_MEETING, THANK_YOU } from "../../messages";
import Button from "../Button";
import { ReactComponent as ArrowRightWhite } from "../../icons/ic-arrow-right-white.svg";
import { useContext } from "react";
import { FormContext } from "../../context/FormContextProvider";
import ContentBody from "../ContentBody";

function Outcome({ message, showBooking }) {
  const { reset } = useContext(FormContext);
  return (
    <ContentBody
      title={THANK_YOU}
      buttonProps={{ label: BACK_TO_START, secondary: true, onClick: reset }}
    >
      <p>{message}</p>
      {showBooking && (
        <Button
          className={styles.full}
          label={BOOK_MEETING}
          icon={<ArrowRightWhite />}
        />
      )}
    </ContentBody>
  );
}

export default Outcome;
