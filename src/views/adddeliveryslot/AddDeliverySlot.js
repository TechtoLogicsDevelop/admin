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

const AddDeliverySlot = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Delivery Slot
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last"> Delivery Slot No</CLabel>
                    <CInput id="first" placeholder=" Slot No" />
                  </CFormGroup>
                </CCol>
				<CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">From Time</CLabel>
                    <CInput id="first" placeholder=" 09:00 AM " />
                  </CFormGroup>
                </CCol>
               
				
				<CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">To Time</CLabel>
                    <CInput id="first" placeholder=" 12:00 PM " />
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

export default AddDeliverySlot
