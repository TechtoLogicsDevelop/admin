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



const JobCoupons = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
               Job Coupons
            </CCardHeader>
			
		   
            <CCardBody>
                 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/addjobcoupon"> Add Job Coupons</CHeaderNavLink>
        </CHeaderNavItem>
		 </CHeaderNav>
	  
          </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Code</th>
				   <th>Discount(%)</th>
				 <th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                   01236
                     
                    </td>
                   
					 <td>
                    20%
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

export default JobCoupons
