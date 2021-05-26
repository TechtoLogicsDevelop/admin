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


const PartiallyCancelled = () => {
  return (
    <>
     
     

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Partially Cancelled
            </CCardHeader>
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
                        	
                        <CHeaderNavItem  className="px-3" className="text-right ">
                         <CHeaderNavLink to="/partialpickview">View Partially Picked</CHeaderNavLink>
                       </CHeaderNavItem>		
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

export default PartiallyCancelled
