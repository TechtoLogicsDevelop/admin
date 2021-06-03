
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



const GRN = () => {
	 const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Products GRN

            </CCardHeader>
			 <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/base/generategrn">+Generate GRN </CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
		   
            <CCardBody>
		
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Item Code/SKU</th>
					 <th>Store</th>
					  <th >Product</th>
					  <th >UOM </th>
                    <th >Minimum Qty </th>
					 <th >Available </th>
					
				
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1001
                     
                    </td>
					 <td>
                     JP Nagar
                     
                    </td>
                    <td >
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

export default GRN
