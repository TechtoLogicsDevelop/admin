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
  CButton,
  CProgress,
  CPagination,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const AuctionDebits = () => {
	 const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
     
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Auction Wallet Debits
            </CCardHeader>
			
		   
            <CCardBody>
			 <CCardHeader>
		
          
          </CCardHeader>
            
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Customer</th>
					
					 <th>Email</th>
					 <th>Phone</th>
					  
					  <th >Order Id</th>
                    <th >Date Added </th>
					 <th >Amount </th>
					
					<th >Description</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     Smith Jhonson
                     
                    </td>
					
					<td>
                  smithj@gmail.com
                     
                    </td>
					<td>
                  9876543210
                     
                    </td>
					<td>
                   bo-11
                     
                    </td>
					<td>
                   2020-08-11 11:40:54
                    </td>
					<td>
                  $1,000.00
                     
                    </td>
					<td>
                   Amount deducted for the auction bid
                     
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

export default AuctionDebits
