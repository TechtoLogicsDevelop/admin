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
  CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
 


const PurchaseInvoice = () => {
	const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Purchase Invoice
            </CCardHeader>
			
		   
            <CCardBody>
            

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                    <th >  PO No </th>
					<th >  GRN No </th>
					<th >  PI No </th>
					 <th >Vendor Name </th>
					
					  
					 <th > Date</th>
					
					 <th >Invoice Total</th>
					 
					 
					<th>Invoice Balance</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
				 <tr>
                     <td>
                     1
                     
                    </td>
					  <td>
                     PO_001
                     
                    </td>
					  <td>
                     GRN_0011
                     
                    </td>
					  <td>
                     PI_0012
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                     
                    </td>
					
					 <td className="text-center">
                   31/05/2021
                    </td>
					<td className="text-center">
                   Rs-2482.94
                    </td>
					<td className="text-center">
                   Rs-2482.94
                    </td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
                  
				  
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

export default PurchaseInvoice
