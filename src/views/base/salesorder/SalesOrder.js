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



const SalesOrder = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Sales Order
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
            Sales Order
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createsalesorder">Create Order </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl no</th>
					 <th>Order No</th>
                    <th > Date </th>
					 <th >Customer  </th>
					<th >Delivery Date </th>
					<th >Order Value</th>
				    <th >Credit value</th>
					 <th >Balance</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     <CHeaderNavLink to="/">SO_011</CHeaderNavLink> 
                     
                    </td>
					  <td>
                    02/05/2021
                     
                    </td>
                    <td>
                      <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                     
                    </td> 
                  		  <td>
                    06/05/2021
                     
                    </td>			
					<td>
                    Rs 5000.00
                     
                    </td>
					<td>
                    Rs 4000.00
                     
                    </td>
					<td>
                    Rs 1000.00
                     
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

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default SalesOrder
