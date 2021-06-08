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
import { DocsLink } from 'src/reusable'

const AdvancedStoreSetup = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Advanced Store Setup
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Allow Purchasing?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes,Allow people to purchase from store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Allow Selling?</CLabel></CCol>
                 <CCol  md="9">
                   <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox2" 
                        name="checkbox2" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2"> Yes,Allow people Sell to my store</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Allow Auction/Bidding ?</CLabel></CCol>
                 <CCol  md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox3" 
                        name="checkbox3" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3"> Yes,Allow people attend bidding to my store</CLabel>
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

export default AdvancedStoreSetup
