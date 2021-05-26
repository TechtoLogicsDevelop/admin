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

const GoogleMap = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Google Map Setting
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Google API Key:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Google API Key:" />
                   
                  </CCol>
                </CFormGroup>
				
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Valid GeoCode Modules:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Modules</option>
                      <option value="1">Zones List</option>
                     
					 
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Valid GeoCode Tables:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Modules</option>
                      <option value="1">Zones List</option>
                    
					 
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CCardHeader>
                 Address Type Setting
                </CCardHeader>
				<br/>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Accounting:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                     
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Contacts:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                     
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Leads:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                     
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Meeting:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                     
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Opportunities:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                      
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Address type for Cases:</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Address</option>
                      <option value="1">Primary Address</option>
                      <option value="2">Billing Address</option>
                     
					                       
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
			  
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
        
      </CRow>
     
     
      
     
     
    </>
  )
}

export default GoogleMap
