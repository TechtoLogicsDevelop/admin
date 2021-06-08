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
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const JournalEntries = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Journal Entries
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addjournalentry">Add Entry  </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                   <th>Sl No</th>
					 <th>Group Name</th>
                    <th > Ledger Code</th>
					 <th >Ledger Name </th>
				  <th > DR</th>
				  <th > CR</th>
					 <th >Ledger Balance </th>
					<th>Narration</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    
                     
                    </td>
					  <td>
                   
                    </td>
                    <td>
                   
                     
                    </td>
					  <td>
                   
                     
                    </td>
					<td>
                   
                    </td>
					<td>
                   
                     
                    </td>
					
						<td>
					
					</td>
					
					<td>
					
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

export default JournalEntries
