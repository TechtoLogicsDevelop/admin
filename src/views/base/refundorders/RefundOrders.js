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
const fields = ['orderid','customername', 'storename','orderdate','grandtotal', 'deliverycharge','pickernane','promocode','scheduleddate', 'amount','paymentmode','refundststus', 'Orderstatus', 'view']


const RefundOrders = () => {
  return (
    <>
     
     

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Refund Orders
            </CCardHeader>
			<CCardHeader>
			<div className="text-right ">
                         <CHeaderNavLink to="/">View Returned</CHeaderNavLink>
                       </div>
			 <CFormGroup row>
                
				     <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Store</CLabel>
                    <CCol xs="10" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol> <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton>
			  </CFormGroup>
				
				 
                 </CCardHeader>	
                        	
                      		
			 <CCardHeader>
		 
          
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

export default RefundOrders
