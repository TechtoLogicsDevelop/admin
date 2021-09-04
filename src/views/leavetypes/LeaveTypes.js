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


const LeaveTypes = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            LeaveTypes
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addleavetype">+Add Leave Type</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Id</th>
                    
                    <th>Leave Name</th>
               
                    
                    <th>Leave Enabled</th>
					<th>Leave Carried Forward</th>
                    
                    <th>Leaves Per Year</th>
					<th>Leaves Group</th>
                    
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                  
                    <td >
                   01
                    </td>
                     <td >
                 Anual Leave
                    </td>
                       	  <td >
                 No
                    </td>
                 <td >
                 No
                    </td>
                    <td >
                 14
                    </td>
                 <td >
                 
                    </td>
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
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

export default LeaveTypes
