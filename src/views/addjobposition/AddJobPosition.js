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
  CForm,
  CInput,
  CTextarea,
  CInputFile,
  CCardFooter,
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'


const AddJobPosition = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Job Position
              
            </CCardHeader>
			
            <CCardBody>
			  
			  
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Form </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Basic</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Details </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Requirements</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Location</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Listing </CListGroupItem>
                   
                   
                  </CListGroup>
                </CCol>
                <CCol xs="10">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action >
               
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
                <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Basic
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Job Code</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Job Code" />
                     
                    
                  </CFormGroup>
                </CCol>
                  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Job Title</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Job Title" />
                     
                    
                  </CFormGroup>
                </CCol>
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Employer</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Company 1 </option>
                      <option value="2"> Company 2</option>
                      <option value="3">Company 3  </option>
                     
                    </CSelect>
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  
			   <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Hiring Manager</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Manager 1 </option>
                      <option value="2"> Manager 2</option>
                      <option value="3">Manager 3  </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Status</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
                      <option value="1">Active </option>
                      <option value="2"> On Hold</option>
                      <option value="3">Closed </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Close Date</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Date" />
                  </CFormGroup>
                </CCol>
				
                
              </CFormGroup>
			 
			  
             
             
        
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Next </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
                <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Details
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Short Description</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Trainer Details.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Job Description</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Trainer Details.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
				  
              </CFormGroup>
			 
			
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Next </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   
                <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Requirements
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Requirements</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Trainer Details.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Employement Type</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Full Time</option>
                      <option value="1">Part Time</option>
                      <option value="2"> Contract</option>
                      <option value="3">Temprovery</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Experience Level</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Not Applicable</option>
                      <option value="1">Internship</option>
                      <option value="2"> Entry Level</option>
                      <option value="3">Associate</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <CFormGroup row className="my-0">
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Job Function</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Administrative</option>
                      <option value="1">Business Analyst</option>
                      <option value="2"> Art/ Creative</option>
                      <option value="3">Painter</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Education Level</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Master Degree</option>
                      <option value="1">Associate Degree</option>
                      <option value="2"> BCom</option>
                      <option value="3">MCom</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Benifits</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Health Plan</option>
                      <option value="1">Life Insurence</option>
                      <option value="2"> Paid Vacations</option>
                      <option value="3">Retirement Plan</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
				
              </CFormGroup>
			
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Next </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					 <CTabPane active={activeTab === 4}>
                       <p>
					   <CListGroup>
                <CListGroupItem action >
                     
                <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Location
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				 
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Country</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Country 1</option>
                      <option value="1">Country 2</option>
                      <option value="2"> Country 3</option>
                      <option value="3">Country 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">State</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> State 1</option>
                      <option value="1">State 2</option>
                      <option value="2"> State 3</option>
                      <option value="3">State 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">City</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> City 1</option>
                      <option value="1">City 2</option>
                      <option value="2"> City 3</option>
                      <option value="3">City 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <CFormGroup row className="my-0">
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Pincode</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Pincode" />
                     
                    
                  </CFormGroup>
                </CCol>
			  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Department</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Department 1</option>
                      <option value="1">Department 2</option>
                      <option value="2"> Department 3</option>
                      <option value="3">Department 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
               
				
              </CFormGroup>
			
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Next </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 5}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                    
                <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Listing
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			    
			    <CFormGroup row className="my-0">
				 
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Show Hiring Manager Name</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Yes</option>
                      <option value="1">No</option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Show Salary</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Yes</option>
                      <option value="1">No</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Currency</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0"> Currency 1</option>
                      <option value="1">Currency 2</option>
                      <option value="2"> Currency 3</option>
                      <option value="3">Currency 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <CFormGroup row className="my-0">
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Min Salary</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Min Salary" />
                     
                    
                  </CFormGroup>
                </CCol>
			  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Max Salary</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Max Salary" />
                     
                    
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Keyword</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Key Word" />
                     
                    
                  </CFormGroup>
                </CCol>
               
				
              </CFormGroup>
			 <CFormGroup row className="my-0">
			   <CCol xs="4">
                  <CFormGroup>
                   <CLabel col md="9" htmlFor="file-input">Upload</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                  
                </CCol>
			 
               
				
              </CFormGroup>
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
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

export default AddJobPosition
