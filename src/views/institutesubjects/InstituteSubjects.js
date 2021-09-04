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
  CPagination,
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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const InstituteSubjects = () => {
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
         Institution Subjects & Certification
			 <div className="text-right">
			 <CHeaderNavLink   to="/institutionprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                
				    <th className="text-center">Name</th>
					 <th className="text-center">Tags</th>
					  
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  
                    
                   <td className="text-center">
                  Painting Certificate Award
                    </td>
					 <td className="text-center">
                    <ul>
					<li>Tag 1</li>
					<li>Tag 2</li>
					<li>Tag 3</li>
					<li>Tag 4</li>
					</ul>
                    </td>
					
                  </tr>
				  
                </tbody> 
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

export default InstituteSubjects
