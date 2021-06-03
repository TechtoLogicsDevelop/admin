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



const CreditNote = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Credit Note
            </CCardHeader>
			   <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createcreditnote"> Generate CreditNote </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl no</th>
					 <th>Credit Note No</th>
                    <th > Invoice No </th>
					
					<th >Customer</th>
				    <th >Product</th>
					 <th >Date</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     CRDIT_001
                     
                    </td>
					  <td>
                    <CHeaderNavLink to="/">SI_011</CHeaderNavLink> 
                     
                    </td>
					 <td>
                      <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                     
                    </td> 
					 <td>
                    Digital prints
                     
                    </td>
					 <td>
                   02/06/2021
                     
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

export default CreditNote
