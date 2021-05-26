import React from 'react'
import {
  CButton,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
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
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const NotificationsSet = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      
      <CRow>
	   <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Notifications 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
			   <CFormGroup row>
                  <CCol md="12">
				 
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Artist / Creaters</option>
                      <option value="2">Business</option>
                      <option value="3">Art Enthusiast</option>
					   <option value="4">Institutions</option>
                      <option value="5">Others</option>
                      <option value="6">Craft Communities</option>
					   <option value="7">Creative Communities</option>
                      <option value="8">Students</option>
                     
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Sub Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please Sub Category</option>
                      <option value="1">Artist / Creaters</option>
                      <option value="2">Business</option>
                      <option value="3">Art Enthusiast</option>
					   <option value="4">Institutions</option>
                      <option value="5">Others</option>
                      <option value="6">Craft Communities</option>
					   <option value="7">Creative Communities</option>
                      <option value="8">Students</option>
                     
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Category Group</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Artist / Creaters</option>
                      <option value="2">Business</option>
                      <option value="3">Art Enthusiast</option>
					   <option value="4">Institutions</option>
                      <option value="5">Others</option>
                      <option value="6">Craft Communities</option>
					   <option value="7">Creative Communities</option>
                      <option value="8">Students</option>
                     
                    </CSelect>
                  </CCol>
                </CFormGroup>
                   <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Select Group Members</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">  <CHeaderNavLink to="/selectmembers"> Select Members </CHeaderNavLink></p>
                  </CCol>
                </CFormGroup>
					
                  </CCol>
                </CFormGroup>
               <CFormGroup row>
                  <CCol md="12">
				
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cil-magnifying-glass" /> Search</CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Search Character" />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
				<CFormGroup row>
                  <CCol md="3">
				  
                    <CLabel htmlFor="date-input">Posting Sate </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
				<hr/>
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification To</CLabel>
                  </CCol>
                     
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Customer</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Agent</CLabel>
                    </CFormGroup>
                </CCol>
               <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification Type</CLabel>
                  </CCol>
                     
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Google Push</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">SMS</CLabel>
                    </CFormGroup>
                </CCol>
              </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Save</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
			  
            </CCardFooter>
          </CCard>
        </CCol>
        
        
       
		 
      </CRow>
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Groups Master
            </CCardHeader>
			
		   
            <CCardBody>
           
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Group Id</th>
					 <th>Group Name</th>
                    
					 <th >Message</th>
					 
					  <th >Sending Date</th>
					   
					<th>Status</th>
					<th >Phone No</th>
					<th >Email</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Gid-01</div>
                     
                    </td>
                    <td>
                      <div>Offers</div>
                     
                    </td>
					
                   
                    <td>
                      <div>Discount Offer</div>
                     
                    </td>
					 
					 <td>
                      25-05-2021
                     
                    </td>
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 <CHeaderNavLink to=""> Phone No</CHeaderNavLink>
                   	</td>
					<td>
					 <CHeaderNavLink to=""> Emails List</CHeaderNavLink>
                   	</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				  
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
     
    </>
  )
}

export default NotificationsSet
