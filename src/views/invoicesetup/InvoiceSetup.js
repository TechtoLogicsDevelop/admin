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




const InvoiceSetup = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Invoice Setup
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Invoice Start No</CLabel>
                    <CInput id="company-website" placeholder="Format" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Default Tax Rate (%)</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Invoice Company Name & Address</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Address..." 
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Invoice Footer Information</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Address..." 
                    />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
                
                
              </CForm>
			
              
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

export default InvoiceSetup
