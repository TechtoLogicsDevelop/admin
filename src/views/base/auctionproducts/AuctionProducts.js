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



const AuctionProducts = () => {
	 const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
     
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Auction Product List
            </CCardHeader>
			
		   
            <CCardBody>
			 <CCardHeader>
		
          
          </CCardHeader>
            
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Product</th>
					
					 <th>Auction Price</th>
					 <th>Reserve Price</th>
					  
					  <th >Start Time</th>
                    <th >End Time  </th>
					 <th >Valid Days </th>
					
					<th >Increment</th>
					<th >Automatic</th>
					<th >Bid Status  </th>
				
					<th>Auctions Status</th>
					<th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     Black Fur Collar
                     
                    </td>
					
					<td>
                   40
                     
                    </td>
					<td>
                   80
                     
                    </td>
					<td>
                    2021-08-11<br/> 10:38:03
                     
                    </td>
					<td>
                    2021-08-13 <br/>10:38:03
                    </td>
					<td>
                   2 days
                     
                    </td>
					<td>
                    Enable
                     
                    </td>
					<td>
                    Enable
                     
                    </td>
					<td>
                    Enable
                     
                    </td>
					
						<td>
					Enable
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

export default AuctionProducts
