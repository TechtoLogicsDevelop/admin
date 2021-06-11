import { GET_COMPANYPROFILE } from "../types/companyProfileTypes";

const initialState = {
  companyProfileData: [],
};

export const companyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANYPROFILE:
      return {
        ...state,
        companyProfileData: action.payload,
      };
    default:
      return state;
  }
};
