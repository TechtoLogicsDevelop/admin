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

const ManageMarks = () => {
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
            Manage Marks
			 <div className="text-right">
			 <CHeaderNavLink   to="/examinations">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		
		  
            <CCardBody>
			
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
              
                <CCol xs="6">
                  <CFormGroup>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Examination</option>
                      <option value="1">Exam 1</option>
                      <option value="2">Exam 2</option>
                      <option value="3">Exam 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Subject</option>
                      <option value="1">Subject 1</option>
                      <option value="2">Subject 2</option>
                      <option value="3">Subject 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    
                  
              </CForm>
			 
            </CCardBody>
			 <CCardHeader>
            
			 <div className="text-center">
			 <CHeaderNavLink   to="/markslist">Add /Edit Marks</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ManageMarks
