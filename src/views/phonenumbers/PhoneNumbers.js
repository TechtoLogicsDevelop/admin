import React from 'react'
import {
  CButton,
  CHeaderNavLink,
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

const PhoneNumbers = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Group Wise Phone Numbers
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Group Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Group 1</p>
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Phone No's</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static"> 9513574682, 9874563210, 852364753915, 9513574682, 9874563210, 852364753915,</p>
                  </CCol>
                </CFormGroup>
               
				
               
               
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
              <CButton type="submit" size="sm" color="Sucess"><CIcon name="cil-scrubber" /><CHeaderNavLink to="/smssetting"> Back</CHeaderNavLink></CButton>&nbsp;&nbsp;
              
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default PhoneNumbers
