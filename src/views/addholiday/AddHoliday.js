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




const AddHoliday = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add Holiday
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website"> Name</CLabel>
                    <CInput id="company-website" placeholder=" Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                  <CLabel htmlFor="date-input">Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Status</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Full Day</option>
                      <option value="2">Half Day</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Country</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Country 1</option>
                      <option value="2">Country 2</option>
                     
                    </CSelect>
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

export default AddHoliday
