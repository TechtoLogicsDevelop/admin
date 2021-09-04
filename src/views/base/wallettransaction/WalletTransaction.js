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



const WalletTransaction = () => {
	const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
	
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Wallet Transaction 
		    <div className="text-right">
			 <CHeaderNavLink   to="/usersprofile">Back</CHeaderNavLink> 
			 </div>
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
					
					 <th className="text-center">Credited </th>
					 <th className="text-center">Debitted </th>
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Date</th>
					 
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				  <td className="text-center">
				 <CHeaderNavLink to="/customerdetails"> Rajesh Kumar </CHeaderNavLink>
				  </td>
                     <td className="text-center">
                    rajesh84@gmail.com
                     
                    </td>
                    <td className="text-center"> 
                     87964525811
                     
                    </td>
					<td className="text-center">
                   COD
                     
                    </td>
					
					<td className="text-center">
                   Rs 2050.00
                    </td>
					<td className="text-center">
                  Rs 00.00
                    </td>
					
					 <td className="text-center">
                   Transaction Done
                    </td>
					 <td className="text-center">
                   27/05/2021
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

export default WalletTransaction
