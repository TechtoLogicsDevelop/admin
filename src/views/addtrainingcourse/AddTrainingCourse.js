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


const AddTrainingCourse = () => {

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add Training Course
             
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
                    <CLabel htmlFor="first">Course </CLabel>
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
                    <CLabel htmlFor="text">Details</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Details.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			   <CFormGroup row className="my-0">
               
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Planned Time</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="other">Delivery Time</CLabel>
                     <CInput id="postal-code" placeholder="Time" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Mode of Study</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Online</option>
                      <option value="1">Full Time </option>
					   <option value="2">Part Time</option>
                      <option value="3">Distance Learning </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Employer</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Employer 1</option>
                      <option value="1">Employer 2 </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Course Subject</CLabel>
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
                    <CLabel htmlFor="other">Cost</CLabel>
                     <CInput id="cost" placeholder="Cost" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			   <CFormGroup row className="my-0">
                 <CCol xs="4">
                  <CFormGroup>
                   <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
                  </CFormGroup>
                </CCol>
				<CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			    <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Attendence Type</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0"> Sign Up</option>
                      <option value="1">Assign</option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Training Certificate Requirements</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0"> Yes</option>
                      <option value="1">No</option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                   <CFormGroup row>
                  <CLabel col md={3}>Annex..</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Upload
                    </CLabel>
                  </CCol>
                </CFormGroup>
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

export default AddTrainingCourse
