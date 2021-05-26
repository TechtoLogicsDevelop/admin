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



const ExhibitorsReg = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Exhibitors Registration
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Exhibitors Name *</CLabel>
                    <CInput id="company" placeholder="Exhibitors Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Exhibitors Website *</CLabel>
                    <CInput id="company-website" placeholder="Exhibitors Website" />
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
                    <CLabel htmlFor="phone">Telephone *</CLabel>
                    <CInput id="phone" placeholder="Telephone" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			 
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="fax">Contact Person</CLabel>
                    <CInput id="fax" placeholder="Contact Person" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Designation</CLabel>
                    <CInput id="gst" placeholder="Designation" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				
				  <CFormGroup row className="my-0">
                <CCol xs="">
                  <CFormGroup>  
                   
                     <CCol md="12">
                    <CLabel htmlFor="select">Which best describes your role? *</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">I Recommend Products/ Services </option>
                      <option value="2">I Influence the Final Decsion</option>
                      <option value="3">I Have a Final Sign off</option>
					   <option value="4">Others</option>
                      
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
               <CCol xs="">
                  <CFormGroup>  
                   
                     <CCol md="12">
                    <CLabel htmlFor="select">Which of the below are you most interested in? *</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Marketing</option>
                      <option value="2">Tech</option>
                      <option value="3">Ecommerce</option>
					   <option value="4">Media</option>
                      <option value="5">Culture</option>
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			   
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="logo">Upload Logo</CLabel>
                     <CInputFile id="logo" name="logo"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
              
            
				 Address
            </CCardHeader>
			 <CFormGroup>
			  
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

export default ExhibitorsReg
