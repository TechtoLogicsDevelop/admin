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
  
   CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
  CPagination,
  CFormText,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BackupRestore = () => {
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
             Backup-Restore Master
			 <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
			 
            </CCardHeader>
			
		   
            <CCardBody>
               <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Take Backup</CButton>
			   </div>
			     

               <CCardHeader>
		  
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Backup</th>
					<th className="text-center">Path</th>
                    <th className="text-center">Size</th>
                   
					<th>Backup Date</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>1</div>
                     
                    </td>
					 <td className="text-center">
                    backup20210413
                    </td>
                    <td className="text-center">
                      users/backup/
                    </td>
                    <td className="text-center">
                      2.14 GB
                    </td>
                     
					<td>
					28-04-2021
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                      <div>2</div>
                     
                    </td>
					 <td className="text-center">
                    backup20210428
                    </td>
                    <td className="text-center">
                      users/backup/
                    </td>
                    <td className="text-center">
                      2.30 GB
                    </td>
                     
					<td>
					28-04-2021
					</td>
					
					<td>
					View / Edit / Delete
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

export default BackupRestore
