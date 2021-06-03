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



const SalesInvoice = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Sales Invoice
            </CCardHeader>
			
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl no</th>
					 <th>Invoice No</th>
                    <th > Date </th>
					 <th >Customer  </th>
					<th >Delivery Date </th>
					<th >Invoice Amount</th>
				    <th >Paid</th>
					 <th >Balance</th>
					  <th >Payment Mode</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     <CHeaderNavLink to="/">SI_011</CHeaderNavLink> 
                     
                    </td>
					  <td>
                    02/05/2021
                     
                    </td>
                    <td>
                      <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                     
                    </td> 
                  		  <td>
                    06/05/2021
                     
                    </td>			
					<td>
                    Rs 5000.00
                     
                    </td>
					<td>
                    Rs 5000.00
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					<td>
                    COD
                     
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

export default SalesInvoice
