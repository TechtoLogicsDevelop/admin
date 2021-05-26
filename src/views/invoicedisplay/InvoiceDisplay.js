import React from 'react'
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const InvoiceDisplay = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Invoice Display Settings
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Subtotal</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Shipping Amount</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Gift Wrapping Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Printed Card Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Include Tax in Order Total</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
					  
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Full Tax Summary</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
					  
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Zero Tax Subtotal</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
					  
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				
				 
				 
                
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save Config</CButton>&nbsp;&nbsp;
             
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default InvoiceDisplay
