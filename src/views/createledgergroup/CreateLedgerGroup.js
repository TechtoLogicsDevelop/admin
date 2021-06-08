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

const CreateLedgerGroup = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Create Ledger Group
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Group Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Group Name" />
                     
                    
                  </CFormGroup>
                </CCol>
				
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Parent Group</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Assets</option>
                      <option value="2">Liabalities</option>
                      <option value="3"> Expenses</option>
                      <option value="4">Income</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				    <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Descriptions</CLabel>
                   <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Description..." 
                    />
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

export default CreateLedgerGroup
