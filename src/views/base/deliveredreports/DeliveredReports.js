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

const DeliveredReports = () => {
  return (
    <>
	<CRow>
        <CCol>
          <CCard>
            <CCardHeader >
			<CFormGroup row className="my-0">
			   <CCol md="3">
                    <CInputGroup>
                      
                      <CInput id="input1-group1" name="input1-group1" placeholder="Order Id/ External Order Id" />
                     
                    </CInputGroup>
                  </CCol>
				<CCol md="3">
                    <CInputGroup>
                      
                      <CInput id="input2-group2" name="input2-group2" placeholder="Customers Name" />
                     
                    </CInputGroup>
                  </CCol>
                <CCol md="3">
                    <CInputGroup>
                      
                      <CInput id="input3-group3" name="input3-group3" placeholder="Customers Mobile No" />
                     
                    </CInputGroup>
                  </CCol>
				 <CCol md="3">
                    <CInputGroup>
                      
                      <CInput id="input3-group4" name="input3-group4" placeholder="Shipper Name" />
                     
                    </CInputGroup>
                  </CCol>
			
				
              </CFormGroup> 
            <hr/>
			<CFormGroup row className="my-0">
			   <CCol md="6" >
                    <CInputGroup >
                     
                      <CDropdown className="input-group-append">
                        <CDropdownToggle color="info">
                          Search Category
                        </CDropdownToggle>
                        <CDropdownMenu>
                          
						  <CDropdownItem divider />
                          <CDropdownItem>Last 3 Days Orders</CDropdownItem>
						  <CDropdownItem>Last 15 Days Orders</CDropdownItem>
						  <CDropdownItem>Month Orders</CDropdownItem>
						  <CDropdownItem>All Orders</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CInputGroup>
                  </CCol>
				 <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="first">Start Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="first">End Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
			
				
              </CFormGroup> 
		 
          <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Search </CButton>&nbsp;&nbsp;
             
            </CCardFooter>
          
            </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Delivered Reports
              
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

export default DeliveredReports
