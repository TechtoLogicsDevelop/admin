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



const Employees = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Employees Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addemployee">+Add New Employee</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Employee</th>
                    <th>Employee Group</th>
                    <th>Email</th>
                    <th className="text-center">Phone No</th>
                   
					<th>Status</th>
					<th>Role Set</th>
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
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>Art-001</span> | Super Admin
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                      yiorgos@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632587410
                    </td>
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 <CHeaderNavLink to="/rolesetting"> Roles Set</CHeaderNavLink>
                   	</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                         <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Art-002</span> | HR Resource
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                      avram@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632585870
                    </td>
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 <CHeaderNavLink to="/rolesetting"> Roles Set</CHeaderNavLink>
                   	</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
                 
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                       <div className="small text-muted">
                        <span>Art-003</span> | System Admin
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                     Quintin@gmail.com
                    </td>
                    <td className="text-center">
                     +91-8536478924
                    </td>
                   
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 <CHeaderNavLink to="/rolesetting"> Roles Set</CHeaderNavLink>
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

export default Employees
