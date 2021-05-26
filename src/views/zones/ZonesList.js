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



const ZonesList = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            ZonesList Setting
            </CCardHeader>
			 <CCardHeader>
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Country<span
																class="label label-primary ml-10">[45]</span></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">State<span
																class="label label-primary ml-10">[22]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2">City<span
																class="label label-primary ml-10">[9]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">Area<span
																class="label label-primary ml-10">[7]</span></span></CButton>
             
            
            </p>
          
          </CCardHeader>
		    <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/countries">Countries</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/states">States</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/cities"> Cities</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/areasmaster"> Areas with Pin Code</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/shippingzones"> Shipping Zones</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to=""> Zones Offers</CHeaderNavLink>
        </CHeaderNavItem>
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Country</th>
                    <th >State</th>
                    <th className="text-center">City</th>
                   <th  className="text-center">Area</th>
                   <th  className="text-center">PinCode</th>
					<th >Status</th>
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

export default ZonesList
