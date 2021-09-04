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


const ProfileCertificate = () => {
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
        <CCol>
          <CCard>
            <CCardHeader>
         Profile Certificate
			 <div className="text-right">
			 <CHeaderNavLink   to="/publicprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Field of Study</th>
                    <th >Type of Certification</th>
                   <th>Natureof the (Residency)</th>
                    <th >Host Name</th>
					
                    <th >Start Year</th>
					 <th>End Year</th>
					  <th>Project URL</th>
                    <th >Description</th>
					 
                    <th >Upload Media</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody> 
              </table>
            
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ProfileCertificate
