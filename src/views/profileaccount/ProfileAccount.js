import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
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

const ProfileAccount = () => {
	 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
 
  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
          Profile Account
              <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			  
                 <CFormGroup >
				 
                  <CCol md="12">
				  <div className="text-center">
                      <CLabel >ACCOUNT LOGIN PASSWORD</CLabel>
                   </div>
					<br/>
					<CFormGroup  inline>
					 <div className="text-center">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">Change Password</CButton>
			   <CButton   color="primary" onClick={() => setSuccess(!success)} className="mr-1">Forgot Password</CButton>
			   </div>
			    <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Change Password</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Change Password
            </CCardHeader>
            <CCardBody >
               <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="newpass">New Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="newpass" id="newpass" name="newpass" placeholder="New password" autoComplete="newpass" />
                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Confirm Password..." autoComplete="confirm-password"/>
                    
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save Changes</CButton>{' '}
				
              </CModalFooter>
            </CModal>
                    </CFormGroup>
					
					 <div className="text-center">
                      <CLabel >SUPPORTERS OR SUBSCRIBER</CLabel>
                   </div>
				   <div className="text-center">
					  <CFormGroup row>
                 
                  <CCol md="12">
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Supporter</CLabel>
					   <CFormText className="help-block">Supporters would pay to view content.</CFormText>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Subscriber</CLabel>
					   <CFormText className="help-block">Subscribers would pay to view content. Lorem Upsum</CFormText>
                    </CFormGroup>
                    
                  </CCol>
				 
                </CFormGroup>
				 </div>
				  <div className="text-center">
                      <CLabel >DELETE ACCOUNT</CLabel>
                   </div>
				   <div className="text-center">
					 <CFormGroup row>
                 
                  <CCol md="12">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Not for me</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Have Multiple</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Other</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                  
				 </div>
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

export default ProfileAccount
