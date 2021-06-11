import { GET_COMPANYPROFILE } from "../types/companyProfileTypes";

import axios from "../../axios";
import { cibTypo3 } from "@coreui/icons";

export const get_companyProfile = () => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: "/companyProfile",
    });
    dispatch({ type: GET_COMPANYPROFILE, payload: result.data });
  } catch (error) {
    alert(error.message);
  }
};

export const add_companyProfile = (companyProfile) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: "/companyProfile/addCompanyProfile",
      body: JSON.stringify(companyProfile),
    });
    //dispatch(get_companyProfile())
    console.log(companyProfile);
    localStorage.removeItem("data");
    localStorage.removeItem("billinAddress");
    localStorage.removeItem("check")
    alert(result.data);
    console.log(result.data);
  } catch (error) {
    alert(error.message);
  }
};
