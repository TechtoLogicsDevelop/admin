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



const Currency = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Currency Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addcurrency">+Add New Currency</CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/currencyformat">Currency Format</CHeaderNavLink>
                     </CHeaderNavItem>
					
               
                     
                </CHeaderNav>
              </CCardHeader>
                  <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>Automatic Convertion
				  <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>Manual Conversion
				  <hr/>
				  
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Country Name</th>
                    <th className="text-center">Currency</th>
					<th className="text-center"> Code</th>
                    <th className="text-center">Symbol</th>
                   <th className="text-center">Price</th>
				   <th className="text-center">Format</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>India</div>
                     
                    </td>
					 <td className="text-center">
                    Rupee
                    </td>
                    <td className="text-center">
                      INR
                    </td>
                    <td className="text-center">
                      ?
                    </td>
					<td className="text-center">
                     1
                    </td>
                     <td className="text-center">
                    INR 00.00
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
                      <div>Australia</div>
                     
                    </td>
					 <td className="text-center">
                    Dollar
                    </td>
                    <td className="text-center">
                      AUD
                    </td>
                    <td className="text-center">
                     $
                    </td>
					 <td className="text-center">
                     0.014
                    </td>
                      <td className="text-center">
                     AUD$ 00.0
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

export default Currency
