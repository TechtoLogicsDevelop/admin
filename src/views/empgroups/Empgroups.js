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



const Empgroups = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Employees  Groups Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addempgroup">+Add New Group</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Group Id</th>
                    <th>Group Name</th>
                    
                    <th>Descriptions</th>
                   
                    <th>Created On</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Emp-G1</div>
                     
                    </td>
                    <td>
                      <div>Contract</div>
                     
                    </td>
                    <td className="text-center">
                     Contract Basic
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-G2</div>
                     
                    </td>
                    <td>
                      <div>Permenant</div>
                     
                    </td>
                    <td className="text-center">
                     Permenant
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-G3</div>
                     
                    </td>
                    <td>
                      <div>Trainers</div>
                     
                    </td>
                    <td className="text-center">
                     Trainers
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-G4</div>
                     
                    </td>
                    <td>
                      <div>Part-Time</div>
                     
                    </td>
                    <td className="text-center">
                     Part-Time
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-G5</div>
                     
                    </td>
                    <td>
                      <div>Full-Time</div>
                     
                    </td>
                    <td className="text-center">
                     Full-Time Work
                    </td>
                    <td className="text-center">
                      24-04-2021
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

export default Empgroups
