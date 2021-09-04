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


const LeaveRule = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Leave Rule
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addleaverule">+Add Leave Rule</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    
                    <th>Leave Type</th>
                    <th>Leave Group</th>
                   <th>	Leave Period</th>
				     <th>Department</th>
                   <th>	Job Title</th>
				    <th>Employement Status</th>
					  <th>Employee</th>
                   <th>	Experience</th>
				    <th>Leaves Per year</th>
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

export default LeaveRule
