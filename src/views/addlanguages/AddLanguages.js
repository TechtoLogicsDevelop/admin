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

const AddLanguages = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add the New Languages
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Country Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Country Name" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Official Language</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Official Language" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Other Language</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Other Language" />
                   
                  </CCol>
                </CFormGroup>
				
				 
				   <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Currency</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Currency</option>
                      <option value="1">India</option>
                      <option value="2">Australia</option>
                     
                      
                    </CSelect>
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

export default AddLanguages
