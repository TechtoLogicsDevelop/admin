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



const ShippingSlots = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Shipping - Slots
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
             ShippingSlots
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addshipslot">Create Shipping Slots </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th > Slots </th>
					 <th >From Amount </th>
					
					<th className="text-center">To Amount</th>
					
					 <th className="text-center">Delivery Charges</th>
					 
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
                     Slot 1
                     
                    </td>
					<td>
                      Rs 1.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 300.00
                    </td>
					
					 <td className="text-center">
                   Rs 40.00
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
                     S-02
                     
                    </td>
                    <td>
                     Slot 2
                     
                    </td>
					<td>
                   Rs 301.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 1000.00
                    </td>
					
					 <td className="text-center">
                   Rs 20.00
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
                     S-03
                     
                    </td>
                    <td>
                     Slot 3
                     
                    </td>
					<td>
                   Rs 1001.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 10000.00
                    </td>
					
					 <td className="text-center">
                   Rs 00.00
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

export default ShippingSlots
