import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { add_vendorData } from "../../app/actions/vendorActions";
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
const AddVendors = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const vendor_billingAddress = JSON.parse(localStorage.getItem("vendor_billingAddress"))
    ? JSON.parse(localStorage.getItem("vendor_billingAddress"))
    : {};
  const dispatch = useDispatch()
  const [vendorChecked, setVendorChecked] = useState(false);
  const [vendorData, setVendorData] = useState({
    vendorName: "",
    vendorType: "",
    vendorWebsite: "",
    establishedDate: "",
    pan: "",
    tan: "",
    gst: "",
    natureOfBuisness: "",
    email: "",
    phone: "",
    mobile: "",
    contact: "",
    fax: "",
    designation: "",
    awards: "",
    certificates: "",
    metaTag: "",
    metaKeyword: "",
    metaData: "",
    metaDescription: "",
    product: "",
    logo: "",
    primaryAddress: "",
    primaryCity: "",
    primaryPinCode: "",
    primaryCountry: "",
  });
  useEffect(() => {
    let vendor_Data = JSON.parse(localStorage.getItem("vendorData")) ? JSON.parse(localStorage.getItem("vendorData")) : {};
    let checkMark = JSON.parse(localStorage.getItem("vendorChecked"))
      ? JSON.parse(localStorage.getItem("vendorChecked"))
      : false;
    setVendorChecked(checkMark);
    if (localStorage.getItem("vendorData")) {
      let data = { ...vendor_Data };
      console.log(data, "usersData");
      setVendorData(data);
    } else {
      Object.keys(vendorData).forEach((k) => (vendorData[k] = ""));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("vendorData", JSON.stringify(vendorData));
    localStorage.setItem("vendorChecked", vendorChecked);
  });

  const handleChange = (e) => {
    if (e.target.name == "logo") {
      console.log(e.target.files[0])
      setVendorData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0]
      }));
      // setLogo(true) => just in case u need
    } else {
      setVendorData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = () => {
    if (vendorChecked) {
      let Address = {
        billingAddress: vendorData.primaryAddress,
        billingCity: vendorData.primaryCity,
        billingPinCode: vendorData.primaryPinCode,
        billingCountry: vendorData.primaryCountry,
      };
      const vendorProfile = { ...Address, ...vendorData };
      console.log(vendorProfile);
      dispatch(add_vendorData(props.history,vendorProfile));
    } else {
      let vendorProfile = { ...vendorData, ...vendor_billingAddress };
      console.log(vendorProfile);
      dispatch(add_vendorData(props.history,vendorProfile));
      console.log("good");
    }
  };
  const handleReset = () => {
    Object.keys(vendorData).forEach((k) => (vendorData[k] = "")); // all object key value will be set to null
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Vendors
              <small> Setting</small>
              <DocsLink name="-Input" />
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Vendor Name *</CLabel>
                      <CInput
                        id="company"
                        placeholder="Vendor Name"
                        name="vendorName"
                        value={vendorData.vendorName}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="tag-line">Vendor Type</CLabel>
                      <CSelect
                        custom
                        name="select"
                        id="select"
                        name="vendorType"
                        value={vendorData.vendorType}
                        onChange={handleChange}
                      >
                        <option value="Select Vendors Type">
                          Select Vendors Type
                        </option>
                        <option value="Artists">Artists</option>
                        <option value="Individuals">Individuals</option>
                        <option value="Businesses">Businesses</option>
                        <option value="Insitutions">Insitutions</option>
                        <option value="Curators">Curators</option>
                        <option value="Collectors">Collectors</option>
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company-website">
                        Vendor Website *
                      </CLabel>
                      <CInput
                        id="company-website"
                        placeholder="Company Website"
                        name="vendorWebsite"
                        value={vendorData.vendorWebsite}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="established">Established Date</CLabel>

                      <CInput
                        type="date"
                        id="date-input"
                        name="establishedDate"
                        placeholder="date"
                        value={vendorData.establishedDate}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">PAN</CLabel>
                      <CInput
                        id="company"
                        placeholder="Pan No"
                        name="pan"
                        value={vendorData.pan}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="tag-line">TAN</CLabel>
                      <CInput
                        id="tag-line"
                        placeholder="Tan No"
                        name="tan"
                        value={vendorData.tan}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Company VAT/ GST *</CLabel>
                      <CInput
                        id="company"
                        placeholder="VAT/GST No"
                        name="gst"
                        value={vendorData.gst}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="tag-line">Nature Of Business</CLabel>
                      <CInput
                        id="tag-line"
                        placeholder="NatureOfBusiness"
                        name="natureOfBuisness"
                        value={vendorData.natureOfBusiness}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="email">Email *</CLabel>
                      <CInput
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={vendorData.email}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="phone">Telephone *</CLabel>
                      <CInput
                        id="phone"
                        placeholder="Telephone"
                        name="phone"
                        value={vendorData.phone}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="fax">Fax</CLabel>
                      <CInput
                        id="fax"
                        placeholder="Fax"
                        name="fax"
                        value={vendorData.fax}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="gst">Mobile No *</CLabel>
                      <CInput
                        id="gst"
                        placeholder="Mobile No"
                        name="mobile"
                        value={vendorData.mobile}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="fax">Contact Person</CLabel>
                      <CInput
                        id="fax"
                        placeholder="Contact Person"
                        name="contact"
                        value={vendorData.contact}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="gst">Designation</CLabel>
                      <CInput
                        id="gst"
                        placeholder="designation"
                        name="designation"
                        value={vendorData.designation}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="awards">Awards</CLabel>
                      <CInput
                        id="awards"
                        placeholder="Awards"
                        name="awards"
                        value={vendorData.awards}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="certificates">Certificates</CLabel>
                      <CInput
                        id="certificates"
                        placeholder="Certificates"
                        name="certificates"
                        value={vendorData.certificates}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="meta-tag">Meta Tag</CLabel>
                      <CInput
                        id="meta-tag"
                        placeholder="Meta Tag"
                        name="metaTag"
                        value={vendorData.metaTag}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="keyword">Meta Keyword</CLabel>
                      <CInput
                        id="keyword"
                        placeholder="Meta Keyword"
                        name="metaKeyword"
                        value={vendorData.metaKeyword}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="meta-data">Meta Data</CLabel>
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="3"
                        placeholder="Meta Data..."
                        name="metaData"
                        value={vendorData.metaData}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="meta-description">
                        Meta Description
                      </CLabel>
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="3"
                        placeholder="Meta Description..."
                        name="metaDescription"
                        value={vendorData.metaDescription}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel col md="3" htmlFor="logo">
                        Upload Logo
                      </CLabel>
                      <CInputFile
                        id="logo"
                        name="logo"
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
              <CCardHeader>Vendor Company Address</CCardHeader>
              <CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Billing Address same as Primary </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        checked={vendorChecked}
                        onChange={() => setVendorChecked(!vendorChecked)}
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="inline-checkbox1"
                      ></CLabel>
                    </CFormGroup>
                  </CCol>
                  <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/vendorsbilling">
                      {" "}
                      Enter the Billing Address
                    </CHeaderNavLink>
                  </CHeaderNavItem>
                  {/*<CHeaderNavItem className="px-3" className="text-right">
                    <CHeaderNavLink to="/vendorsbank">
                      {" "}
                      Bank Details
                    </CHeaderNavLink>
                  </CHeaderNavItem>*/}
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput
                  id="street"
                  placeholder="Enter street name"
                  name="primaryAddress"
                  value={vendorData.primaryAddress}
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
                      name="primaryCity"
                      value={vendorData.primaryCity}
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
                      name="primaryPinCode"
                      value={vendorData.primaryPinCode}
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
                  name="primaryCountry"
                  value={vendorData.primaryCountry}
                  onChange={handleChange}
                />
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}>
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger" onClick={handleReset}>
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AddVendors;
