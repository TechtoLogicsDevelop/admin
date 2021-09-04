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



const InvoiceList = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Edit or Download the Invoices
            </CCardHeader>
			
		   
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Date</th>
				   <th>User</th>
				    <th> Company</th>
                    <th>Details</th>
                    <th >Amount</th>
                   
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    00/06/2021
                     
                    </td>
                   
					 <td>
                    <CHeaderNavLink to="/">User name</CHeaderNavLink> 
                    </td>
					 <td>
                       <CHeaderNavLink to="/">Company Name</CHeaderNavLink> 
                    </td>
					 <td>
                     <CHeaderNavLink to="">Job Opportunities</CHeaderNavLink> 
                     
                    </td>
                   
					 <td >
                     Rs 1200
                    </td >
                                   
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					Download / View / Edit / Delete
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

export default InvoiceList
