import {
  USER_LOGIN,
  USER_INFO,
  USER_SIGNUP,
  USER_ACTIVEORDEACTIVE,
  USER_GENERATE_VERIFICATION_CODE,
  USER_USERDETAILS,
} from "../types/usertypes";

const initialState = {
  loginToken: null,
  userInfo: null,
  // userSignUp: null,
  status: null,
  generatedVerificationCode: null,
  userDetails: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loginToken: action.payload,
      };
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    /*case USER_SIGNUP:
      return {
        ...state,
        userSignUp: action.payload,
      };
    case USER_ACTIVEORDEACTIVE:
      return {
        ...state,
        status:action.payload
      };*/
    case USER_GENERATE_VERIFICATION_CODE:
      return {
        ...state,
        generatedVerificationCode: action.payload,
      };
    case USER_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };

    default:
      return state;
  }
};
