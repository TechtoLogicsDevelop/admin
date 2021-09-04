import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
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
    CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const MarksList = () => {
			 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Marks List
			 <div className="text-right">
			 <CHeaderNavLink   to="/managemarks">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
             
               <CCardHeader>
		  
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Image</th>
                    <th className="text-center">User Id</th>
					<th className="text-center"> Student Name</th>
                     <th className="text-center">Email </th>
					<th className="text-center">Subject 1 (Total Marks : 30)</th>
					<th className="text-center">Subject 2 (Total Marks : 30)</th>
					<th className="text-center">Total (Total Marks : 60)</th>
					<th className="text-center"> Percent ( % )</th>
                     <th className="text-center">Grade</th>
				
                  </tr>
                </thead>
               
              </table>
					      <br/>
				 
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MarksList
