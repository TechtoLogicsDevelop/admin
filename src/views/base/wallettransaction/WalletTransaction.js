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



const WalletTransaction = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Wallet Transaction
            </CCardHeader>
			
		   
            <CCardBody>
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Customer </th> 
                    <th className="text-center">Email </th>  
					 <th className="text-center">Mobile </th>
					
					<th className="text-center">Transaction Type</th>
					
					 <th className="text-center">Credited Amount</th>
					 <th className="text-center">Debitted Amount</th>
					  <th className="text-center">Description</th>
					 
					    <th className="text-center">Created Date</th>
					 
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				  <td>
				 <CHeaderNavLink to="/customerdetails"> Rajesh Kumar </CHeaderNavLink>
				  </td>
                     <td>
                    rajesh84@gmail.com
                     
                    </td>
                    <td>
                     87964525811
                     
                    </td>
					<td>
                   COD
                     
                    </td>
					
					<td className="text-center">
                   Rs 2050.00
                    </td>
					<td className="text-center">
                  Rs 00.00
                    </td>
					
					 <td className="text-center">
                   Transaction Completed Sucessfully
                    </td>
					 <td className="text-center">
                   27/05/2021
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

export default WalletTransaction
