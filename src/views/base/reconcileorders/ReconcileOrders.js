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

const ReconcileOrders = () => {
  return (
    <>
	<CRow>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
             
		   <p>
              
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/shippingorders">(1) Inboud Orders</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/transferorders">(2) Transfer Orders</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/ordersreturned">(3) RECONCILE DELIVERY</CHeaderNavLink></span></CButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/receivablesorders">(4) Manage Receivable</CHeaderNavLink></span></CButton>
              
            </p>
          
          
            </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Reconcile Orders
              
            </CCardHeader>
            <CCardBody>
            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Basket Id</th>
					<th className="text-center">To Hub</th> 
                    <th >Driver </th>
				    <th >Mobile </th>
					  <th>Status</th>
					  <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                  <CHeaderNavLink to="/">1007</CHeaderNavLink>  
                     
                    </td>
					 <td className="text-center">
                     Bangalore
                    </td>
                   
					<td>
                    Kumar
                     
                    </td>
					<td>
                    9513574682
                     
                    </td>
					
						
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					23/05/2021
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

export default ReconcileOrders
