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
   CFormGroup,
   CLabel,
   CSelect,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const PaymentArchive = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Approve the users payment
            </CCardHeader>
			
		   
            <CCardBody>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Date</th>
				   <th>Date paid</th>
				    <th> Invoice No</th>
                    <th>User</th>
                    <th >Company </th>
                   <th >Details</th>
                   <th >Amount</th>
				  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                   11/06/2021
                     
                    </td>
                   
					 <td>
                   11/06/2021
                     
                    </td>
					 <td>
                      0018
                    </td>
					 <td>
                    Rupesh
                     
                    </td>
                    <td>
                    Artcurate
                     
                    </td>
					 <td >
                     5
                    </td >
					 <td >
                     100
                    </td >
                               
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

export default PaymentArchive
