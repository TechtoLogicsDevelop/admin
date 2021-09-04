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

const ListingsPreferences = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Listings Preferences
              <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Max Images Per Item *</CLabel></CCol>
                  <CCol md="9">
                     <CInput id="text-input" name="text-input" placeholder=" Heading Color" />
                    
                  </CCol>
                </CFormGroup>
				
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Charge Fees When Relisting</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Buyer's Premium</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
			
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable YouTube Videos</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Documents Attachments</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable "Featured" listing option</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable "SALE" banner listing option.</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Watch Count</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				
				
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center">
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
    </>
  )
}

export default ListingsPreferences
