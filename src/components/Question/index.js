import styles from "./Question.module.css";
import Option from "../Option";
import { ReactComponent as ArrowRightGray } from "../../icons/ic-arrow-right-gray.svg";
import { ReactComponent as ArrowRightWhite } from "../../icons/ic-arrow-right-white.svg";
import { NEXT } from "../../messages";
import ContentBody from "../ContentBody";

function Question({ text, answers, selected, onSelect, onNext }) {
  return (
    <ContentBody
      title={text}
      buttonProps={{
        disabled: !selected,
        label: NEXT,
        onClick: onNext,
        icon: !selected ? <ArrowRightGray /> : <ArrowRightWhite />,
      }}
    >
      <div className={styles.answers}>
        {answers.map(({ id, label }, index) => {
          return (
            <Option
              key={id}
              id={id}
              onSelect={onSelect}
              checked={id === selected}
              label={label}
            />
          );
        })}
      </div>
    </ContentBody>
  );
}

export default Question;
