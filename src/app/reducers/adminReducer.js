import {
  ADMIN_LOGIN,
  ADMIN_INFO,
  ADMIN_ACTIVEORDEACTIVE,
  ADMIN_GENERATE_VERIFICATION_CODE,
  ADMIN_USERDETAILS,
} from "../types/admintypes";

const initialState = {
  loginToken: null,
  adminInfo: null,
  status: null,
  generatedVerificationCode: null,
  userDetails: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
        loginToken: action.payload,
      };
    case ADMIN_INFO:
      return {
        ...state,
        adminInfo: action.payload,
      };
    /*/case ADMIN_ACTIVEORDEACTIVE:
      return{
      ...state,
      status: action.payload
    }*/
    case ADMIN_GENERATE_VERIFICATION_CODE:
      return {
        ...state,
        generatedVerificationCode: action.payload,
      };
    case ADMIN_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };

    default:
      return state;
  }
};
