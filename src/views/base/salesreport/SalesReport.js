import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CButton,
  CSwitch,
  CHeaderNavLink,
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'


const SalesReport = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Sales reports
              
            </CCardHeader>
			
            <CCardBody>
			  <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select From Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select To Date</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Report </CButton>&nbsp;&nbsp;
                </CCol>
              </CFormGroup>
			   <hr/>
                     <CCardHeader className="text-center">
            <stong>Artcurate</stong>
              
            </CCardHeader>
			 <CCardHeader className="text-center">
            <small>Reports: 01-05-2021 To 31-05-2021</small>
              
            </CCardHeader>
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Sales Quatation </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Sales Order</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Sales Invoice</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Collections</CListGroupItem>
					<CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Credit Notes</CListGroupItem>
                   
                   
                  </CListGroup>
                </CCol>
                <CCol xs="10">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
             
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Sl No </th>
					
					
					<th className="text-center">Sales Quatation No</th>
					<th >Date</th>
					 <th >Customer</th>
					 <th >Quatation value</th>
					
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                   	SQ_01
                    </td>
					<td>
                     03/06/2021
                     
                    </td>
					<td> <CHeaderNavLink to="/">Naveen</CHeaderNavLink>
                    </td>
                   
					<td>
                   Rs 24542.00
                     
                    </td>
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					
                    <td>
                    
                     
                    </td>
					 <td>
                    
                     
                    </td>
					<td>
                  <strong> Total (Indian Rupees)</strong>
                     
                    </td>
					<td>
                   <strong>(Rs 24542.00)</strong>
                     
                    </td>
				
                  
                  </tr>
				   
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                 <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Sl No </th>
					
					
					<th className="text-center">SO No</th>
					<th className="text-center">SO Date</th>
					<th className="text-center">Customer</th>
					<th >Delivery Date</th>
					 <th >Total Order Value</th>
				
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                  SO_011
                    </td>
					<td className="text-center">
                  02/06/2021
                    </td>
					<td> <CHeaderNavLink to="/">Naveen</CHeaderNavLink>
                    </td>
					 <td >
                     06/06/2021
                    </td>
                   
					
					<td>
                   Rs 24542.00
                     
                    </td>
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					
                    <td>
                    
                     
                    </td>
					<td>
                    
                     
                    </td>
					  <td>
                    
                     
                    </td>
					<td>
                  <strong> Total Invoice (Indian Rupees)</strong>
                     
                    </td>
					<td>
                   <strong>(Rs 24542.00)</strong>
                     
                    </td>
				
                  
                  </tr>
				   
				  
                </tbody>
              </table>
            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Sl No </th>
					<th className="text-center">Invoice No</th>
					<th className="text-center"> Order No</th>
					<th className="text-center">Invoice Date</th>
					<th className="text-center">Delivery Note</th>
					<th className="text-center">Customer</th>
					<th className="text-center">Invoice Amount</th>
					
					
				
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                  SI_011
                    </td>
					<td className="text-center">
                SO_011
                    </td>
					<td className="text-center"> 
                  02/06/2021
                    </td>
					 <td > 
                   DN_011
                    </td>
					<td> <CHeaderNavLink to="/">Naveen</CHeaderNavLink>
                    </td>
                    <td>
                   Rs 26,387.00
                     
                    </td>
				
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					
					<td className="text-center"> 
                 
                    </td>
					 <td > 
                   
                    </td>
					 <td > 
                    
                    </td>
                    <td>
                   
                     
                    </td>
					<td>
                <strong>  Total (Indian Rupees)</strong>
                     
                    </td>
					<td>
                 
                   <strong>  ( Rs 26,387.00 ) </strong>
                    </td>
					
                  
                  </tr>
				   
				  
                </tbody>
              </table>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Co- No </th>
					
					
					<th >Co-Type</th>
					<th >Co-Date</th>
					 <th >Invoice No </th>
					 <th >Customer </th>
					 <th >Invoice Amount </th>
					 <th >Invoice Balance </th>
					  <th >Co- Amount </th>
					 <th >Co-Mode </th>
					<th className="text-center">Remarks</th>
                     
					 
					  
                  </tr>
                </thead>
                    <tbody>  
                  <tr>
				   <td>
                   CLN_220
                    </td>
					 <td>
                     Collection Against Invoice
                    </td> 
					 <td>
                     02/06/2021
                    </td>
					 <td>
                     SI_001
                    </td>
					 <td>
                      <CHeaderNavLink to="/">Naveen</CHeaderNavLink>
                    </td>
					
					 <td>
                      Rs 9000.00
                    </td>
					 <td>
                   Rs 00.00
                    </td>
					 <td>
                      Rs 9000.00
                    </td>
					 <td>
                  COD
                    </td>
					 <td>
                  Paid
                    </td>
                  </tr>
				     <tr>
				   <td>
                   
                    </td>
					 <td>
                   
                    </td> 
					 <td>
                   
                    </td>
					 <td>
                   
                    </td> 
					 <td>
                    
                    </td>
					
					 <td>
                     
                    </td>
					 <td>
                    <strong> Debit amount Total (Indian Rupees)</strong>
                    </td>
					 <td>
                     <strong> Rs 9000.00 </strong>
                    </td>
                  </tr>
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					   <CTabPane active={activeTab === 4}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Credit Note No </th>
					
					
					<th >Invoice No</th>
					<th >Customer </th>
					<th >Product</th>
					 <th >Date </th>
					
					 <th >Returned </th>
				 
                  </tr>
                </thead>
                    <tbody>  
                  <tr>
				   <td>
                   CRDIT_001
                    </td>
					 <td>
                     	SI_011
                    </td> 
					 <td>
                    <CHeaderNavLink to="/">Naveen</CHeaderNavLink>
                    </td>
					 <td>
                     Digital prints
                    </td>
					 <td>
                      02/06/2021
                    </td>
					
					 <td>
                      Rs 9000.00
                    </td>
					
                  </tr>
				     <tr>
				   <td>
                   
                    </td>
					
					 <td>
                    
                    </td>
					 <td>
                    
                    </td>
					 <td>
                     
                    </td>
					 <td>
                    <strong> Total </strong>
                    </td>
					 <td>
                     <strong> Rs 9000.00 </strong>
                    </td>
                  </tr>
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    
                   
					
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
    </CRow>
      
    </>
  )
}

export default SalesReport
