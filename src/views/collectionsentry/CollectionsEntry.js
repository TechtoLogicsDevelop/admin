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
import { DocsLink } from 'src/reusable'



const CollectionsEntry = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Collections Entry
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                   <CFormGroup row className="my-0">
				 
				
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Customer</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Customer 1</option>
                      <option value="2">Customer 2 </option>
                      <option value="3"> Customer 3</option>
                      <option value="4">Customer 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Collection Mode</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Collection Mode 1</option>
                      <option value="2">Collection Mode 2 </option>
                      <option value="3"> Collection Mode 3</option>
                      <option value="4">Collection Mode 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Ledger</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Ledger 1</option>
                      <option value="2">Ledger 2 </option>
                      <option value="3"> Ledger 3</option>
                      <option value="4">Ledger 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>			     
				
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Advanced Amount</CLabel>
                     <CInput id="text-input" name="text-input" placeholder="Advanced Amount" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Remarks</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content..." 
                    />
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

export default CollectionsEntry
