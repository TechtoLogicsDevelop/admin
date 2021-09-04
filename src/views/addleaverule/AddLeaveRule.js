import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
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




const AddLeaveRule = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add Leave Rule
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Leave Type</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Anual</option>
                      <option value="2">Casual</option>
                      <option value="3">Medical</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Leave Group</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Group 1 </option>
                      <option value="2">Group 2 </option>
                      <option value="3"> Group 3 </option>
					   <option value="4">Group 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Job Title</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Job Title 1</option>
                      <option value="2">Job Title 2</option>
                      <option value="3">Job Title 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Employment Status</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Contract </option>
                      <option value="2">Internship </option>
                      <option value="3"> Part Time</option>
					   <option value="4">Full Time</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Employee / Company</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Company 1</option>
                      <option value="2">Company 2</option>
                      <option value="3">Company 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Required Experiences</CLabel>
                   <CInput id="company-website" placeholder="Required Experiences" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Department</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Department 1</option>
                      <option value="2">Department 2</option>
                      <option value="3">Department 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">leave Period</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2017 </option>
                      <option value="2">2018 </option>
                      <option value="3"> 2019</option>
					   <option value="4">2020</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Leaves Per Leave Period</CLabel>
                    <CInput id="company-website" placeholder="Leaves Per Leave Period" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Admin can assign leave to employees</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Employees can apply for this leave type</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Employees can apply beyond the current leave balance</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Leave Accrue Enabled</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Leave Carried Forward</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Percentage of Leave Carried Forward</CLabel>
                   <CInput id="established" placeholder="Percentage of Leave Carried Forward" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Maximum Carried Forward Amount</CLabel>
                   <CInput id="established" placeholder="Maximum Carried Forward Amount" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Carried Forward Leave Availability Period</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">1 Month</option>
                      <option value="2">2 Month</option>
                     <option value="3">3 Month</option>
                      <option value="4"> 4 Month</option>\
					  <option value="5">5 Month</option>
                      <option value="6">6 Month</option>
					  <option value="7">7 Month</option>
                      <option value="8">8 Month</option>
					  <option value="9">9 Month</option>
                      <option value="10">10 Month</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Proportionate leaves on Joined Date</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </CSelect>
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

export default AddLeaveRule
