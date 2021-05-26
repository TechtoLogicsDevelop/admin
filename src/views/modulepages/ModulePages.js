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



const ModulePages = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Module Pages Setting
            </CCardHeader>
			
		   
            <CCardBody>
                <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addpages">+Add New Pages</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Module Name</th>
                    <th >Sub-Module</th>
                    <th className="text-center">Child Sub-Modules</th>
					<th >Priority</th>
                   <th  className="text-center">Pages</th>
                   
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      p-01
                     
                    </td>
                    <td>
                      <div>Ecommerce</div>
                     
                    </td>
					 <td>
                      <div>Contacts</div>
                     
                    </td>
                    <td className="text-center">
                     Customer
                    </td>
					 <td className="text-center">
                     1
                    </td>
					<td className="text-center">
                     Customer List
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
                      p-02
                     
                    </td>
                    <td>
                      <div>Ecommerce</div>
                     
                    </td>
					 <td>
                      <div>Contacts</div>
                     
                    </td>
                    <td className="text-center">
                     Customer
                    </td>
					 <td className="text-center">
                     2
                    </td>
					<td className="text-center">
                     Add Customer
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
                     p-03
                     
                    </td>
                    <td>
                      <div>Ecommerce</div>
                     
                    </td>
					 <td>
                      <div>Contacts</div>
                     
                    </td>
                    <td className="text-center">
                     Customer
                    </td>
					 <td className="text-center">
                     3
                    </td>
					
					<td className="text-center">
                     Edit Customer
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
                     p-04
                     
                    </td>
                    <td>
                      <div>Ecommerce</div>
                     
                    </td>
					 <td>
                      <div>Contacts</div>
                     
                    </td>
                    <td className="text-center">
                     Customer
                    </td>
					 <td className="text-center">
                     4
                    </td>
					<td className="text-center">
                     Delete
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
                     p-05
                     
                     </td>
					  <td>
                      <div>Visitors List</div>
                     
                    </td>
                    <td>
                      <div>Visitors</div>
                     
                    </td>
                    <td className="text-center">
                     Visitors
                    </td>
					 <td className="text-center">
                     5
                    </td>
					<td className="text-center">
                     users
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

export default ModulePages
