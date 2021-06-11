import React, { useState } from "react";
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
import {useDispatch} from 'react-redux'
import { admin_forgotPassword } from "../../../app/actions/adminActions";

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!regEmail.test(email)) {
      alert("Input valid email address")
    } else {
      dispatch(admin_forgotPassword(email))
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
                    <h1 className=" text-center">Forgot Your Password?</h1>
                    <p className="text-muted text-center">
                      Enter your email address for which reset password link
                      will be sent.
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          className="text-center"
                          color="success"
                          className="px-4 "
                          onClick={handleSubmit}
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

export default ForgotPassword;
