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




const AddLeaveType = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             AddLeaveType
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Leave Name</CLabel>
                    <CInput id="company-website" placeholder="Leave Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Leaves Per Leave Period</CLabel>
                    <CInput id="company-website" placeholder="Leaves Per Leave Period" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Admin can assign leave to employees</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
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
              </CFormGroup>
                
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Employees can apply beyond the current leave balance</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Leave Accrue Enabled</CLabel>
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
                    <CLabel htmlFor="company-website">Leave Carried Forward</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Percentage of Leave Carried Forward</CLabel>
                   <CInput id="established" placeholder="Percentage of Leave Carried Forward" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Maximum Carried Forward Amount</CLabel>
                   <CInput id="established" placeholder="Maximum Carried Forward Amount" />
                  </CFormGroup>
                </CCol>
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
              </CFormGroup>
			   <CFormGroup row className="my-0">
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
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Use Employee Leave Period</CLabel>
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
                    <CLabel htmlFor="meta-tag">Send Notification Emails</CLabel>
                     <CSelect custom name="select" id="select">
                       <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="keyword">Leave Group</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Group 1 </option>
                      <option value="2">Group 2 </option>
                      <option value="3"> Group3 </option>
					   <option value="4">Group 4 </option>
                     
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

export default AddLeaveType
