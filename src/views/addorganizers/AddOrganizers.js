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



const AddOrganizers = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Organizers
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Organizers Name *</CLabel>
                    <CInput id="company" placeholder="Organizers Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Organizers Website *</CLabel>
                    <CInput id="company-website" placeholder="Company Website" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                
			  
			 
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email *</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="phone">Telephone *</CLabel>
                    <CInput id="phone" placeholder="Telephone" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="fax">Fax</CLabel>
                    <CInput id="fax" placeholder="Fax" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Mobile No *</CLabel>
                    <CInput id="gst" placeholder="Mobile No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="fax">Contact Person</CLabel>
                    <CInput id="fax" placeholder="Contact Person" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Designation</CLabel>
                    <CInput id="gst" placeholder="Designation" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-tag">Meta Tag</CLabel>
                    <CInput id="meta-tag" placeholder="Meta Tag" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="keyword">Meta Keyword</CLabel>
                    <CInput id="keyword" placeholder="Meta Keyword" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-data">Meta Data</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Meta Data..." 
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-description">Meta Description</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Meta Description..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="logo">Upload Logo</CLabel>
                     <CInputFile id="logo" name="logo"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
              
            
				Organizers Address
            </CCardHeader>
			 <CFormGroup>
			  
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
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

export default AddOrganizers
