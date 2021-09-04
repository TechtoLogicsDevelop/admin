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

const AddTimetable = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add New Timetable
             
            </CCardHeader>
            <CCardBody>
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			
                <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				   <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Subject</option>
                      <option value="1">Subject 1</option>
                      <option value="2">Subject 2</option>
                      <option value="3">Subject 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				     <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Teacher</option>
                      <option value="1">Teacher 1</option>
                      <option value="2">Teacher 2</option>
                      <option value="3">Teacher 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="date-input">From</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="date-input">To</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
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

export default AddTimetable
