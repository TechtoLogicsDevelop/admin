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



const TaxSetting = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Tax Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addtaxtype">+Add New Tax Type </CHeaderNavLink>
                     </CHeaderNavItem>
					   <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/taxclasses">Tax Classes </CHeaderNavLink> 
                     </CHeaderNavItem>
					 <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/taxcalculate">Calculation Settings  </CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/pricedisplay">Price Display Setting </CHeaderNavLink>
                     </CHeaderNavItem>
					
                </CHeaderNav>
				
              </CCardHeader>
                 <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                  
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/cartdisplay">Cart Display Setting </CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/invoicedisplay">Orders, Invoices, Credit Memos Display Settings </CHeaderNavLink>
                     </CHeaderNavItem>
					 <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addtax">+Add New Tax  </CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
				
              </CCardHeader>
				 
				<hr/> 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>#</th>
				   <th >Type</th>
                    <th>Name</th>
                    
                    <th className="text-center">Descriptions</th>
                   <th >%</th>
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Tax-1</div>
                     
                    </td>
                    <td>
                      <div>Fixed</div>
                     
                    </td>
					 <td>
                      <div>CGST</div>
                     
                    </td>
                    <td className="text-center">
                     Central GST
                    </td>
					<td className="text-center">
                     18%
                    </td>
                    <td className="text-center">
                      26-04-2021
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
                      <div>Tax-2</div>
                     
                     </td>
					  <td>
                      <div>Variable</div>
                     
                    </td>
                    <td>
                      <div>SGST</div>
                     
                    </td>
                    <td className="text-center">
                     State GST
                    </td>
					<td className="text-center">
                     5%
                    </td>
                    <td className="text-center">
                      26-04-2021
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

export default TaxSetting
