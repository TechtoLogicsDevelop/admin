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
  
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'


const AuctionActivities = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Auctions/Bid Activities
              
            </CCardHeader>
			
            <CCardBody>
			 
			  
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Current</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Pending</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >History </CListGroupItem>
                  
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
                  <th className="text-center">Item</th> 
					<th className="text-center">Bids </th> 
					<th className="text-center">Views </th> 
					<th className="text-center">Bid Price</th>
					<th className="text-center">Highest Bid</th>
					 <th className="text-center">Lowest Bid</th>
					  <th className="text-center">Start Time</th>
					 <th className="text-center">End Time</th>
					 <th className="text-center">Time Left</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td className="text-center">
                 Abstract Art on canvas 
                    </td>
					 <td className="text-center">
                  	$1,775.00
                    </td>
						 <td className="text-center">
                  	0
                    </td>
						 <td className="text-center">
                  	10
                    </td>
					 <td className="text-center">
                    $1,775.00
                    </td> 
                    <td className="text-center">
                    $1,400.00
                     
                    </td>
					  <td className="text-center">
                    2021-08-11 10:38:03
                     
                    </td>
					  <td className="text-center">
                    2021-08-13 10:38:03
                     
                    </td>
					<td className="text-center">
                   	2D 10:31
                     
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
                  <th className="text-center">Item</th> 
					<th className="text-center">Bids </th> 
					<th className="text-center">Views </th> 
					<th className="text-center">Bid Price</th>
					<th className="text-center">Highest Bid</th>
					 <th className="text-center">Lowest Bid</th>
					  <th className="text-center">Start Time</th>
					 <th className="text-center">End Time</th>
					 <th className="text-center">Time Left</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td className="text-center">
                 Abstract Art on canvas 
                    </td>
					 <td className="text-center">
                  	$1,775.00
                    </td>
						 <td className="text-center">
                  	0
                    </td>
						 <td className="text-center">
                  	10
                    </td>
					 <td className="text-center">
                    $1,775.00
                    </td>
                    <td className="text-center">
                    $1,400.00
                     
                    </td>
					  <td className="text-center">
                    2021-08-11 10:38:03
                     
                    </td>
					  <td className="text-center">
                    2021-08-13 10:38:03
                     
                    </td>
					<td className="text-center">
                   	2D 10:31
                     
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
                  <th className="text-center">Item</th> 
					<th className="text-center">Bids </th> 
					<th className="text-center">Views </th> 
					<th className="text-center">Bid Price</th>
					<th className="text-center">Highest Bid</th>
					 <th className="text-center">Lowest Bid</th>
					 <th className="text-center">Start Time</th>
					 <th className="text-center">End Time</th>
					 <th className="text-center">Time Left</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td className="text-center">
                 Abstract Art on canvas 
                    </td>
					 <td className="text-center">
                  	$1,775.00
                    </td>
						 <td className="text-center">
                  	0
                    </td>
						 <td className="text-center">
                  	10
                    </td>
					 <td className="text-center">
                    $1,775.00
                    </td>
                    <td className="text-center">
                    $1,400.00
                     
                    </td>
					  <td className="text-center">
                    2021-08-11 10:38:03
                     
                    </td>
					  <td className="text-center">
                    2021-08-13 10:38:03
                     
                    </td>
					<td className="text-center">
                   	2D 10:31
                     
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

export default AuctionActivities
