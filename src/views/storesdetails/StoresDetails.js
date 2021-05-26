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

const StoresDetails = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Store Details
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Store Name: </CLabel>
                    <p className="form-control-static">Artcurate</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Store Website:</CLabel>
                   <p className="form-control-static">http://artcurate.com</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Google Map Link: </CLabel>
                    <p className="form-control-static">http://artcurate.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Code:</CLabel>
                   <p className="form-control-static">s0094</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Contact Person: </CLabel>
                    <p className="form-control-static">Purav Rai</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Phone No:</CLabel>
                   <p className="form-control-static">+91 954 654 2124</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Email: </CLabel>
                    <p className="form-control-static">puravrai@artcurate.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Country:</CLabel>
                   <p className="form-control-static">India</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">State: </CLabel>
                    <p className="form-control-static">Karnataka</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Area: </CLabel>
                    <p className="form-control-static">J P Nagar</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Pincode:</CLabel>
                   <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Sort Order: </CLabel>
                    <p className="form-control-static">094</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Address</CLabel>
                   <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
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

export default StoresDetails
