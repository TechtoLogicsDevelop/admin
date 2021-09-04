import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
	CButton,
  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 CPagination,
 CHeaderNavLink,
  CRow,
  CSwitch,
  
} from '@coreui/react'


const SettingsMyProfile = () => {
 
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
          Users Profile
		   <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
          </CCardHeader>
		 
          <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">First Name</th>
				   <th className="text-center">Last Name</th>
					<th className="text-center">Contact Email</th>
					<th className="text-center">Phone</th>
					<th className="text-center">About</th>
					 <th className="text-center">City,Country </th>
					 <th className="text-center">Professional Practice </th>
					
					<th className="text-center">Sub Roles</th>
                    
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td className="text-center">
                    <CHeaderNavLink   to="/profilesettings">Rakesh</CHeaderNavLink> 
                    </td>	
					<td className="text-center">
                   SR
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td >
					 <td className="text-center">
                    About Information
                    </td >
                    <td className="text-center">
                     Bangalore,Karnataka, India
                     
                    </td>
					<td className="text-center">
                    Painter
                     
                    </td>
					
					<td className="text-center">
                  <ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
                    </td>
				
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				   
				  
                </tbody>
              </table>
          
            </CCardBody>
        </CCard>
      </CCol>
    </CRow>
	
  )
  
}


export default SettingsMyProfile
