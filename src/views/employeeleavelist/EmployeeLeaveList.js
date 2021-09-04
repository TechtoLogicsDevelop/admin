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


const EmployeeLeaveList = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Employee Leave List
            </CCardHeader>
			
		   
            <CCardBody>
              


              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                   
                    
                    <th>Employee</th>
                    <th>Leave Type</th>
                   <th>	Leave Start Date</th>
				     <th>Leave End Date</th>
                   <th>	Leave Status</th>
				    <th>Total Leaves Day</th>
					
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
                <td className="text-center">
                   
                    </td>
                       		
                   					
					<td>
					
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

export default EmployeeLeaveList
