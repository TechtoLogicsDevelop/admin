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

const AddJournalEntry = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add Journal Entry
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				
				
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Ledger Name</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Ledger  1</option>
                      <option value="2">Ledger  2</option>
                      <option value="3"> Ledger  3</option>
                      <option value="4">Ledger  4</option>
                     
                    </CSelect>
                  </CFormGroup>
				    </CCol>
				     <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger Code</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Ledger Code" />
                     
                    
                  </CFormGroup>
                </CCol>
                    <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger Group</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Group" />
                     
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                 <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">DR</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="DR" />
                     
                    
                  </CFormGroup>
                </CCol>
				     <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">CR</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="CR" />
                     
                    
                  </CFormGroup>
                </CCol>
                  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Narration</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Narration" />
                     
                    
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

export default AddJournalEntry
