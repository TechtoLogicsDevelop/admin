import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_companyProfile } from "../../app/actions/companyProfileActions";
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

function CompanyProfile() {
  const dispatch = useDispatch();
  const billinAddress = JSON.parse(localStorage.getItem("billinAddress"))
    ? JSON.parse(localStorage.getItem("billinAddress"))
    : {};
  const [collapsed, setCollapsed] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const [logo, setLogo] = useState(false); // just in case
  const [favicon, setFavicon] = useState(false) // just in case
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    companyName: "",
    website: "",
    email: "",
    tagLine: "",
    phone: "",
    fax: "",
    gst: "",
    award: "",
    certificate: "",
    metaTag: "",
    metaKeyword: "",
    metaData: "",
    metaDescription: "",
    logo: "",
    favicon: "",
    primaryAddress: "",
    primaryCity: "",
    primaryPinCode: "",
    primaryCountry: "",
    establishedDate: "",
  });
  useEffect(() => {
    let user_companyProfileData = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : {};
    let checkMark = JSON.parse(localStorage.getItem("check"))
      ? JSON.parse(localStorage.getItem("check"))
      : false;
    setChecked(checkMark);
    if (localStorage.getItem("data")) {
      let user_data = { ...user_companyProfileData };
      console.log(user_data, "usersData");
      setData(user_data);
    } else {
      Object.keys(data).forEach((k) => (data[k] = ""));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("check", checked);
  });
  const handleChange = (e) => {
    if (e.target.name == "logo" || e.target.name == "favicon") {
      console.log(e.target.files[0])
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0]
      }));
      e.target.name == "logo" ? setLogo(true): setFavicon(true);
    } else {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = () => {
    if (checked) {
      let Address = {
        billingAddress: data.primaryAddress,
        billingCity: data.primaryCity,
        billingPinCode: data.primaryPinCode,
        billingCountry: data.primaryCountry,
      };
      const companyProfile = { ...Address, ...data };
      console.log(companyProfile);
      dispatch(add_companyProfile(companyProfile));
    } else {
      let companyProfile = { ...data, ...billinAddress };
      console.log(companyProfile);
      dispatch(add_companyProfile(companyProfile));
      console.log("good");
    }
  };
  const handleReset = () => {
    Object.keys(data).forEach((k) => (data[k] = "")); // all object key value will be set to null
  };
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
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Company Name *</CLabel>
                      <CInput
                        id="company"
                        placeholder="Company Name"
                        name="companyName"
                        value={data.companyName}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="tag-line">Tag Line</CLabel>
                      <CInput
                        id="tag-line"
                        placeholder="Tag Line"
                        name="tagLine"
                        value={data.tagLine}
                        onChange={handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="company-website">
                        Company Website *
                      </CLabel>
                      <CInput
                        id="company-website"
                        placeholder="Company Website"
                        name="website"
                        onChange={handleChange}
                        value={data.website}
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
                        value={data.establishedDate}
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
                        onChange={handleChange}
                        value={data.email}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="phone">Phone *</CLabel>
                      <CInput
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChange}
                        value={data.phone}
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
                        onChange={handleChange}
                        value={data.fax}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="gst">Company VAT/ GST *</CLabel>
                      <CInput
                        id="gst"
                        placeholder="VAT/GST No"
                        name="gst"
                        onChange={handleChange}
                        value={data.gst}
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
                        name="award"
                        value={data.awards}
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
                        name="certificate"
                        onChange={handleChange}
                        value={data.certificate}
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
                        onChange={handleChange}
                        value={data.metaTag}
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
                        onChange={handleChange}
                        value={data.metaKeyword}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="meta-data">Meta Data</CLabel>
                      <CTextarea
                        name="metaData"
                        id="textarea-input"
                        rows="3"
                        placeholder="Meta Data..."
                        onChange={handleChange}
                        value={data.metaData}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="meta-description">
                        Meta Description
                      </CLabel>
                      <CTextarea
                        name="metaDescription"
                        id="textarea-input"
                        rows="3"
                        placeholder="Meta Description..."
                        onChange={handleChange}
                        value={data.metaDescription}
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
                        type="file"
                        onChange={handleChange}
                        disabled={logo}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel col md="3" htmlFor="favicon">
                        Favicon Icon
                      </CLabel>
                      <CInputFile
                        id="favicon"
                        type="file"
                        name="favicon"
                        onChange={handleChange}
                        disabled={favicon}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
              <CCardHeader>Company Address</CCardHeader>
              <CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Billing Address same as Primary </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox
                        custom
                        type="checkbox"
                        id="inline-checkbox1"
                        name="inline-checkbox1"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="inline-checkbox1"
                      ></CLabel>
                    </CFormGroup>
                  </CCol>
                  <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/billingaddress">
                      {" "}
                      Enter the Billing Address
                    </CHeaderNavLink>
                  </CHeaderNavItem>
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput
                  id="street"
                  placeholder="Enter street name"
                  name="primaryAddress"
                  onChange={handleChange}
                  value={data.primaryAddress}
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
                      onChange={handleChange}
                      value={data.primaryCity}
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
                      onChange={handleChange}
                      value={data.primaryPinCode}
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
                  onChange={handleChange}
                  value={data.primaryCountry}
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
              <CButton
                type="reset"
                size="sm"
                color="danger"
                onClick={handleReset}
              >
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default CompanyProfile;
