import {
    CHANGE_PASSWORD,
  } from "../types/companyProfileTypes";
  
  import axios from "../../axios";
  import { cibTypo3 } from "@coreui/icons";
  
  export const changePassword = (password) => async (dispatch) => {
      console.log("userInfo", Info)
    try {
      const result = await axios({
        method: "post",
        url: "/changePassword",
      });
      dispatch({ type: GET_COMPANYPROFILE, payload: result.data });
    } catch (error) {
      alert(error.message);
    }
  };