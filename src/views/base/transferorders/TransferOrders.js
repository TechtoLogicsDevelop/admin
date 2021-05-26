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
  CButton,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const TransferOrders = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Basket List
            </CCardHeader>
			
		   
            <CCardBody>
              
			 <CCardHeader className="text-center">
             
		   <p>
              
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/shippingorders">(1) Inbound Orders</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/transferorders">(2) TRANSFER ORDERS</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/reconcileorders">(3) Reconcile Delivery</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/receivablesorders">(4) Manage Receivable</CHeaderNavLink></span></CButton>
              
            </p>
          
          
            </CCardHeader>
            
     
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                    <th > Basket Id </th>
					
					
					<th className="text-center">Driver Name</th>
					
					 <th className="text-center">Mobile</th>
					 
					<th>Last Loged In</th>
					
					  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     01
                     
                    </td>
                    <td>
                     b-15
                     
                    </td>
					<td>
                    Kumar
                     
                    </td>
					
					
					
					 <td className="text-center">
                   87964525811
                    </td>
						<td>
					10 sec ago
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

export default TransferOrders
