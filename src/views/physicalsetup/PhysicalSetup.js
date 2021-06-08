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

const PhysicalSetup = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Physical Dimension Setting 
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Weight Measurements</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1">Pounds</option>
                      <option value="2">Ounces</option>
					   <option value="3">Kilograms</option>
					    <option value="4">Grams</option>
						 <option value="5">Tonnes</option>
					
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Length Measurements</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1"> Inches </option>
                      <option value="2">Centimeters</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Decimal Token</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Decimal Token" />
					 
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Thousands Token</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="Thousands Token" />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Decimal Places</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="Decimal Places" />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Factoring Dimension</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                     
					   <option value="0">Product Depth </option>
                      <option value="1">Width</option>
                      <option value="2">Height</option>
					   <option value="3">Depth</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 
				 
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
             
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default PhysicalSetup
