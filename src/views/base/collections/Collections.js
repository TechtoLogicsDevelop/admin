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



const Collections = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Collections
            </CCardHeader>
			   <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/collectionsentry">Collections Entry </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl no</th>
					 <th>Collections No</th>
                    <th > Collections Type </th>
					 <th >Collections Date </th>
					<th >Sales Invoice</th>
					<th >Customer</th>
				    <th >Collection Amount</th>
					 <th >Balance</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     CLN_220
                     
                    </td>
					  <td>
                    Collection Against Invoice
                     
                    </td>
					 <td>
                    02/06/2021
                     
                    </td>
					 <td>
                    SI_001
                     
                    </td>
                    <td>
                      <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                     
                    </td> 
                  
					<td>
                    Rs 5000.00
                     
                    </td>
					<td>
                    Rs 00.00
                     
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

export default Collections
