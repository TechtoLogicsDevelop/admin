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
   CFormGroup,
   CLabel,
   CSelect,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const CandidateReviews = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
         Candidate Reviews
            </CCardHeader>
			
		   
            <CCardBody>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
				    <th> Company</th>
                    <th>Date</th>
					<th>Title</th>
                   <th >Description</th>
				    <th>User</th>
                   <th >Vote</th>
				  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                  
                    </td>
                   
					 <td>
                    
                     
                    </td>
					
                    <td>
                    
                     
                    </td>
					  <td>
                   
                     
                    </td>
					 <td >
                    
                    </td >
					 <td >
                    
                    </td >
                               
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

export default CandidateReviews
