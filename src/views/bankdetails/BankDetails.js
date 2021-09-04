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
  CHeaderNavLink,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const BankDetails = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Bank Details
              <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Bank Code</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Bank Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="text-input">Bank Group Code</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Bank Group Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
               
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Bank Name</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Bank Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                      <CLabel htmlFor="text-input">Short Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Short Name" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                   <CLabel htmlFor="text-input">Branch Name</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Branch Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                      <CLabel htmlFor="text-input">IFSC Code</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="IFSC Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				<CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Local Currency</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Local Currency" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                      <CLabel htmlFor="text-input">Calculation Currency</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Calculation Currency" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
               <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Account Type</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0">Saving Account</option>
                      <option value="1">Current Account</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                      <CLabel htmlFor="text-input">Account Name</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Account Name" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Account Number</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Account Number" />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
                 
              </CForm>
			   <CCardHeader>
              
              <CFormGroup row>
                 
                </CFormGroup>
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

export default BankDetails
