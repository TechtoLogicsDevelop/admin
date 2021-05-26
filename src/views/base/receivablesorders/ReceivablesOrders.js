import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CButton,
  CHeaderNavLink,
  CForm,
  CFormGroup,
  CInputGroup,
  CInputGroupPrepend,
  CInput,
  CInputGroupAppend,
  CSwitch,
  CCardFooter,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


import usersData from '../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['orderid','customername', 'status','createddate','print']

const ReceivablesOrders = () => {
  return (
    <>
	<CRow>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
             
		   <p>
              
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/shippingorders">(1) INBOUND ORDERS</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/transferorders">(2) Transfer Orders</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/reconcileorders">(3) Reconcile Delivery</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/receivablesorders">(4) MANAGE RECEIVABLE</CHeaderNavLink></span></CButton>
              
            </p>
          
          
            </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
             Delivered Orders
              
            </CCardHeader>
            <CCardBody>
           <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>BasketId</th>
					<th className="text-center">Driver</th> 
                    <th >Complete Time </th>
				    <th >Order Amount </th>
					  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                   <CHeaderNavLink to="/base/receivablesviews">1007</CHeaderNavLink> 
                     
                    </td>
					 <td className="text-center">
                     Sandeep <br/>
					 <small>9513574682</small>
                    </td>
                   
					<td>
                    11:25:00 AM
                     
                    </td>
					<td>
                    Rs 2050
                     
                    </td>
					
						
					<td>
					View / Delete
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

export default ReceivablesOrders
