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

const RoleSetting = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Set Role for Employees
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Employee Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Yiorgos Avraamu</p>
                  </CCol>
                </CFormGroup>
				
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Employee Group </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Contract</option>
                      <option value="2">Permananet</option>
                      <option value="3">Trainer</option>
					   <option value="4">Part-Time</option>
                      <option value="5">Full-Time</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Role Group</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Software</option>
                      <option value="2">HR</option>
                      <option value="3">Maintainance</option>
					   <option value="4">Security</option>
                      <option value="5">Services</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Role</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Software Developer</option>
                      <option value="2">Software Designer</option>
                      <option value="3">Software Tester</option>
					   <option value="4">System Admin</option>
                      <option value="5">Graphic Designer</option>
                      <option value="6">Front-End Developer</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="first" placeholder=" Employee Id" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Of Join</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default RoleSetting
