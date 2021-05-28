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

const ChangePassword = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
       
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader className="text-center">
             Change Password
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="newpass">New Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="newpass" id="newpass" name="newpass" placeholder="New password" autoComplete="newpass" />
                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Confirm Password..." autoComplete="confirm-password"/>
                    
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center">
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update Password</CButton> 
            </CCardFooter>
          </CCard>
         
          
          
        </CCol>
      </CRow>
      
      
      
     
      
    </>
  )
}

export default ChangePassword
