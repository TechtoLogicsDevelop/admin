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


const PapersList = () => {
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
            Questions Papers List
			 <div className="text-right">
			 <CHeaderNavLink   to="/questionpapers">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
             
               <CCardHeader>
		  
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                    <th className="text-center">Examination</th>
					<th className="text-center"> Subjects</th>
                     <th className="text-center">Created By</th>
					<th className="text-center">Created On</th>
					<th className="text-center"> Updated By</th>
                     <th className="text-center">Updated On</th>
				
					
					  <th>Actions</th>
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

export default PapersList
