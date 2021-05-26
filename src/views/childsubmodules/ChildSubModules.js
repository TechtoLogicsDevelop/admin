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



const ChildSubModules = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Child SubModules Setting
            </CCardHeader>
			
		   
            <CCardBody>
             

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addchildsubmodule">+Add New Child Sub Module</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Module Name</th>
                    <th >Sub-Module</th>
					<th >Priority</th>
                    <th className="text-center">Child Sub-Modules</th>
					
                    <th className="text-center">Created On</th>
                   
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      cm-01
                     
                    </td>
                    <td>
                      Dashboard
                     
                    </td>
					 
					 <td>
                     Dashboard
                     
                    </td>
					<td>
                     1
                     
                    </td>
                    <td className="text-center">
                     Dashboard
                    </td>
					 <td className="text-center">
                      28-04-2021
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
                     cm-2
                     
                     </td>
					  <td>
                      Visitors List
                     
                    </td>
					
                    <td>
                      Visitors
                     
                    </td>
					<td>
                     2
                     
                    </td>
                    <td className="text-center">
                     Visitors
                    </td>
					 <td className="text-center">
                      28-04-2021
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

export default ChildSubModules
