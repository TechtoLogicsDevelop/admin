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
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdown,
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

const OrdersOverView = () => {
  return (
    <>
	<CRow>
        <CCol>
          <CCard>
            <CCardHeader >
             
		  <CFormGroup row >
                  <CCol md="6" className="text-center">
                    <CInputGroup >
                      <CInput type="search" id="input2-group3" name="input2-group3" placeholder="Search" />
                      <CDropdown className="input-group-append">
                        <CDropdownToggle color="primary">
                          Search Category
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem>Order Id/ External Order Id</CDropdownItem>
                          <CDropdownItem>Customers Name</CDropdownItem>
                          <CDropdownItem>Customers Mobile No</CDropdownItem>
                          <CDropdownItem divider />
                          <CDropdownItem>Shipper Name</CDropdownItem>
						  <CDropdownItem>Shipper Mobile No</CDropdownItem>
						  <CDropdownItem divider />
                          <CDropdownItem>Last 3 Days Orders</CDropdownItem>
						  <CDropdownItem>Last 15 Days Orders</CDropdownItem>
						  <CDropdownItem>Month Orders</CDropdownItem>
						  <CDropdownItem>All Orders</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
          
          
            </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Orders Overview
              
            </CCardHeader>
            <CCardBody>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Order Id</th>
					<th className="text-center">Customer</th> 
                    <th >Agent </th>
				    <th >Status </th>
					  <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    <CHeaderNavLink to="/overviewdetails">1007</CHeaderNavLink> 
                     
                    </td>
					 <td className="text-center">
                     Satheeh SB
                    </td>
                   
					<td>
                     Sandeep 
                     
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

export default OrdersOverView
