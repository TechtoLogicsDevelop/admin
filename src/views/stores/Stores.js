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



const Stores = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Stores
            </CCardHeader>
			
		   
            <CCardBody>
                 <CCardHeader>
		        
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addstore">+Add New Store</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Store Name</th>
					 <th >Store site</th>
                    <th >Store Zone</th>
					<th >Store Area</th>
                    <th >Code</th>
                   <th >Sort Order</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                     1
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="/storesdetails">Artcurate</CHeaderNavLink> 
                     
                    </td>
                    <td>
                     http://artcurate.com/
                    </td>
					 <td>
                     JP Nagar
                    </td>
					 <td>
                     JP Nagar
                    </td>
					 <td >
                     S-0094
                    </td >
                       <td>
					94
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

export default Stores
