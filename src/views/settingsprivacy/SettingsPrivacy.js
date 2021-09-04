import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CListGroup,
  CHeaderNavLink,
  CListGroupItem,
  CTabContent,
  CTabPane,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const SettingsPrivacy = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
          Settings Privacy
              <div className="text-right">
			 <CHeaderNavLink   to="/myprofilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
                 			  
                 <CFormGroup >
				 
                  <CCol md="12">
				    <CFormGroup variant="custom-checkbox" inline>
				   <CLabel ><strong>Private Account</strong></CLabel>&nbsp;
				   <span>(Followers & Supporters will view your content)</span>
				  
                      <CSwitch className="text-right"
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      
                    </CFormGroup>
					<br/>
				   <CFormGroup variant="custom-checkbox" inline>
				   <CLabel ><strong>Supporters</strong></CLabel>&nbsp;
				   <span>(Only supporters will view your content)</span>
				  
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      
                    </CFormGroup>
					<br/>
					 <CFormGroup variant="custom-checkbox" inline>
				   <CLabel ><strong>Visibility</strong></CLabel>&nbsp;
				   <span>(List me on artcurate, allowing viewers to find me )</span>
				  
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      
                    </CFormGroup>
					<br/>
						 <CFormGroup variant="custom-checkbox" inline>
				   <CLabel ><strong>Allow Interactions</strong></CLabel>&nbsp;
				   <span>(Allow viewers to follow, subscribe, support me, notify them of my activity )</span>
				  
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      
                    </CFormGroup>
					<br/>
					
                  </CCol>
                </CFormGroup>
				<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Viewable</th>
                    <th className="text-center"></th>
					
					<th></th>
					
					  <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                    Posts
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                      Art Social
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                     Journal
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				  
                </tbody>
              </table>
			  <br/>
				<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Comment, Tags & Mentions</th>
                    <th className="text-center"></th>
					
					<th></th>
					
					  <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                    Can Comment
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                     Can Tag
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                    Can Mention
                     
                    </td>
					 <td className="text-center">
                    <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Anyone</CLabel>
                    </CFormGroup>
                    </td>
                   
                     
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >My Network</CLabel>
                    </CFormGroup>
					</td>
					
					<td>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Only Me</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				  
                </tbody>
              </table>
               
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
            
            </CCardFooter>
          </CCard>
         
        </CCol>
          
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Blocked</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Reported</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Reported Posts </CListGroupItem>
                   
                   
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
                   
            
                  </CTabContent>
                </CCol>
              </CRow>
      </CRow>
     
    </>
  )
}

export default SettingsPrivacy
