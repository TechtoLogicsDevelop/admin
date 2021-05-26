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



const PaymentWallets = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
           Payment Wallets 
            </CCardHeader>
			
		   
            <CCardBody>
                 <CCardHeader>
		        
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addwallet">+Add New </CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Id</th>
                    <th >Wallet Name</th>
                   
                  
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                   01
                     
                    </td>
                    <td>
                     Google Pay
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
                     02
                     
                    </td>
                    <td>
                     Phone Pay
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

export default PaymentWallets
