import { NEXT, OUTCOME, PREVIOUS, SELECT } from "./types";

function FormReducer(state, action) {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        previousAnswers: [...state.previousAnswers, { ...state.current }],
        current: { ...action.payload },
      };
    case PREVIOUS:
      const lastIndex = state.previousAnswers.length - 1;
      const last = state.previousAnswers[lastIndex];
      return {
        ...state,
        previousAnswers: [...state.previousAnswers.slice(0, lastIndex)],
        current: { ...last },
      };
    case SELECT:
      return {
        ...state,
        current: action.payload,
      };
    case OUTCOME:
      return {
        ...state,
        outcome: action.payload,
      };
    default:
      return state;
  }
}

export default FormReducer;
