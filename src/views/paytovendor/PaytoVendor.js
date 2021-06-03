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
   CInputGroup,
   CLabel,
   CInput,
   CInputGroupAppend,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const PaytoVendor = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Manage Pay to Vendor
            </CCardHeader>
			 <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/vendorspay">+Pay to Vendor</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
		   
            <CCardBody>
                 <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Search Vendor</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="8" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Go!</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th>Sl No</th>
				  <th>Payment No</th>
				   <th>Payment Type</th>
				    <th>Payment Date</th>
					 <th>PI No</th>
                    <th>Vendor</th>
                    <th >Paid Amount Now</th>
					 <th >Balance Amount</th>
                   <th >Payment Method</th>
                  
                  
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
                     PAY_004
                    </td>
					 <td>
                     Payment Against Invoice
                    </td>
					 <td>
                     31/05/2021
                    </td>
					 <td>
                    PI_001
                    </td>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                    Rs 26,387.00
                    </td>
					 <td>
                     Rs 00.00
                    </td>
					 <td>
                    Cash
                    </td>
                                     
					<td>
					Payment Done
					</td>
					<td>
					 Edit / Delete
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

export default PaytoVendor
