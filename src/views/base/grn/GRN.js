
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
                    
                   
                    <th>Sl No</th>
					 <th>GRN No</th>
					  <th >PO No</th>
					  <th >Vendor </th>
                    <th >Date </th>
					 <th >Raised By </th>
					
					<th >Status </th>
					<th >Action </th>
				
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     01
                     
                    </td>
					 <td>
                     GRN_0017
                     
                    </td>
                    <td className="text-center">
                     PO_0017
                    </td>
					<td>
                   <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                     
                    </td>
					<td>
                   31/05/2021
                     
                    </td>
						<td>
                   Inventory Manager
                     
                    </td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
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
