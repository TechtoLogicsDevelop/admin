import React from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
  CFormGroup,
  CButton,
  CLabel,
  CInputGroup,
  CInput,
  CInputGroupAppend,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const DayBook = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         DayBook
            </CCardHeader>
			
		   
            <CCardBody>
            <CFormGroup>
                      <CLabel htmlFor="appendedInputButtons">Select Date</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButtons" size="16" type="date" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Search</CButton>
                           
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Group Code</th>
					 <th>Group Name</th>
                    <th > Ledger Code </th>
					 <th >Ledger Name </th>
					
					<th className="text-center">Debit</th>
					
					 <th className="text-center">Credit</th>
					 
					<th>Narration</th>
					
					 
                  </tr>
                </thead>
                <tbody>
                  
				  
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default DayBook
