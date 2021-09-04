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

const SettingsNotifications = () => {
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
				   <CLabel ><strong>PAUSE ALL</strong></CLabel>&nbsp;
				   
				  
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
				   <CLabel ><strong>EMAIL NOTIFICATIONS</strong></CLabel>&nbsp;
				  
				  
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
				   <CLabel ><strong>WHATSAPP NOTIFICATIONS?</strong></CLabel>&nbsp;
				   
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
				<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>NOTIFY ME ABOUT</th>
                    <th className="text-center"></th>
					
					<th></th>
					<th></th>
					  <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                    Likes
                     
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
                      <CLabel variant="checkbox" >All</CLabel>
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
                      <CLabel variant="checkbox" >Supporters</CLabel>
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
                      <CLabel variant="checkbox" >Followers</CLabel>
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
                      <CLabel variant="checkbox" >All</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                      Comments
                     
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
                      <CLabel variant="checkbox" >All</CLabel>
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
                      <CLabel variant="checkbox" >Supporters</CLabel>
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
                      <CLabel variant="checkbox" >Followers</CLabel>
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
                      <CLabel variant="checkbox" >All</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				   <tr>
                   
                    <td>
                     Tags
                     
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
                      <CLabel variant="checkbox" >All</CLabel>
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
                      <CLabel variant="checkbox" >Supporters</CLabel>
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
                      <CLabel variant="checkbox" >Followers</CLabel>
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
                      <CLabel variant="checkbox" >All</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				    <tr>
                   
                    <td>
                     Shares
                     
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
                      <CLabel variant="checkbox" >All</CLabel>
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
                      <CLabel variant="checkbox" >Supporters</CLabel>
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
                      <CLabel variant="checkbox" >Followers</CLabel>
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
                      <CLabel variant="checkbox" >All</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
				    <tr>
                   
                    <td>
                     Messages
                     
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
                      <CLabel variant="checkbox" >All</CLabel>
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
                      <CLabel variant="checkbox" >Supporters</CLabel>
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
                      <CLabel variant="checkbox" >Followers</CLabel>
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
                      <CLabel variant="checkbox" >All</CLabel>
                    </CFormGroup>
					</td>
                  </tr>
                </tbody>
              </table>
			  <br/>
				   <CFormGroup  inline>
				   <CLabel ><strong>EMAIL NOTIFICATIONS</strong></CLabel>&nbsp;
				   <br/>
				  <CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Follow request received</CLabel>
                    </CFormGroup>
					<br/>
					<CFormGroup variant="custom-checkbox" inline>
                        <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    /> 
                      <CLabel variant="checkbox" >Follow request accepted</CLabel>
                    </CFormGroup>
                      
                    </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
            
            </CCardFooter>
          </CCard>
         
        </CCol>
          
             
      </CRow>
     
    </>
  )
}

export default SettingsNotifications
