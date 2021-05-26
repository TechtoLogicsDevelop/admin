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

const ShippingOrders = () => {
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
			<CButton size="lg"  className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/receivablesorders">(4) Manage Receivable</CHeaderNavLink></span></CButton>
              
            </p>
          
          
            </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Inbound Orders
              
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader className="text-right">
              Add Basket
            </CCardHeader>
			<CCardBody>
			 <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cil-magnifying-glass" /> Search</CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Scan or Order No. " />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
				<CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Add Basket</CButton>
              
            </CCardFooter>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					<th className="text-center">Customer</th> 
                    <th >Payment Type </th>
				    <th >Amount </th>
					  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    1007
                     
                    </td>
					 <td className="text-center">
                     Sandeep B
                    </td>
                   
					<td>
                    COD
                     
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

export default ShippingOrders
