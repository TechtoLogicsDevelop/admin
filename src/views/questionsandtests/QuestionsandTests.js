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

const QuestionsandTests = () => {
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
            Questions & Tests
			
            </CCardHeader>
		   <CCardHeader className="text-center">
		  
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/questions"> Manage Questions</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/managetests"> Manage Tests</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/testresults"> View Test Results</CHeaderNavLink>  
        </CHeaderNavItem>
        
      </CHeaderNav>
	   </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default QuestionsandTests
