import { useContext } from "react";
import styles from "./App.module.css";
import { FormContext } from "./context/FormContextProvider";
import Wizard from "./components/Wizard";

function App() {
  const {
    questions,
    current,
    answers,
    previousAnswers,
    previous,
    next,
    select,
    outcome,
  } = useContext(FormContext);

  const currentQuestion = questions[current.questionId];

  return (
    <div className={styles.container}>
      <Wizard />
    </div>
  );
}

export default App;
