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

const StoresTransfer = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            StoresTransfer
             
            </CCardHeader>
			 
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   		
				
				 <CLabel htmlFor="first">Stores to Stores Transfer</CLabel>
				 <hr/>
				<CFormGroup row className="my-0">
				
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Store</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Store</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Bin</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select From Bin</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Store</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Store</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Bin</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select To Bin</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				<CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Transfer </CButton>&nbsp;&nbsp;
              
            </CCardFooter>
              </CFormGroup>
               
              </CForm>
            </CCardBody>
			
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default StoresTransfer
