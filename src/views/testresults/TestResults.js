import React, { useState } from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
    CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CFormGroup,
   CLabel,
   CInput,
   CSelect,
   CModalFooter,
   CTextarea,
   CInputFile,
   CButton,
   CInputCheckbox,
    CPagination,
  CRow
} from '@coreui/react'

const TestResults = () => {
		const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
   const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Search Tests Results
			 <div className="text-right">
			 <CHeaderNavLink   to="/questionsandtests">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		
		  
            <CCardBody>
			
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                     <CSelect custom name="select" id="select">
                      <option value="0">User Name</option>
                      <option value="1">Name 1</option>
                      <option value="2">Name 2</option>
                      <option value="3">Name 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				   <CCol xs="6">
                  <CFormGroup>
                <CSelect custom name="select" id="select">
                      <option value="0">Students Name</option>
                      <option value="1">Student 1</option>
                      <option value="2">Student 2</option>
                      <option value="3">Student 3</option>
                    </CSelect>
					 </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                <CSelect custom name="select" id="select">
                      <option value="0">Test Name</option>
                      <option value="1">Test 1</option>
                      <option value="2">Test 2</option>
                      <option value="3">Test 3</option>
                    </CSelect>
					 </CFormGroup>
                </CCol>
                <CCol xs="6">
				<CFormGroup>
                 <CSelect custom name="select" id="select">
                      <option value="0">Select Batch</option>
                      <option value="1">Batch 1</option>
                      <option value="2">Batch 2</option>
                      <option value="3">Batch 3</option>
                    </CSelect>
                
              </CFormGroup>
			  </CCol>
			  </CFormGroup>
			  
                  
              </CForm>
			 
            </CCardBody>
			 <CCardHeader>
            
			 <div className="text-center">
			 <CHeaderNavLink   to="/onlineresult">Search Tests</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default TestResults
