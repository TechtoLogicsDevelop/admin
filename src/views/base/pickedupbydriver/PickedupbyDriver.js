import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CButton,
  CFormGroup,
  CLabel,
  CSelect,
  CHeaderNavItem,
  CHeaderNavLink,
  CInput,
  CRow
} from '@coreui/react'
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
const fields = ['orderid','customername', 'storename','orderdate','grandtotal', 'deliverycharge','partner', 'pickernane','promocode','scheduleddate', 'amount','paymentmode', 'status', 'view']


const PickedupbyDriver = () => {
  return (
    <>
     
     

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Picked up by Driver
            </CCardHeader>
			<CHeaderNavItem  className="px-3" className="text-right ">
                         <CHeaderNavLink to="/pickedupview">View Picked Up</CHeaderNavLink>
                       </CHeaderNavItem>
			<CCardHeader>
			 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Store</CLabel>
                  </CCol>
                  <CCol xs="4" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select Store</option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol> <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton> 
                </CFormGroup>
				
				 
                 </CCardHeader>	
			
                       		
			 <CCardHeader>
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/ordersmanage">Awating Confirm</CHeaderNavLink></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"> <CHeaderNavLink to="/base/confirmorders">Orders Confirmed</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/ordersprocess">Processing</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/awaitingdispatch">Awaiting Dispatch</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-tumblr btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/pickedupbydriver">PICKED UP BY DRIVER</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/onroute">On Route/In Transit</CHeaderNavLink></span></CButton>
            <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/ordersdelivered">Delivered</CHeaderNavLink></span></CButton>
			&nbsp;<CButton size="sm" className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/ordersreturned">Returned</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-vimeo btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/base/orderscancelled">Cancelled</CHeaderNavLink></span></CButton>
            
            </p>
          
          </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
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
      </CRow>
       
    </>
  )
}

export default PickedupbyDriver
