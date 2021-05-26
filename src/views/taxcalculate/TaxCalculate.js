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

const TaxCalculate = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Set the Tax Calculate
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tax Calculation Method Based On</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Option </option>
                      <option value="1">Unit Price</option>
                      <option value="2">Row Total</option>
					  <option value="3">Total</option>
					  
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tax Calculation Based On</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                     <option value="0">Select Address </option>
                      <option value="1">Billing Address</option>
                      <option value="2">Primary Address</option>
					  <option value="3">Shipping Address</option>
					  <option value="3">Shipping Origin</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Catalog Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                     
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Shipping Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                     
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Apply Customer Tax</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                     
					   <option value="0">Select </option>
                      <option value="1">After Discount</option>
                      <option value="2">Before Discount</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Apply Discount on Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                       <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Apply Tax On</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                     
					   <option value="0">Select class</option>
                      <option value="1">Custom price if available</option>
                      <option value="2"> Original price only</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Enable Cross-Border Trade</CLabel>
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

export default TaxCalculate
