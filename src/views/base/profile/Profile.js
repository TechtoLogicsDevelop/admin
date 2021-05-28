import React from 'react'
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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const Profile = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Profile
            </CCardHeader>
			
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-10 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
					<th className="text-center">Profile Photo</th> 
                    <th >Name </th>
					
					
					<th >Email Id </th>
					<th >Phone No</th>
					
					
					<th>Designation</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'}  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Rai
                     
                    </td>
					<td>
                    rai@artcurate.com
                     
                    </td>
					<td>
                    +91 9856327410
                     
                    </td>
					<td>
                    Admin
                     
                    </td>
					
					
					
					<td>
					 <CHeaderNavLink to="/">Update</CHeaderNavLink> 
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

export default Profile
