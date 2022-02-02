import { createContext, useReducer } from "react";
import formData from "../../data/form.json";
import FormReducer from "./FormReducer";
import { NEXT, OUTCOME, PREVIOUS, RESET, SELECT } from "./FormReducer/types";
import { normalizeData } from "../../utils";

const init = () => {
  const normalizedData = normalizeData(formData);

  return {
    ...normalizedData,
    current: { questionId: normalizedData.firstQuestion, answerId: null },
    previousAnswers: [],
    outcome: null,
  };
};

export const FormContext = createContext(init());

function FormContextProvider({ children }) {
  const [state, dispatch] = useReducer(FormReducer, null, init);

  function select(answerId) {
    dispatch({
      type: SELECT,
      payload: { ...state.current, answerId },
    });
  }

  function previous() {
    if (state.previousAnswers.length === 0) {
      return;
    }
    if (state.outcome) {
      dispatch({ type: OUTCOME, payload: null });
    }
    dispatch({ type: PREVIOUS });
  }

  function next() {
    const { questions, current, previousAnswers, answers } = state;

    if (!current) {
      return;
    }

    const { questionId, answerId } = current;
    const { next } = questions[questionId];

    for (let index = 0; index < next.length; index++) {
      const { answered, next_question, outcome, max_score } = next[index];

      // Check if there is a next question
      if (answered === answerId || (!answered && next_question)) {
        dispatch({
          type: NEXT,
          payload: {
            questionId: next_question,
          },
        });
        return;
      }

      // If there's none, check if there's an outcome
      const score = previousAnswers.reduce(
        (acc, curr) => acc + answers[curr.answerId].score,
        0
      );
      if (outcome && (max_score > score || typeof max_score === "undefined")) {
        dispatch({ type: OUTCOME, payload: outcome });
        return;
      }
    }
  }

  function reset() {
    dispatch({ type: RESET, payload: init() });
  }

  return (
    <FormContext.Provider value={{ ...state, select, previous, next, reset }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
