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
  CPopover,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const StatusNotification = () => {
 

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Status Change Notifications
               <div className="text-right">
			 <CHeaderNavLink   to="/storesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Email Customer When</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Order Status chanes to Pending</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2"> Order Status chanes to Awaiting Payment</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Order Status chanes to Awaiting Fulfillment</CLabel>
                    </CFormGroup><br/>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4"> Order Status chanes to Awaiting Shipment</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Order Status chanes to Awaiting Pickup</CLabel>
                    </CFormGroup><br/>
					  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox6" name="inline-checkbox6" value="option6" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox6"> Order Status chanes to Partially Shipped</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox7" name="inline-checkbox7" value="option7" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox7">Order Status chanes to Completed</CLabel>
                    </CFormGroup><br/>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox8" name="inline-checkbox8" value="option8" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox8"> Order Status chanes to Shipped</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox9" name="inline-checkbox9" value="option9" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox9">Order Status chanes to Cancelled</CLabel>
                    </CFormGroup><br/>
					  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox10" name="inline-checkbox10" value="option10" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox10">Order Status chanes to Declined</CLabel>
                    </CFormGroup><br/>
					  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox11" name="inline-checkbox11" value="option11" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox11"> Order Status chanes to Refunded</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox12" name="inline-checkbox12" value="option12" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox12">Order Status chanes to Disputed</CLabel>
                    </CFormGroup><br/>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox13" name="inline-checkbox13" value="option13" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox13"> Order Status chanes to Manual Verification Required</CLabel>
                    </CFormGroup><br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox14" name="inline-checkbox14" value="option14" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox14">Order Status chanes to Partially Refunded</CLabel>
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

export default StatusNotification
