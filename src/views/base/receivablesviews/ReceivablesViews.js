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
  CLabel,
  CTextarea,
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

const ReceivablesViews = () => {
  return (
    <>
	<CRow>
        <CCol>
         
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Inbound Orders
              
            </CCardHeader>
            <CCardBody>
           <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Order Id</th>
					<th className="text-center">Costumer Name</th> 
                    <th >Shipper Name </th>
				    <th >Payment Mode </th>
					  <th>Total Collected Amount</th>
					  <th>Updated Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                   100 
                     
                    </td>
					<td className="text-center">
                     Satheeh SB
					
                    </td>
					 <td className="text-center">
                     Sandeep 
                    </td>
                   
					<td>
                   COD
                     
                    </td>
					<td>
                    Rs 2050
                     
                    </td>
					
						
					<td>
					23/05/2021
					<br/> <small>11:25:00 AM</small>
					</td>
                  </tr>
				   
				   
				  
                </tbody>
              </table>
			  <br/>
			   <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Comments</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Comments" 
                    />
                  </CCol>
                </CFormGroup>
				 <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              
            </CCardFooter>
            </CCardBody>
          </CCard>
        </CCol>

        
      </CRow>

     

      
       
    </>
  )
}

export default ReceivablesViews
