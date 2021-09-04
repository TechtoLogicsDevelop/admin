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


const ProvideFeedback = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Provide Feedback
            </CCardHeader>
			
		   
            <CCardBody>
             

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                   
					 <th>Review </th>
                    
                    <th> Status</th>
                       <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
					<td>
					
					</td>
					 <td >
                  
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

export default ProvideFeedback
