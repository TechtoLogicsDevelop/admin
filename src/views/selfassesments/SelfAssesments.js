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


const SelfAssesments = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Self Assesments
            </CCardHeader>
			
		   
            <CCardBody>
             

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Organizer</th>
                    
                    <th> Template</th>
               
                    
					<th>Status</th>
					 <th>Review Date</th>
                    
                    <th> Due Self-Assesment</th>
               <th>Start of Viewing Period</th>
                    
                    <th> View the End of the period</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                  
                    <td >
                    
                    </td>
                     <td >
                  
                    </td>
                       	
                   
                   				
					<td>
					
					</td>
					<td>
					
					</td>
					 <td >
                  
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

export default SelfAssesments
