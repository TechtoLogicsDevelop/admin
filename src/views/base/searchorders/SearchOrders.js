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
const fields = ['orderid','customername', 'storename','orderdate','grandtotal', 'deliverycharge','pickernane','promocode','scheduleddate', 'amount','paymentmode', 'status', 'view']


const SearchOrders = () => {
  return (
    <>
     
     

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Orders Search
            </CCardHeader>
			<CCardHeader>
			
			 <CFormGroup row>
                 <CFormGroup row>
				     <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Store</CLabel>
                    <CCol xs="6" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				    <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Order Status</CLabel>
                    <CCol xs="6" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Picker</CLabel>
                    <CCol xs="6" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
                   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> From Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">To Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery To Date" />
                  </CFormGroup>
                </CCol>
                </CFormGroup>				   
                </CFormGroup>
				<CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Search Orders</span></CButton>
				 
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

export default SearchOrders
