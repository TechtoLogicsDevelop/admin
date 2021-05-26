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



const ShippingZones = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Shipping Zones
            </CCardHeader>
			
		   
            <CCardBody>
             <CCardHeader>
		        
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addshipzones">+Add Shipping Zones</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Country</th>
                    <th >State</th>
                    <th className="text-center">City</th>
                   <th  className="text-center">Area</th>
                   <th  className="text-center">PinCode</th>
					<th >Status</th>
					<th >ShippingZone</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                     India
                     
                    </td>
                    <td>
                     Karnataka
                    </td>
					 <td>
                     Bangalore
                    </td>
                    <td className="text-center">
                     T Dasarahalli
                    </td>
					<td className="text-center">
                     560065
                    </td>
                   
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                    <td>
                     India
                     
                    </td>
                    <td>
                     Karnataka
                    </td>
					 <td>
                     Bangalore
                    </td>
                    <td className="text-center">
                     Yeswanthpur
                    </td>
					<td className="text-center">
                     560071
                    </td>
                   
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
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

export default ShippingZones
