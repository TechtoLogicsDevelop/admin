import {
    VENDER_DATA
  } from "../types/vendorTypes";
  import axios from "../../axios";

  export const get_vendorData = (history,id) => async (dispatch) => {
    try {
      const result = await axios({
        method: "get",
        url: `contactsMaster/vendors/update/${id}`,
      });
      dispatch({ type: VENDER_DATA, payload: result.data });
    } catch (error) {
      alert(error.message);
    }
  };

export const add_vendorData = (history,vendorProfile) => async (dispatch) => {
    console.log(vendorProfile);
    try {
      const result = await axios.post("/contactsMaster/vendors/addDetails", {vendorProfile})
      localStorage.removeItem("vendorData");
      localStorage.removeItem("vendorChecked");
      localStorage.removeItem("vendor_billingAddress");
      alert(result.data);
      history.push("/base/vendors")
    } catch (error) {
      alert(error);
    }
  };