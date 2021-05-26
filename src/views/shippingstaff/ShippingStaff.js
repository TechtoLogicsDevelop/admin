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



const ShippingStaff = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Shipping Staff
            </CCardHeader>
			
		   
            <CCardBody>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
					
                    <th>Name</th>
                    
                    <th>Email</th>
                    <th className="text-center">Phone No</th>
                    
					 <th>DOB</th>
					  <th>Gender</th>
					  <th>Role</th>
					   <th>Last Loged In</th>
					  <th>App Version</th>
					  <th>Online Status</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					
                    <td>
                      Pramod Kumar
                      <div className="small text-muted">
                        <span> AGNT001</span> | Agent
						
                      </div>
                    </td>
					 <td className="text-center">
                     promodsk@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632587410
                    </td>
                    <td className="text-center">  
                      15/12/1988
                    </td>
                     <td className="text-center">
                      Male
                    </td>
					 <td className="text-center">
                      Agent
                    </td>
					 <td className="text-center">
                      <strong>10 sec ago</strong>
                    </td>
					<td>
					 v-1.0
					</td>
					<td>
					 <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
                   	</td>
					<td>
					 <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
                   	</td>
					<td>
					  <CHeaderNavLink to="/assignvehicle">Vechile </CHeaderNavLink>
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

export default ShippingStaff