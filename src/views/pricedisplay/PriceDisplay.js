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
  CHeaderNavLink,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const PriceDisplay = () => {
 
  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Display Product Prices 
                <div className="text-right">
			 <CHeaderNavLink   to="/taxsetting">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Product Prices in Catalog</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					 
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Shipping Prices</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Select </option>
                      <option value="1">Excluding Tax</option>
                      <option value="2">Including Tax</option>
					   <option value="3">Excluding Tax and Including Tax</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save Config</CButton>&nbsp;&nbsp;
             
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
    </>
  )
}

export default PriceDisplay
