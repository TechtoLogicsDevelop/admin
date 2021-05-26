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
  CLabel,
  CSelect,
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

const PaidAgent = () => {
  return (
    <>
	<CRow>
        <CCol>
          <CCard>
            <CCardHeader >
             
		
                      <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Agent</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Agent 1</option>
                      <option value="1">Agent 2</option>
                     
					  
                    </CSelect>
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
              Paid Agent Reconcile
              
            </CCardHeader>
            <CCardBody>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Order Id</th>
					<th className="text-center">Customer</th> 
                    <th >Agent </th>
					 <th >Order Date </th>
					  <th >Payment Type </th>
					   <th >Grand Total </th>
					  <th >Collectable Amount </th>
				    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    <CHeaderNavLink to="/paidoverview">1007</CHeaderNavLink> 
                     
                    </td>
					 <td className="text-center">
                     Satheeh SB
                    </td>
                   
					<td>
                     Sandeep 
                     
                    </td>
					<td>
                     24/05/2021
                     
                    </td>
					<td>
                     COD
                     
                    </td>
					<td>
                     Rs 2050
                     
                    </td>
					<td>
                    Rs 2050
                     
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

export default PaidAgent
