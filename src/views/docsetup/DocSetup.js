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
  CPopover,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const DocSetup = () => {
 

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Purchase & Sales Doc Settings
              <div className="text-right">
			 <CHeaderNavLink   to="/miscellaneous">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Purchase Order Format</CLabel>
                  </CCol>
                 <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="PO-2021-01" />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Purchase Invoice Format</CLabel>
                  </CCol>
                 <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="PI-2021-01" />
                  </CCol>
                </CFormGroup>
				 
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Sales Quatation Format</CLabel></CCol>
                 <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="SQ-2021-01" />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Sales Order Format</CLabel></CCol>
                 <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="SO-2021-01" />
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3"><CLabel>Sales Invoice Format</CLabel></CCol>
                 <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="SI-2021-01" />
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

export default DocSetup
