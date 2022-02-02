import { NEXT, OUTCOME, PREVIOUS, RESET, SELECT } from "./types";

function FormReducer(state, action) {
  switch (action.type) {
    case RESET:
      return action.payload;
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
        previousAnswers: action.payload
          ? [...state.previousAnswers, { ...state.current }]
          : [...state.previousAnswers],
        outcome: action.payload,
      };
    default:
      return state;
  }
}

export default FormReducer;
