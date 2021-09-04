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

const ProductsSetup = () => {
 

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Products Setup
             <div className="text-right">
			 <CHeaderNavLink   to="/displaysettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
				
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Products Price? </CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Show the products price in my store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Product's SKU?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Show the products SKU in my store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Product's Weight?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Shows the Products Weight in my store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Product's Brand?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Shows the products Brand in my store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Product's Shipping Cost?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Shows the Products Shipping Cost in my store</CLabel>
                    </CFormGroup>
                  
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Product's Rating?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Shows the Products rating in My Store</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Show Add to Cart Link?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Shows the Add tocart link in My Store</CLabel>
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

export default ProductsSetup
