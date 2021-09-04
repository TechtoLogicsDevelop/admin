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
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const SEOptimize = () => {
 
  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Search Engine Optimization
		   <div className="text-right">
			 <CHeaderNavLink   to="/websitesettings">Back</CHeaderNavLink> 
			 </div>
           
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Home Page Title</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Title" />
					 
                  </CCol>
                </CFormGroup>
				
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Meta Keywords</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                   <CInput id="text-input" name="text-input" placeholder="Meta Keyword" />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Meta Description</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                   <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Description..." 
                    />
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">WWW/No WWW Redirect</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                                        
					   <option value="0">Select </option>
                      <option value="1"> WWW </option>
                      <option value="2">No WWW</option>
					  
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

export default SEOptimize
