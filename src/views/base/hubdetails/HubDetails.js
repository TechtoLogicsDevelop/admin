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
  CProgress,
  CSelect,
  CHeaderNavLink,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const HubDetails = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Hub Details
              
            </CCardHeader>
            <CCardBody>
			<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   
                    <th>Contact Name</th>
                    <th className="text-center">Email</th>
                    <th>Phone No</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>
                      <div>Rajesh	Kumar</div>
                     
                    </td>
                    <td className="text-center">
                      rajesh84@gmail.com
                    </td>
                    <td>
                     87964525811
                    </td>
                    
                   
                  </tr>
                 
                 
                  
                 
                 
                </tbody>
              </table>
			  <br/>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Hub Name </CLabel>
                    <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Website </CLabel>
                   <p className="form-control-static">bangalorehub.com</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="company">Hub Type </CLabel>
                    <p className="form-control-static">Merchants</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Hub Open Time</CLabel>
                   <p className="form-control-static">00:00:00</p>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Hub Close Time</CLabel>
                   <p className="form-control-static">00:00:00</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			    
			    <hr/>
				 <CLabel htmlFor="company">Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
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

export default HubDetails
