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


const CustomersMembership = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Customers Membership
              
            </CCardHeader>
			
            <CCardBody>
			 
			  
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Bronze </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Silver</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Gold </CListGroupItem>
                   
                   
                   
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
                    
                   <th className="text-center">Name </th>
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					<th className="text-center">Group</th>
					<th className="text-center">Gender</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	 <td className="text-center">
                    <CHeaderNavLink to="/customerdetails">Rajesh</CHeaderNavLink>
                    </td>
					 <td className="text-center">
                  rajesh84@gmail.com
                    </td>
					 <td className="text-center">
                    87964525811
                    </td>
                    <td>
                     Default
                     
                    </td>
					<td>
                    Male
                     
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
                    
                   <th className="text-center">Name </th>
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					<th className="text-center">Group</th>
					<th className="text-center">Gender</th>
                     <th className="text-center">Location</th>
					 
					  
                  </tr>
                </thead>
                <tbody>
				
                  <tr>
                    	 <td className="text-center">
                    <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                    </td>
					 <td className="text-center">
                  sbnaveen@gmail.com
                    </td>
					 <td className="text-center">
                    9513574560
                    </td>
                     <td>
                     Default
                     
                    </td>
					<td>
                    Male
                     
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
                    
                   <th className="text-center">Name </th>
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					<th className="text-center">Group</th>
					<th className="text-center">Gender</th>
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

export default CustomersMembership
