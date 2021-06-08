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


const FinanceReport = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Finance Report
              
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
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Trial Balance </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Income Statement</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Balance Sheet</CListGroupItem>
                   
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
                    
                   <th className="text-center">Particulars </th>
					
					
					<th className="text-center">Code</th>
					<th >Debit</th>
					 <th >Credit</th>
				  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
                  
                    </td>
                    <td>
                  
                     
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
                    
                   <th className="text-center">Particulars </th>
					
					
					<th className="text-center">Code</th>
					<th >Amount</th>
					
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
               
                    </td>
					<td className="text-center">
                 
                    </td>
					<td className="text-center">
            
                    </td>
					
					
                  
                  </tr>
				    <tr>
                    <td>
                 
                     
                    </td>
					<td>
                  <strong> Total Expenses</strong>
                     
                    </td>
					<td>
                   <strong>00.00</strong>
                     
                    </td>
				
                  
                  </tr>
				    <tr>
                    <td>
                 
                     
                    </td>
					<td>
                  <strong> Profit</strong>
                     
                    </td>
					<td>
                   <strong>00.00</strong>
                     
                    </td>
				
                  
                  </tr>
				   <tr>
                    <td>
                 
                     
                    </td>
					<td>
                  <strong> Total Income</strong>
                     
                    </td>
					<td>
                   <strong>00.00</strong>
                     
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
                    
                   <th className="text-center">Particulars </th>
					
					
					<th className="text-center">Code</th>
					<th >Amount</th>
					
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                   
                    </td>
					 <td className="text-center">
               
                    </td>
					<td className="text-center">
                 
                    </td>
					
					
					
                  
                  </tr>
				    <tr>
                    <td>
                  <strong> Retained Income</strong>
                     
                    </td>
					<td>
                 <strong>00.00</strong>
                     
                    </td>
					 <td>
                 
                     
                    </td>
				
                  
                  </tr>
				    <tr>
                    <td>
                 
                     
                    </td>
					<td>
                  <strong>  TOTAL LIABILITIES</strong>
                     
                    </td>
					<td>
                   <strong>00.00</strong>
                     
                    </td>
				
                  
                  </tr>
				   <tr>
                    <td>
                 
                     
                    </td>
					<td>
                  <strong> TOTAL ASSETS</strong>
                     
                    </td>
					<td>
                   <strong>00.00</strong>
                     
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

export default FinanceReport
