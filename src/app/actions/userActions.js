import {
  USER_INFO,
  USER_LOGIN,
  USER_SIGNUP,
  USER_ACTIVEORDEACTIVE,
  USER_USERDETAILS,
  USER_GENERATE_VERIFICATION_CODE,
} from "../types/usertypes";
import axios from "../../axios";

// https://artcurate-backend.herokuapp.com/user/login
// /forgotpassword
// https://artcurate-backend.herokuapp.com/currency/   ----------- format currency

export const userLogin = (history,email, password) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: "/user/login",
      body: {
        email: email,
        password: password,
      },
    });
    dispatch({ type: USER_LOGIN, payload: result.data });
    localStorage.setItem("loginToken", JSON.stringify(result.data));
    history.push("/dashboard")
  } catch (error) {
    alert(error.message);
  }
};

export const userInfo = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `/user/info/${id}`,
    });
    dispatch({ type: USER_INFO, payload: result.data });
    localStorage.setItem("userInfo", JSON.stringify(result.data));
  } catch (error) {
    alert(error.message);
  }
};

export const userSignUp = (credentials) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: `/user/signup`,
      //body: JSON.stringify(credentials)
      body: {
        role: "Artist",
        email: "swarup.saha004@hotmail.com",
        password: "Swarup@123",
      },
    });
    //dispatch({ type: USER_SIGNUP, payload: result.data });
  } catch (error) {
    alert(error.message);
  }
};

user / addUsername / { id };

export const user_addUserInfo = (username, id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "put",
      url: `user/addUsername/${id}`,
      //body: JSON.stringify(username)
      body: {
        username: "Swaroop",
      },
    });
    //dispatch();
  } catch (error) {
    alert(error.message);
  }
};

export const user_addUserInfo = (userinfo, id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "put",
      url: `user/addUserInfo/${id}`,
      //body: JSON.stringify(userinfo)
      body: {
        fname: "Swarup",
        lname: "Saha",
        countryCode: "91",
        phone: 9035845781,
        org: "Artcurate",
      },
    });
    //dispatch();
  } catch (error) {
    alert(error.message);
  }
};

/*export const user_activeOrDeactive = (/*status[boolean], id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "put",
      url: `user/activeDeactivateUser/${id}`,
      //body: JSON.stringify(status)
      body: {
        status: "boolean,"
      },
    });
    dispatch({ type : USER_ACTIVEORDEACTIVE, payload: result.data});
  } catch (error) {
    alert(error.message);
  }
};*/

export const user_generateVerficationCode = (type, id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `/user/generateVarificationCode/${type}/${id}`,
    });
    dispatch({
      type: USER_GENERATE_VERIFICATION_CODE,
      payload: result.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const user_InsertNewUser = (userDetails) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: "/user/insertUserDetails",
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

export const user_emailVandPhoneV =
  (type, id, securityCode) => async (dispatch) => {
    try {
      const result = await axios({
        method: "post",
        url: `user/varification/${type}/${id}`,
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

export const user_userDetails = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: `user/userDetails/${id}`,
    });
    dispatch({ type: USER_USERDETAILS, payload: result.data });
  } catch (error) {
    alert(error.message);
  }
};

export const user_ProfilePicUpoad = (id) => async (dispatch) => {
  try {
    const result = await axios({
      method: "post",
      url: `user/uploadProfilePics/${id}`,
      data: {
        profile: "File type",
      },
    });
    //dispatch(userInfo(id));
  } catch (error) {
    alert(error.message);
  }
};
