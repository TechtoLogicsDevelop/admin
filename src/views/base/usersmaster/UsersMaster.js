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
			  <CFormGroup row className="my-0">
			   <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="first">Search Main Wise</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Subcategory 1</option>
                      <option value="1">Subcategory 2 </option>
                      <option value="2">Subcategory 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="first">Search Primary Role Wise</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Subcategory 1</option>
                      <option value="1">Subcategory 2 </option>
                      <option value="2">Subcategory 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="first">Search Secondary Wise</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Oil Painter</option>
                      <option value="2">Sketch Pen Painter</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                 <CCol xs="3" >
                 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Search </CButton>&nbsp;&nbsp;
                </CCol>
              </CFormGroup>
			  
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >All </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Artist</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Enthusiast </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Business</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Institutions</CListGroupItem>
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
                  <th className="text-center">User Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
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
                   <ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
                    </td>
				
					 <td>
                     Bangalore
                     
                    </td>
                  
                  </tr>
				    <tr>
                     <td className="text-center">
                  Sandesh S B
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
                   <ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
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
                  <th className="text-center">User Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
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
                   <ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
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
                     <th className="text-center">User Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
                     <th className="text-center">Location</th>
					 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    	<td className="text-center">
                  Sandesh SB
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
                   <ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
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
                   <th className="text-center">Business</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
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
                  <th className="text-center">Institution</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
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
                    <th className="text-center">Student Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main  </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
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
