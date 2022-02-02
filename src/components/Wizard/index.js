import styles from "./Wizard.module.css";
import Header from "../Header";
import Question from "../Question";
import { useContext } from "react";
import { FormContext } from "../../context/FormContextProvider";
import Outcome from "../Outcome";

function Wizard(props) {
  const {
    questions,
    previousAnswers,
    current,
    answers,
    previous,
    next,
    select,
    outcomes,
    outcome,
  } = useContext(FormContext);

  const currentQuestion = questions[current.questionId];

  const questionAnswers = currentQuestion.answers.map(
    (answer) => answers[answer]
  );

  const result = outcome && outcomes[outcome];

  return (
    <div className={styles.container}>
      <Header
        onBack={previous}
        progress={
          outcome
            ? 100
            : (100 / Object.keys(questions).length) * previousAnswers.length
        }
      />
      {!result ? (
        <Question
          text={currentQuestion.question_text}
          answers={questionAnswers}
          onSelect={select}
          selected={current.answerId}
          onNext={next}
        />
      ) : (
        <Outcome
          message={result.text}
          showBooking={result.show_booking_button}
        />
      )}
    </div>
  );
}
export default Wizard;
