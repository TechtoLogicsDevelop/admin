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

const SecurePrivacy = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Security & Privacy settings
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   
			    <CFormGroup row>
                  <CCol md="3"><CLabel>Minimum Password Length</CLabel></CCol>
                  <CCol md="9">
                    <CInput id="text-input" name="text-input" placeholder="Password Length " /> 
                  </CCol>
                </CFormGroup>
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Require Lowercase?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Enable lower case requirements</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Require Uppercase ?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Enable Uppercase requirements</CLabel>
                    </CFormGroup>
                  
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Require Numbers?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel > At Least</CLabel> <CInput id="exampleInputName2" placeholder="Ex:6 Characters" /> <CLabel > Characters</CLabel>
                    </CFormGroup>
                  
                    
                  </CCol>
                </CFormGroup>
				
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Require Special Characters?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel > At Least</CLabel> <CInput id="exampleInputName2" placeholder=" " /> <CLabel > Characters</CLabel>
                    </CFormGroup>
                  
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Admin panel Auto Timeout Session</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">10 Mintues</option>
                      <option value="2">20 Minutes</option>
                      <option value="3">No Session Out</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				
				 
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable reCAPTCHA on storefront?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, enable reCAPTCH security</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>reCAPTCHA Site Key</CLabel></CCol>
                  <CCol md="9">
                   <CInput id="text-input" name="text-input" placeholder=" " />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>reCAPTCHA Screat Key</CLabel></CCol>
                  <CCol md="9">
                   <CInput id="text-input" name="text-input" placeholder=" " />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Cookie consent tracking</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Turn on the cookie consent banner on my store</CLabel>
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

export default SecurePrivacy
