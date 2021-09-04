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




const AddLeaveGroupEmp = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Add Leave Group Employee
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    
			      <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Employee / Company</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Company 1</option>
                      <option value="2">Company 2</option>
                      <option value="3">Company 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Leave Group</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Group 1 </option>
                      <option value="2">Group 2 </option>
                      <option value="3"> Group 3 </option>
					   <option value="4">Group 4 </option>
                     
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

export default AddLeaveGroupEmp