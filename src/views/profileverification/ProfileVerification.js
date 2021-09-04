import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
	CButton,
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 CPagination,
 CHeaderNavLink,
  CRow,
  CSwitch,
  CFormGroup,
  CSelect
} from '@coreui/react'


const ProfileVerification = () => {
 
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  
  const [page, setPage] = useState(currentPage)
 const [currentPage, setCurrentPage] = useState(1)
 

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
          User Profile Verification
		   <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
          </CCardHeader>
		  
          <CCardBody>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th className="text-center"> Name</th>
				   <th className="text-center">User Name</th>
					<th className="text-center">Known As</th>
					<th className="text-center">Category</th>
					 <th className="text-center">Proof of Identity </th>
					 <th className="text-center">Transaction </th>
					
					<th className="text-center">Become a Artcurate Curator</th>
                    
					 	<th>Status</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td className="text-center">
                    <CHeaderNavLink   to="/profilesettings">Naini Todi</CHeaderNavLink> 
                    </td>	
					<td className="text-center">
                   Naini Todi
                    </td>
					 <td className="text-center">
                  Naini Todi
                    </td>
					
                    <td className="text-center">
                     Artist / Creaters
                     
                    </td>
					<td className="text-center">
                    <div className="c-avatar">
                        <img src={'avatars/starter.png'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					
					<td className="text-center">
                  $14,00
                    </td>
				
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 	<CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                  
                  <CCol xs="8" md="8">
                    <CSelect custom name="Status" id="select">
                      <option value="0">Status</option>
                      <option value="1">Pending</option>
                      <option value="2">Active</option>
                      <option value="3">Inactive</option>
					   <option value="4">Block</option>
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
              </CForm>
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
	
  )
  
}


export default ProfileVerification
