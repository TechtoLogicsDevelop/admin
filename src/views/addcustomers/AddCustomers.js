import React from 'react'
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const AddCustomers = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Customers
              <small> Setting</small>
			  <DocsLink name="-Input"/>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">First Name *</CLabel>
                    <CInput id="first" placeholder="First Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Last Name</CLabel>
                    <CInput id="last" placeholder="Last Name" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email *</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="phone">Phone No *</CLabel>
                    <CInput id="phone" placeholder="Phone No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Gender</CLabel>
                  </CCol>
                     
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Female</CLabel>
                    </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Date of Birth</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">GST No *</CLabel>
                    <CInput id="company" placeholder="GST No" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Nature Of Business</CLabel>
                    <CInput id="tag-line" placeholder="Nature Of Business" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			   
			   
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="picture">Profile Picture</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
              
            
				Customer Home Address
            </CCardHeader>
			 <CFormGroup>
			   <CFormGroup row>
                  <CCol md="6">
                    <CLabel>Office Address same as Home Address </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1"></CLabel>
                    </CFormGroup>
                   
                  </CCol>
				 
          <CHeaderNavLink to="/customeroffice"> Office Address</CHeaderNavLink>&nbsp; | &nbsp;<CHeaderNavLink to="/customerotheradd"> Other Address</CHeaderNavLink>
        
		
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
            
      
      </CRow>
     
     
    </>
  )
}

export default AddCustomers
