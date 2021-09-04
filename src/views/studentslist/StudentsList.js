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


const StudentsList = () => {
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
          Students List
			 <div className="text-right">
			 <CHeaderNavLink   to="/institutionprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Image</th>
				    <th className="text-center">Name</th>
					 <th className="text-center">Certificate</th>
					  <th className="text-center">Subject</th>
                    <th className="text-center">Year of Graduation</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                   <td>  
				   <div className="c-avatar">
                        <img src={'avatars/certificate.png'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
					  </td>
                    <td className="text-center">
                    Tao Yi
                    </td>
                   <td className="text-center">
                  Painting Certificate Award
                    </td>
					 <td className="text-center">
                    Subject of Photography
                    </td>
					 <td className="text-center">
                    2021
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

export default StudentsList
