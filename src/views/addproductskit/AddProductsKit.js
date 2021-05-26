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

const AddProductsKit = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add the New ProductsKit
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="  Name" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Description</CLabel>
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
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Start Date</CLabel>
                   
					
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                 
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">End Date</CLabel>
                   
					
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                 
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

export default AddProductsKit
