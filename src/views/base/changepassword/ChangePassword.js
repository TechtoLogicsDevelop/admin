import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_changePassword } from "../../../app/actions/adminActions";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    let regPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regPassword.test(newPassword) && regPassword.test(confirmPassword)) {
      console.log("second")
      validate_action();
    } else {
      alert("Please enter valid password");
    }
  };

  const validate_action = () => {
    if (newPassword === confirmPassword) {
      let admin_login_token = JSON.parse(localStorage.getItem("loginToken"));
      dispatch(
        admin_changePassword({
          id: admin_login_token.id,
          password: newPassword,
        })
      );
    } else {
      alert(`${newPassword} is not equal to old password ${oldPassword}`);
    }
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader className="text-center">Change Password</CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Old Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="hf-password"
                      name="old-password"
                      placeholder="Old Password"
                      autoComplete="old-password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="newpass">New Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* password */}
                    <CInput
                      type="password"
                      id="newpass"
                      name="newpass"
                      placeholder="New password"
                      autoComplete="newpass"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="hf-password"
                      name="hf-password"
                      placeholder="Confirm Password..."
                      autoComplete="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center">
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={handleSubmit}
              >
                <CIcon name="cil-scrubber" /> Update Password
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ChangePassword;
