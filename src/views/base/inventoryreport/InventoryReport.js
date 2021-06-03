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


const InventoryReport = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Inventory Report
              
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
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Stocks </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >GRN</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Delivery Note</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Stock Transfer</CListGroupItem>
					
                   
                   
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
                    
                   <th className="text-center">Item Code/SKU </th>
					
					
					<th className="text-center">Store</th>
					<th >Product</th>
					 <th >UOM</th>
					 <th >Minimum Qty</th>
					
					<th >Available</th>
                    
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   1001
                    </td>
					 <td className="text-center">
                   JP Nagar
                    </td>
					 <td className="text-center">
                    Digital Prints
                    </td>
                    <td>
                     Pcs
                     
                    </td>
					<td>
                  10
                     
                    </td>
					<td>
                   25
                     
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
					
					
					<th className="text-center">GRN No</th>
					<th >Vendor</th>
					 <th >Date</th>
					 <th >Total Value</th>
					
					<th >Raised By</th>
                    <th >Action</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   01
                    </td>
					 <td className="text-center">
                   GRN_0017
                    </td>
					<td className="text-center">
                  <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                    </td>
					<td className="text-center">
                  01/06/2021
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
					<th className="text-center">GRN No</th>
					<th className="text-center">PO No</th>
					<th className="text-center">Vendor</th>
					<th className="text-center">Date</th>
					
					<th className="text-center">Raised By</th>
					<th className="text-center">Total value</th>
					
				
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td >
                   01
                    </td>
					 <td >
                   GRN_0017
                    </td>
					<td >
                 PO_001
                    </td>
					<td className="text-center"> 
                  <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                    </td>
					 <td > 
                    01/06/2021
                    </td>
				
                    <td>
                    Inventory Manager
                     
                    </td>
						 <td > 
                    Rs 26,387.00
                    </td>
					
                  
                  </tr>
				    <tr>
                    
				
					 <td > 
                    
                    </td>
					 <td > 
                   
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
                    
                   <th className="text-center">Sl No </th>
					<th >From Warehouse </th>
					<th >To Warehouse </th>
					
					<th >Product Code </th>
					<th >Product </th>
					 <th >UOM </th>
					 <th >Transfer Qty </th>
					
					<th className="text-center">Date</th>
                     
					 
					  
                  </tr>
                </thead>
                    <tbody>  
                  <tr>
				    <td>
                   01
                    </td>
				   <td>
                   JP Nagar
                    </td>
					 <td>
                    Jayanagar
                    </td> 
					 <td>
                     1001
                    </td>
					 <td>
                     Digital Prints
                    </td>
					
					 <td>
                     Pcs
                    </td>
					 <td>
                   30 Pcs
                    </td>
					 <td>
                   01/06/2021
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
      <CRow>
        
      </CRow>
    </>
  )
}

export default InventoryReport
