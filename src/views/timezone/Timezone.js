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



const Timezone = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Timezone Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addtimezone">+Add New Time Zone</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Abbreviation</th>
                    <th className="text-center">Time Zone</th>
					<th className="text-center"> Current Time</th>
                    <th className="text-center">UTC offset</th> 
					<th className="text-center">GMT offset</th>
                   
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>IST</div>
                     
                    </td>
					 <td className="text-center">
                   Indian Standard Time
                    </td>
                    <td className="text-center">
                      Thu 8:57 AM
                    </td>
                    <td className="text-center">
                      UTC+5:30
                    </td>
                      <td className="text-center">
                      GMT+5:30
                    </td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                      <div>ACDT</div>
                     
                    </td>
					 <td className="text-center">
                    Australian Central Daylight Savings Time
                    </td>
                    <td className="text-center">
                      Thu 1:57 PM
                    </td>
                    <td className="text-center">
                     UTC+10:30
                    </td>
                      <td className="text-center">
                     UTC+10:30
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

export default Timezone
