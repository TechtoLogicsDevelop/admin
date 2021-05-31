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



const ManageOffers = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Manage Offers
            </CCardHeader>
			
		   
            <CCardBody>
              <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createnewoffer">Add New Offers </CHeaderNavLink> |  <CHeaderNavLink to="/">Consumption View </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>  

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Offer Name </th> 
                    <th className="text-center">Mode </th>  
					 <th className="text-center">Offer type </th>
					 <th className="text-center">Amount </th>
					 <th className="text-center"> % </th>
					
					<th className="text-center">Start Date</th>
					
					 <th className="text-center">End Date</th>
					 <th className="text-center">Total Usage</th>
					  <th className="text-center">Status</th>
					 <th className="text-center">Actions</th>
					  
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				  <td>
				 <CHeaderNavLink to="/"> Deepawali Offer </CHeaderNavLink>
				  </td>
                     <td>
                    
                     Coupon
                    </td>
                    <td>
                    Flat 
                     
                    </td>
					<td>
                   Rs 200.00
                     
                    </td>
					<td>
                    -
                     
                    </td>
					<td className="text-center">
                   29/05/2021
                     
                    </td>
					
					<td className="text-center">
                   29/06/2021
                    </td>
					<td className="text-center">
                  Rs 2570.00
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

export default ManageOffers
