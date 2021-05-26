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



const Rolegroups = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Roles Groups Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addrolegroup">+Add New Role Group</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Role Group Id</th>
                    <th>Role Group Name</th>
                    
                    <th>Descriptions</th>
                   
                    <th>Created On</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Emp-RG1</div>
                     
                    </td>
                    <td>
                      <div>Software</div>
                     
                    </td>
                    <td className="text-center">
                     Software
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
                      <div>Emp-RG2</div>
                     
                    </td>
                    <td>
                      <div>HR</div>
                     
                    </td>
                    <td className="text-center">
                     Human Resources
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
                      <div>Emp-RG3</div>
                     
                    </td>
                    <td>
                      <div>Maintenance</div>
                     
                    </td>
                    <td className="text-center">
                      Maintenance
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
                      <div>Emp-RG4</div>
                     
                    </td>
                    <td>
                      <div>Security</div>
                     
                    </td>
                    <td className="text-center">
                    Security
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
                      <div>Emp-RG5</div>
                     
                    </td>
                    <td>
                      <div>Service</div>
                     
                    </td>
                    <td className="text-center">
                     Service
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

export default Rolegroups
