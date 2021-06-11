import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {admin_resetPassword} from '../../../app/actions/adminActions'
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
  CFormText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Email from "src/views/email/Email";

const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const resetEmail = JSON.parse(localStorage.getItem("emailForResetPassword"));
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const EmailId = query.get("id");
    console.log(EmailId)
    setResetEmailId(EmailId);
    //dispatch({type: 'RESET_EMAIL_ID', payload: id});
  }, []);
  const [resetEmailId,setResetEmailId] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const throwError = (text) => {
    alert(text);
  };
  const handlePasswordChange = () => {
    let regPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!regPassword.test(newPassword)) {
      throwError("Email does not meet the requirements");
    } else {
      console.log(newPassword, confirmPassword, "passwords");
      if (newPassword === confirmPassword) {
        console.log("sent")
        dispatch(admin_resetPassword(props.history,resetEmailId, newPassword));
      } else {
        throwError("new password and confirm password does not match");
      }
    }
    setNewPassword("");
    setConfirmPassword("");
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
                    <h1 className=" text-center">Reset Password</h1>
                    <p className="text-muted text-center">For {resetEmail}.</p>
                    <p className=" text-muted">New Password</p>
                    <CInputGroup className="mb-3">
                      <CInput
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CFormText
                      id="passwordHelpBlock"
                      style={{ margin: "20px 0" }}
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </CFormText>
                    <p className=" text-muted">Confirm Password</p>
                    <CInputGroup className="mb-4">
                      <CInput
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    {/*<CFormText id="passwordHelpBlock" style={{margin:"8px 0", color:"red"}}>
                      {throwError()}
  </CFormText>*/}
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          className="text-center"
                          color="success"
                          className="px-4 "
                          onClick={handlePasswordChange}
                        >
                          Send Link
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

export default ResetPassword;
