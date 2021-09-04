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



const Subscriptions = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Manage the Subscriptions
            </CCardHeader>
			
		   
            <CCardBody>
                   <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/addsubscriptions"> Add Subscriptions</CHeaderNavLink>
        </CHeaderNavItem>
		 </CHeaderNav>
	  
          </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id </th>
				   <th>Name</th>
				    <th> Description</th>
                    <th>Maximum Listings</th>
                    <th >Price </th>
                   <th >Billed</th>
                  
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
                   Sample Subscription 
                    </td>
					 <td>
                       The description comes here
                    </td>
					 <td>
                     10 
                     
                    </td>
                   
					 <td >
                     Rs 19.00
                    </td >
                        <td >
                    1
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

export default Subscriptions
