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



const DeliverySlots = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Delivery Slots
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
             Delivery Slots
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/adddeliveryslot">Create Delivery Slots </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th > Slots </th>
					 <th >From Time </th>
					
					<th className="text-center">To Time</th>
					
					
					 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     S-01
                     
                    </td>
                    <td>
                     Time 1
                     
                    </td>
					<td>
                     09:00 AM
                     
                    </td>
					
					<td className="text-center">
                      12:00 PM
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
                     T-02
                     
                    </td>
                    <td>
                     Time 2
                     
                    </td>
					<td>
                    12:00 PM
                     
                    </td>
					
					<td className="text-center">
                    03:00 PM
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
                     T-03
                     
                    </td>
                    <td>
                     Time 3
                     
                    </td>
					<td>
                    03:00 PM
                     
                    </td>
					
					<td className="text-center">
                   05:00 PM
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

export default DeliverySlots
