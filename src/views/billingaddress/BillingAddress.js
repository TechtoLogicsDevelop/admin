import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
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

const BillingAddress = () => {
  useEffect(() => {
    let user_billinData = JSON.parse(localStorage.getItem("billinAddress"));
    if (localStorage.getItem("billinAddress")) {
      let data = { ...user_billinData };
      setBillingAddress(data);
    } else {
      Object.keys(billingAddress).forEach((k) => (billingAddress[k] = ""));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("billinAddress", JSON.stringify(billingAddress));
  });
  const [collapsed, setCollapsed] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const history = useHistory();
  const [billingAddress, setBillingAddress] = useState({
    billingAddress: "",
    billingCity: "",
    billingPinCode: "",
    billingCountry: "",
  });

  const handleChange = (e) => {
    setBillingAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => history.push("/companyprofile");

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Company Profile
              <small> Setting</small>
              <DocsLink name="-Input" />
            </CCardHeader>
            <CCardBody>
              <CCardHeader>Billing Address</CCardHeader>
              <CFormGroup>
                <CFormGroup row>
                  <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/companyprofile">
                      Back to Company Profile
                    </CHeaderNavLink>
                  </CHeaderNavItem>
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput
                  id="street"
                  placeholder="Enter street name"
                  name="billingAddress"
                  value={billingAddress.billingAddress}
                  onChange={handleChange}
                />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput
                      id="city"
                      placeholder="Enter your city"
                      name="billingCity"
                      value={billingAddress.billingCity}
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput
                      id="postal-code"
                      placeholder="Postal Code"
                      name="billingPinCode"
                      value={billingAddress.billingPinCode}
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput
                  id="country"
                  placeholder="Country name"
                  name="billingCountry"
                  value={billingAddress.billingCountry}
                  onChange={handleChange}
                />
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={handleSubmit}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default BillingAddress;
