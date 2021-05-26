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

const AddEmployee = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add the New Employee
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">First Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="First Name" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Last Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Last Name" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="phone-input">Phone Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="phone" id="phone-input" name="phone-input" placeholder="Enter Phone" autoComplete="phone"/>
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Of Birth</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Qualification</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Qualification</option>
                      <option value="1">BE</option>
                      <option value="2">MCA</option>
                      <option value="3">BCA</option>
					   <option value="4">MTech</option>
                      <option value="5">Diploma</option>
					  <option value="6">Bcom</option>
                      <option value="7">PUC</option>
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
				   <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Gender</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                     
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
				   <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Marital Status</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Single</option>
                      <option value="2">Married</option>
                     
                      
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="picture">Profile Picture</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			   <CFormGroup>
			   <CFormGroup row>
                 
				 
         
        
		
                </CFormGroup>
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
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save & Continue</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default AddEmployee
