import {
  ADMIN_LOGIN,
  ADMIN_INFO,
  ADMIN_ACTIVEORDEACTIVE,
  ADMIN_GENERATE_VERIFICATION_CODE,
  ADMIN_USERDETAILS,
} from "../types/admintypes";
import axios from "../../axios";

// /forgotpassword
// https://artcurate-backend.herokuapp.com/currency/   ----------- format currency

export const adminLogin = (history,email, password) => async (dispatch) => {
  console.log(email, password)
  try {
    const result = await axios.post("/admin/login", {email: `${email}`, password: `${password}`})
    dispatch({ type: ADMIN_LOGIN, payload: result.data });
    localStorage.setItem("loginToken", JSON.stringify(result.data));
    history.push("/dashboard")
  } catch (error) {
    alert(error);
  }
};

export const adminInfo = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `/admin/info/${id}`,
    });
    dispatch({ type: ADMIN_INFO, payload: result.data });
    localStorage.setItem("adminInfo", JSON.stringify(result.data));
  } catch (error) {
    alert(error.message);
  }
};

/*export const adminActiveOrDeactive = (id, ["boolean type"(status)]) => async (dispatch) => {
  try {
    const result = await axios({
      method: "put",
      url: `admin/activeDeactivateUser/${id}`,
      data: status
    });
    dispatch({ type: ADMIN_ACTIVEORDEACTIVE, payload: result.data });
  } catch (error) {
    alert(error.message);
  }
};*/

export const admin_generateVerficationCode = (type, id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `/admin/generateVarificationCode/${type}/${id}`,
    });
    dispatch({
      type: ADMIN_GENERATE_VERIFICATION_CODE,
      payload: result.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const admin_InsertNewUser = (userDetails) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: "/admin/insertUserDetails",
      body: {
        userId: "609ab05eabddac700c9e5420",
        city: "String",
        state: "String",
        country: "String",
        pinCode: "String",
        region: "String",
        timezone: "String",
      },
      //body: JSON.stringify(userDetails),
    });
    //dispatch(admin_userDetails())
  } catch (error) {
    alert(error.message);
  }
};

export const admin_emailVandPhoneV =
  (type, id, securityCode) => async (dispatch) => {
    try {
      const result = await axios({
        method: "post",
        url: `admin/varification/${type}/${id}`,
        body: {
          securityCode: 123456,
        },
        // body: JSON.stringify(securityCode),
      });
      console.log(result);
      /*dispatch({})*/
    } catch (error) {
      alert(error.message);
    }
  };

export const admin_userDetails = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `admin/userDetails/${id}`,
    });
    dispatch({ type: ADMIN_USERDETAILS, payload: result.data });
  } catch (error) {
    alert(error.message);
  }
};

export const admin_ProfilePicUpoad = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: `admin/uploadProfilePics/${id}`,
      data: {
        profile: "File type",
      },
    });
    dispatch(adminInfo(id));
  } catch (error) {
    alert(error.message);
  }
};

export const admin_changePassword = (credentials) => async (dispatch) =>{
  console.log(credentials)
  try {
    const result = await axios({
      method: "post",
      url: "admin/updatePassword",
      data: JSON.stringify(credentials),
    });
    alert(result.data);
  } catch (error) {
    alert(error.message);
  }
}

export const admin_forgotPassword = (email) => async (dispatch) => {
  console.log(email)
  try {
    const result = await axios.post("/admin/forgotPassword", {email: `${email}`})
    localStorage.setItem("emailForResetPassword", JSON.stringify(result.data.accepted[0]));
    alert(`reset password link has been sent to this email ${email}`);
  } catch (error) {
    alert(error);
  }
};

export const admin_resetPassword = (history,id,password) => async (dispatch) => {
  console.log(id,password);
  try {
    const result = await axios.post("/admin/changePassword", {id: `${id}`, password : `${password}`})
    localStorage.removeItem("emailForResetPassword");
    alert(result.data);
    history.push("/login")
  } catch (error) {
    alert(error);
  }
};

//how to get query string in json