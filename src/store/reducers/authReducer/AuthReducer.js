import { LOGIN, LOGOUT, SIGNUP, GET_USER_ON_AUTH_STATE_CHANGE } from "../../types/Types";
const initialState = {
  isUserLoggedIn: false,
  user: {},
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isUserLoggedIn: false,
        user:{},
      };
    }
    case SIGNUP: {
      return {
        ...state,
        isUserLoggedIn: true,
        userData : action.payload
      };
    }

    case GET_USER_ON_AUTH_STATE_CHANGE: {
      return {
        ...state,
        isUserLoggedIn: true,
        user:action.payload
      };
    }
    default:
      return state;
  }
};
