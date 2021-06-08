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



const JobAlerts = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Job Alerts
            </CCardHeader>
			
		   
            <CCardBody>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>User</th>
                    <th>Location</th>
                    
                    <th>Category</th>
                    <th>Containing Words</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>testj@testj.com</div>
                     
                    </td>
                    <td>
                      <div>	Liechtenstein</div>    
                     
                    </td>
                    <td className="text-center">
                     Direct Sales, Sales
                    </td>
                     <td className="text-center">
                   Antan
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

export default JobAlerts
