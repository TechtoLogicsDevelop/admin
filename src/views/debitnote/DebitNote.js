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



const DebitNote = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          Manage DebitNote
            </CCardHeader>
			 <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/adddebitnote">+Generate </CHeaderNavLink>
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
				  <th>Debit Note No</th>
				   <th>Invoice No</th>
				    
                    <th>Vendor</th>
                    <th >Product Name</th>
					 <th >Date</th>
                 
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				   <td>
                    1
                    </td>
					 <td>
                     PRET_001
                    </td> 
					 <td>
                     PI_0012
                    </td>
					 <td>
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                    </td>
					 <td>
                     Rajasthani paintings (on textiles)
                    </td>
					 <td>
                     31/05/2021
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

export default DebitNote
