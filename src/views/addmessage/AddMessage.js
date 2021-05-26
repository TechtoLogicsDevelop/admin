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

const AddMessage = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add the New Message
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Message Type</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Message Type</option>
                      <option value="1">Email</option>
                      <option value="2">Notification</option>
                      <option value="3">SMS</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Message Heading</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Message Heading" />
                   
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Descriptions</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder=" Description..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tag</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Tag" />
                   
                  </CCol>
                </CFormGroup>
				<hr/>
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification To</CLabel>
                  </CCol>
                     
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Customer</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Agent</CLabel>
                    </CFormGroup>
                </CCol>
               <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification Type</CLabel>
                  </CCol>
                     
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Google Push</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">SMS</CLabel>
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

export default AddMessage
