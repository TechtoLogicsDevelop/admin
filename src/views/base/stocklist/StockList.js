
import React, { useState, useEffect } from 'react'
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
  CPagination,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const StockList = () => {
	 const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Products Stock Availability

            </CCardHeader>
			
		   
            <CCardBody>
		
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Item Code/ SKU</th>
					 <th>Bar Code</th>
					  <th className="text-center">Image</th>
					  <th >Main </th>
                    <th >Category  </th>
					 <th >SubCategory </th>
					
					<th >Groups </th>
					<th >Brands </th>
					<th >Store </th>
					<th >Product  </th>
					<th >UOM  </th>
					<th >Minimum Qty </th>
					<th >Qty </th>
				
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1001
                     
                    </td>
					 <td>
                     1001
                     
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/digital-print.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					<td>
                   ART 2D & 3D
                     
                    </td>
					<td>
                    Art
                     
                    </td>
					<td>
                    Prints
                     
                    </td>
					<td>
                    ARTWORK POSTERS 
                     
                    </td>
					<td>
                    POSTERS BRANDS 
                     
                    </td>
					<td>
                    J P Nagar
                     
                    </td>
					<td>
                    Digital Prints
                     
                    </td>
					
					
						<td>
					Pcs
					</td>
						<td>
					10
					</td>
					<td>
					25
					</td>
                  </tr>
				  
				  
                </tbody>
              </table>
			  <br/>
            <CPagination
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

export default StockList
