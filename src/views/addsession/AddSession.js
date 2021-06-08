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


const AddSession = () => {

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add New training Session
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                     
                    
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Course</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Accountancy</option>
                      <option value="1">IT </option>
                      <option value="2"> Business</option>
                      <option value="3">Services </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Description</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Description.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			   <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Schedule Time</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Time" />
                     
                    
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Scheduled Date</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Date" />
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Delivery Method</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Class Room </option>
                      <option value="2"> Self Study</option>
                      <option value="3">Online </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  <CFormGroup row className="my-0">
                 <CCol xs="4">
                  <CFormGroup>
                   <CLabel htmlFor="country">Delivery Location</CLabel>
                <CInput id="country" placeholder="Location" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Attendence Type</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Sign Up</option>
                      <option value="2"> Assign</option>
                  
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Training Certificate Required</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Yes</option>
                      <option value="2"> No</option>
                  
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row>
                 
                 
			
                </CFormGroup>
             
              <CFormGroup row className="my-0">
               
				 <CCol xs="12">
                  <CLabel col md="9" htmlFor="file-input">Attachement</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CCol>
               
              </CFormGroup>
        
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save & Continue</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
    
     
    
     
    </>
  )
}

export default AddSession
