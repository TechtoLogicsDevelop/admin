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
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CButton,
   CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CInputRadio,
   CModalFooter,
   CTextarea,
   CInputFile,
      CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CPagination,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const ProfileSubscription = () => {
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
         Profile Subscription
		  <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
			 
              <CCardHeader>
            
            </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
					<th className="text-center">Membership</th> 
                    <th >Title</th>
					
					<th >Price </th>
					
					<th>For</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/starter.png'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Free(Default)
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					
						<td>
					Lifetime
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

export default ProfileSubscription
