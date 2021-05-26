import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
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
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const SendInvite = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Send Invite 
             
			 
            </CCardHeader>
            <CCardBody>
			
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select">Select Event</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Event</option>  
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Invite Name *</CLabel>
                    <CInput id="company" placeholder="Mr/Mrs: Invite Name" />
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
                
			  <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Event Date</th>
                    <th>Time</th>
                    <th className="text-center">Location</th>
                    
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                     2021-05-25
                    </td>
                    <td>
                     10:30 AM
                    </td>
                    <td className="text-center">
                      1234 Some Street
                        Some City, Some State, Some Zip
                      Some Country, Some World
                    </td>
                 </tr>
                  
                </tbody>
              </table>
			 <br/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email *</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Telephone No *</CLabel>
                    <CInput id="gst" placeholder="Telephone No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			  
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup>
                    <CLabel htmlFor="first">Sent Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Reply Date Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
				 <hr/>
                
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel><strong>Will you come?</strong></CLabel>
                  </CCol>
                  <CCol md="12">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Yes</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                      <CLabel >No</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="warning"
                      defaultChecked
                      variant="opposite"
                    />
                      <CLabel>Maybe</CLabel>
                    </CFormGroup>
					 
					
					
                   
                  </CCol>
                </CFormGroup>
				 
			     
              </CForm>
			   
			
             
              
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
            
      
      </CRow>
     
     
    </>
  )
}

export default SendInvite
