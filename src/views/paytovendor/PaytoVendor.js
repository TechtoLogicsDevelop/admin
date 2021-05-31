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
                  
                    <th>Vendor</th>
                    <th >Amount</th>
                   <th >Payment Method</th>
                  
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                     Rs 2000.00
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
				  
				    <tr>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                     Rs 2500.00
                    </td>
					 <td>
                    Phone Pay
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
