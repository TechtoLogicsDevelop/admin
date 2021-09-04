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

const Maintenance = () => {
 
  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
          Maintenance
              <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			  
                 <CFormGroup >
				 
                  <CCol md="12">
				  
				   <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Background Processing</CLabel>
                    </CFormGroup>
					<br/>
					<CFormGroup  inline>
					 <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Clear Cache</span></CButton>
                      <CLabel >Clear Cache</CLabel>
                    </CFormGroup>
					
					<CFormGroup  inline>
					 <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Reset Email Templates</span></CButton>
                      <CLabel >Reset Email Templates</CLabel>
                    </CFormGroup>
					 <CLabel >Listing data Cleanup</CLabel>
					 <hr/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Cleanup/Delete Processing</CLabel>
                    </CFormGroup>
					<br/>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Include Successful Listing Data</CLabel>
                    </CFormGroup>
					<br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Include Draft Listing Data</CLabel>
                    </CFormGroup>
					
					
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

export default Maintenance
