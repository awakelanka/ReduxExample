import { INCREMENT, DECREMENT } from "../constants/actionTypes";

const counterReducer = (state = {count: 0}, action) => {
  const {count} = state;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0
      };
    default:
      return state;
  }
};

export default counterReducer;
