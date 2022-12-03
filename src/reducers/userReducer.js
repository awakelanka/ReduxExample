import { LOGOUT, LOGIN, SET_USER } from "../constants/actionTypes";

const initialState = {
  user: {},
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: {
          name: 'Awake'
        }
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
      
    default:
      return state;
  }
};

export default userReducer;
