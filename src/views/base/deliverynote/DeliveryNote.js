
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



const DeliveryNote = () => {
	 const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Products Delivery Note

            </CCardHeader>
			 
		   
            <CCardBody>
		
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
					 <th>Delivery Note No</th>
					  <th >Delivery Note Date</th>
					  <th >Order No </th>
                    <th >Customer </th>
					 <th >Hub/ Warehouse </th>
					
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
                     DN_011
                     
                    </td>
                    <td >
                    01/06/2021
                    </td>
					  <td >
                    SO_025
                    </td>
					<td>
                   <CHeaderNavLink to="/customerdetails">Rajesh</CHeaderNavLink>
                     
                    </td>
					<td>
                   JP Nagar
                     
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

export default DeliveryNote
