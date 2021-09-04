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


const ProfileDisciplines = () => {
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
          Profile Disciplines
			 <div className="text-right">
			 <CHeaderNavLink   to="/publicprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Sl No</th>
                    <th className="text-center">Disciplines</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                   <td>1</td>
                    <td className="text-center">
                    Lorem ipsum dolor sit amet,
                    </td>
                  
                  </tr>
				    <tr>
                    
                   <td>2</td>
                    <td className="text-center">
                    Lorem ipsum dolor sit amet, 
                    </td>
                  
                  </tr>
				   <tr>
                    
                   <td>3</td>
                    <td className="text-center">
                    Lorem ipsum dolor sit amet, 
                    </td>
                  
                  </tr>
                </tbody> 
              </table>
            
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ProfileDisciplines
