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

const Questions = () => {
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
            Search Questions
			 <div className="text-right">
			 <CHeaderNavLink   to="/questionsandtests">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		
		  
            <CCardBody>
			
			     
                 <CCardHeader>
		  
                 </CCardHeader>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			
                <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				   <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Subject</option>
                      <option value="1">Subject 1</option>
                      <option value="2">Subject 2</option>
                      <option value="3">Subject 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				  <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Topic</option>
                      <option value="1">Topic 1</option>
                      <option value="2">Topic 2</option>
                      <option value="3">Topic 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
                  
              </CForm>
			  
            </CCardBody>
			 <CCardHeader>
            
			 <div className="text-center">
			 <CHeaderNavLink   to="/searchquestions">Search Question</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Questions
