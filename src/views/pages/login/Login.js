import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../../../app/actions/adminActions";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CHeaderNavLink,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginToken = useSelector((state) => state.adminActions.loginToken);
  //const userInfo = localStorage.getItem("userInfo");
  /*useEffect(() => {
    if (loginToken!= null) {
      history.push("/dashboard");
    }
  }, [loginToken]);*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailValidation = (em) => {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!regEmail.test(em)) {
      return false;
    } else {
      return true;
    }
  };
  const passwordValidation = (pa) => {
    let regPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!regPassword.test(pa)) {
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = () => {
    if (emailValidation(email) && passwordValidation(password)) {
      console.log("valid");
      dispatch(adminLogin(props.history,email, password));
    } else {
      alert("in valid email and password");
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CCard color="white" className="text-white text-center">
                      <CCardBody>
                        <img src={"avatars/main-logo-black.png"} />
                      </CCardBody>
                    </CCard>
                    <h1 className=" text-center">Login</h1>
                    <p className="text-muted text-center">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        name="email"
                        placeholder="Username"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          className="text-center"
                          color="success"
                          className="px-4 "
                          onClick={onSubmit}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          <CHeaderNavLink to="/forgotpassword">
                            Forgot password?{" "}
                          </CHeaderNavLink>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
