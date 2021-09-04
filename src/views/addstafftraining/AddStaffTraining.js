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


const AddStaffTraining = () => {

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add Staff Training Course
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			   <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Staff </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Staff 1</option>
                      <option value="1">Staff 2 </option>
                      <option value="2"> Staff 3</option>
                      <option value="3">Staff 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Training Course </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Accountancy</option>
                      <option value="1">IT </option>
                      <option value="2"> Business</option>
                      <option value="3">Services </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Status </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Scheduled</option>
                      <option value="1">Atteneded </option>
                      <option value="2"> Non- Attened</option>
                     
                     
                    </CSelect>
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

export default AddStaffTraining
