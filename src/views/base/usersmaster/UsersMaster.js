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
  
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'


const UsersMaster = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
             Users Master
              
            </CCardHeader>
			
            <CCardBody>
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >All </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Artist</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Enthusiast </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Business</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Institutions</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Others </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Craft Communities</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Creative Communities</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(8)} action active={activeTab === 8} >Students </CListGroupItem>
                   
                   
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
                  <tr>
                    	 <td className="text-center">
                    Rakesh
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td>
                    <td>
                     Artist / Creaters
                     
                    </td>
					<td>
                    Painter
                     
                    </td>
					
					<td className="text-center">
                   Oil Painter
                    </td>
				
					
					
					 <td>
                     Bangalore
                     
                    </td>
                  
                  </tr>
				    <tr>
                    	 <td className="text-center">
                    Sandesh
                    </td>
					 <td className="text-center">
                  sbsandesh@gmail.com
                    </td>
					 <td className="text-center">
                    95374789654
                    </td>
                    <td>
                     Art Enthusiast
                     
                    </td>
					<td>
                    Art Dealer
                     
                    </td>
					
					<td className="text-center">
                   Seller
                    </td>
				
					
					
					 <td>
                     Bangalore
                     
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
				
                  <tr>
                    	 <td className="text-center">
                    Rakesh
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td>
                    <td>
                     Artist / Creaters
                     
                    </td>
					<td>
                    Painter
                     
                    </td>
					
					<td className="text-center">
                   Oil Painter
                    </td>
				
					
					
					 <td>
                     Bangalore
                     
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
                  <tr>
                    	 <td className="text-center">
                    Sandesh
                    </td>
					 <td className="text-center">
                  sbsandesh@gmail.com
                    </td>
					 <td className="text-center">
                    95374789654
                    </td>
                    <td>
                     Art Enthusiast
                     
                    </td>
					<td>
                    Art Dealer
                     
                    </td>
					
					<td className="text-center">
                   Seller
                    </td>
				
					
					
					 <td>
                     Bangalore
                     
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

export default UsersMaster
