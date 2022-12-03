import { INCREMENT, DECREMENT } from "../constants/actionTypes";

const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload?.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload?.count - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
