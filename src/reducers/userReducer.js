import { LOGOUT, LOGIN, SET_USER } from "../constants/actionTypes";

const initialState = {
  user: {
    name: "Awake"
  },
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload?.user || {}
      };
    default:
      return state;
  }
};

export default userReducer;
