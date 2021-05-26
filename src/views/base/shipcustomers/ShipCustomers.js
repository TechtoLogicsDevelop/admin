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



const ShipCustomers = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Our Customers / Clients
            </CCardHeader>
			
		   
            <CCardBody>
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th > First Name </th>
					 <th >Last Name </th>
					
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     C-01
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="/customerdetails">Rajesh</CHeaderNavLink>
                     
                    </td>
					<td>
                    Kumar
                     
                    </td>
					
					<td className="text-center">
                   rajesh84@gmail.com
                    </td>
					
					 <td className="text-center">
                   87964525811
                    </td>
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                     <td>
                     C-02
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="">Naveen</CHeaderNavLink>
                     
                    </td>
					<td>
                   SB
                     
                    </td>
					
					<td className="text-center">
                   sbnaveen@gmail.com
                    </td>
					
					 <td className="text-center">
                   9513574560
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

export default ShipCustomers
