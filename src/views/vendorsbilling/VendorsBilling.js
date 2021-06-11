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

const VendorsBilling = () => {
  useEffect(() => {
    let vendor_billinData = JSON.parse(
      localStorage.getItem("vendor_billingAddress")
    );
    if (localStorage.getItem("vendor_billingAddress")) {
      let data = { ...vendor_billinData };
      setVendorBillingAddress(data);
    } else {
      Object.keys(vendorBillingAddress).forEach((k) => (vendorBillingAddress[k] = ""));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("vendor_billingAddress", JSON.stringify(vendorBillingAddress));
  });
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const history = useHistory();
  const [vendorBillingAddress, setVendorBillingAddress] = useState({
    billingAddress: "",
    billingCity: "",
    billingPinCode: "",
    billingCountry: "",
  });

  const handleChange = (e) => {
    setVendorBillingAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => history.push("/addvendors");

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Vendors Billing Address
              <small> Setting</small>
              <DocsLink name="-Input" />
            </CCardHeader>
            <CCardBody>
              <CCardHeader>Billing Address</CCardHeader>
              <CFormGroup>
                <CFormGroup row>
                  <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/addvendors">Back </CHeaderNavLink>
                  </CHeaderNavItem>
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput
                  id="street"
                  placeholder="Enter street name"
                  name="billingAddress"
                  value={vendorBillingAddress.billingAddress}
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
                      value={vendorBillingAddress.billingCity}
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
                      value={vendorBillingAddress.billingPinCode}
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
                  value={vendorBillingAddress.billingCountry}
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

export default VendorsBilling;
