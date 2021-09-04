import React, { lazy } from 'react'
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
   
   
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const LeaveGroupEmployee = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Leave Group Employee
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addleavegroupemp">+Add Leave Group Employee</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Id</th>
                    <th>Employee</th>
                   
					  <th>Leave Group</th>
                   
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>
                     
                    </td>
                    <td className="text-center">
                   
                    </td>
                    <td className="text-center">
                   
                    </td>
                        <td className="text-center">
                    
                    
                  
                    </td>
					  		
                   					
					<td>
					
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

export default LeaveGroupEmployee
