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

const AddFiscalYear = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add the FiscalYear
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
               
				
				 <CFormGroup row>
				 <CCol md="3">
                    <CLabel htmlFor="select">Select Year</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">2021</option>
                      <option value="1">2022</option>
					   <option value="2">2023</option>
                      <option value="3">2024</option>
					   <option value="4">2025</option>
                      <option value="5">2026</option>
					   <option value="6">2027</option>
                      <option value="7">2028</option>
					   <option value="8">2029</option>
                      <option value="9">2030</option> 
					  <option value="10">2031</option>
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Year Start From Date </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Year End To Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
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

export default AddFiscalYear
