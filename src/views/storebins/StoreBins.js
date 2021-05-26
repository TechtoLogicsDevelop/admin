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



const StoreBins = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Store Bins Info
            </CCardHeader>
			
		   
            <CCardBody>
                 <CCardHeader>
		        
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addstorebins">+Add New StoreBin</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Store Name</th>
					 <th>Bin No</th>
                     <th>Bin Item</th>
                     <th>Bin Descricption</th>
                     <th>Stock Quantity</th>
                     
                   
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
                     Artbin-01
                    </td>
                    <td>
                    Artwork cloths
                    </td>
					 <td >
                    Artwork cloths
                    </td >
                       <td>
					<CHeaderNavLink to="/editbinquantity">10</CHeaderNavLink>
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

export default StoreBins
