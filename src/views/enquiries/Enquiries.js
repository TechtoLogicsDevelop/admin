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

import MainChartExample from '../charts/MainChartExample.js'



const Enquiries = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Enquiries
            </CCardHeader>
			
		   
            <CCardBody>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Name</th>
                     <th>Phone</th>
                    <th>Email</th>
                   
                    <th>Message</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>01</div>
                     
                    </td>
                    <td>
                      <div>Preetham</div>
                     
                    </td>
					 <td>
                      <div>9856321470</div>
                     
                    </td>
                    <td >
                     preet12@gmail.com
                    </td>
                    <td >
                      Text Message
                    </td>
                                      
					
					<td>
					View / Delete
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

export default Enquiries
