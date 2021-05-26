import React from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
  CFormGroup,
  CLabel,
  CSelect,
  CButton,
  CInput,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const BankInquiry = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                 Bank Account Inquiry
            </CCardHeader>
			
		   
            <CCardBody>
           
				 <CCardHeader>
				 
			 <CFormGroup row>
			  <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Account</CLabel>
                    <CSelect custom name="select" id="select">
					 <option value="0">Account No</option>
                      <option value="1">001250001</option>
                      <option value="2">001250011</option>
                     
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
                   <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> From Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> To Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery To Date" />
                  </CFormGroup>
                </CCol><CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Show</span></CButton> 
                </CFormGroup>
				
				 
                 </CCardHeader>
          
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Type</th>
					 
                    <th >Date </th>
					
					
					<th >Debit </th>
					
					
					  <th className="text-center">Credit</th>
					  <th className="text-center">Balance</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    
                     <td>
                    Opening Balance
                     
                    </td><br/>
					<td>
                    Clossing Balance
                     
                    </td>
                    </td>
                   
					<td>
                    
                     <td>
                    5/24/2021
                     
                    </td><br/>
					<td>
                    05/25/2021
                     
                    </td>
                    </td>
					<td>
                    
                     <td>
                    10,296,224.43
                     
                    </td><br/>
					<td>
                   10,296,224.43
                     
                    </td>
                    </td>
					
					
					<td className="text-center">
                   00.00
                    </td>
					
						<td className="text-center">
					10,296,224.43
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

export default BankInquiry
