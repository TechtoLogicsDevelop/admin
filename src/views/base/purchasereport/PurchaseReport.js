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


const PurchaseReport = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Purchase reports
              
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
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Purchase Order </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Purchase Invoice</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Payments</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Debit Notes</CListGroupItem>
					
                   
                   
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
					
					
					<th className="text-center">PO No</th>
					<th >Vendor</th>
					 <th >Date</th>
					 <th >Delivery Date</th>
					
					<th >Order Amount</th>
                    
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                   PO_001
                    </td>
					 <td className="text-center">
                     Artwork
                    </td>
                    <td>
                     31/05/2021
                     
                    </td>
					<td>
                   31/05/2021
                     
                    </td>
					<td>
                   Rs 24542.00
                     
                    </td>
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
                 
                    </td>
					 <td className="text-center">
                    
                    </td>
                    <td>
                    
                     
                    </td>
					<td>
                  <strong> Total Order (Indian Rupees)</strong>
                     
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
					
					
					<th className="text-center">PI No</th>
					<th className="text-center">GRN No</th>
					<th className="text-center">PO No</th>
					<th >Vendor</th>
					 <th >Date</th>
					
					
					<th >Invoice Amount</th>
                    
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                   PI_001
                    </td>
					<td className="text-center">
                  GRN_0011
                    </td>
					<td className="text-center">
                  PI_0012
                    </td>
					 <td >
                     Artwork
                    </td>
                    <td>
                     31/05/2021
                     
                    </td>
					
					<td>
                   Rs 24542.00
                     
                    </td>
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
                 
                    </td>
					 <td className="text-center">
                    
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
					<th className="text-center">Payment No</th>
					<th className="text-center">Payment Type</th>
					<th className="text-center">Payment date</th>
					<th className="text-center">Invoice No</th>
					<th className="text-center">Invoice Amount</th>
					<th className="text-center">Balance</th>
					<th >Paid</th>
					 <th >Payment Mode</th>
					
				
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                   PAY_004
                    </td>
					<td className="text-center">
                 Payment Against Invoice
                    </td>
					<td className="text-center"> 
                  31/05/2021
                    </td>
					 <td > 
                    PI_0012
                    </td>
					 <td > 
                    Rs 26,387.00
                    </td>
                    <td>
                    Rs 00.00
                     
                    </td>
					<td>
                   Done
                     
                    </td>
					<td>
                   Cash
                     
                    </td>
					
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
                 
                    </td>
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
                <strong> Payment Total (Indian Rupees)</strong>
                     
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
                    
                   <th className="text-center">Sl No </th>
					
					
					<th >DebitNote No</th>
					<th >PI No</th>
					 <th >Vendor </th>
					 <th >Date </th>
					
					<th className="text-center">Debit Amount</th>
                     
					 
					  
                  </tr>
                </thead>
                    <tbody>  
                  <tr>
				   <td>
                    1
                    </td>
					 <td>
                     PRET_001
                    </td> 
					 <td>
                     PI_0012
                    </td>
					 <td>
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                    </td>
					
					 <td>
                     31/05/2021
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
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                  
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 5}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                 
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 6}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                 
				  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					<CTabPane active={activeTab === 7}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>

            
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					<CTabPane active={activeTab === 8}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                  
				  
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
      <CRow>
        
      </CRow>
    </>
  )
}

export default PurchaseReport
