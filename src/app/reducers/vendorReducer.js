import {
    VENDER_DATA
  } from "../types/vendorTypes";
  
  const initialState = {
    vendor_data : []
  };
  
  export const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
      case VENDER_DATA:
        return {
          ...state,
          vendor_data: action.payload,
        };
      default:
        return state;
    }
  };
  