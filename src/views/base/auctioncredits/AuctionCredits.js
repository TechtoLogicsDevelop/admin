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



const AuctionCredits = () => {
	 const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
     
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Auction Wallet Credit
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
					
					<th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     smith Jhonson
                     
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
                    2021-08-13 <br/>10:38:03
                    </td>
					<td>
                  $1,000.00
                     
                    </td>
					<td>
                   Wallet recharge details in order #11
                     
                    </td>
					
					
					<td>
					Edit / Delete
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

export default AuctionCredits
