import React from 'react'
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
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const VendorsDetails = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Vendors Details
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Vendor Company Name: </CLabel>
                    <p className="form-control-static">Artwork</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Type:</CLabel>
                   <p className="form-control-static">Wholeseller / Retailer</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Company Website: </CLabel>
                    <p className="form-control-static">http://artwork.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Established Date:</CLabel>
                   <p className="form-control-static">2012-05-05</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">PAN No: </CLabel>
                    <p className="form-control-static">BXYPKxxxxK</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">TAN No:</CLabel>
                   <p className="form-control-static">RAJA99999B</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">GST: </CLabel>
                    <p className="form-control-static">2AABXYPKxxxxK</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Nature of Business:</CLabel>
                   <p className="form-control-static">Seller</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Email: </CLabel>
                    <p className="form-control-static">info@artwork.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Telephone:</CLabel>
                   <p className="form-control-static">789 654 3215</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">FAX: </CLabel>
                    <p className="form-control-static">789 654 3215</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Mobile No:</CLabel>
                   <p className="form-control-static">87964525811</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Contact Person: </CLabel>
                    <p className="form-control-static">Ramesh</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Designation:</CLabel>
                   <p className="form-control-static">Account Manager</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Awards: </CLabel>
                    <p className="form-control-static">Best Seller</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Certificates:</CLabel>
                   <p className="form-control-static">Good Quality Seller</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Meta Tag: </CLabel>
                    <p className="form-control-static">Artwork</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Meta Keyword:</CLabel>
                   <p className="form-control-static">Artwork Wholeseller</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
				 <CLabel htmlFor="company">Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
				 <CLabel htmlFor="company">Billing Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     
              </CForm>
            </CCardBody>
          
          </CCard>
          
        </CCol>
        
      </CRow>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Bank Details
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Bank Code: </CLabel>
                    <p className="form-control-static">sbi-001</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Bank Group Code:</CLabel>
                   <p className="form-control-static">INSbi-01</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Bank Name: </CLabel>
                    <p className="form-control-static">State Bank Of India</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Short Name:</CLabel>
                   <p className="form-control-static">SBI</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Branch Name: </CLabel>
                    <p className="form-control-static">J P Nagar</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">IFSC Code:</CLabel>
                   <p className="form-control-static">SBI00045</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Local Currency: </CLabel>
                    <p className="form-control-static">Indian Rupees</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Calculation Currency:</CLabel>
                   <p className="form-control-static">Indian Rupees</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Acount Type: </CLabel>
                    <p className="form-control-static">Current Account</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Account No:</CLabel>
                   <p className="form-control-static">007896543215</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			    <hr/>
				 <CLabel htmlFor="company"> Bank Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				 <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    
              </CForm>
            </CCardBody>
          
          </CCard>
          
        </CCol>
        
      </CRow>
     
    
     
     
    </>
  )
}

export default VendorsDetails
