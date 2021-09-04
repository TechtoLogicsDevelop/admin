import React, { useState } from 'react'
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
  CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const DayBook = () => {
	const [currentPage, setCurrentPage] = useState(2)

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
                             <br/>
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default DayBook
