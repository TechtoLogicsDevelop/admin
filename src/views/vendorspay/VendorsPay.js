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

const VendorsPay = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add New Vendors Pay
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Vendor</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select Vendor</option>
					  <option value="1"> Vendor 1</option>
                      <option value="2">Vendor 2 </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Payment Mode</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Cash</option>
                      <option value="2">Check </option>
                      <option value="3"> Online Transfer</option>
                      <option value="4">Card </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Amount</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Amount" />
                     
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			    <CFormGroup row className="my-0">
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select Ledger</option>
					   <option value="1"> Bank</option>
                      <option value="2">Cash in Bank</option>
                      <option value="3"> Cash In hand</option>
                      
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Remarks</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Remarks.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  
			 
        
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save & Continue</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
    
     
    
     
    </>
  )
}

export default VendorsPay
