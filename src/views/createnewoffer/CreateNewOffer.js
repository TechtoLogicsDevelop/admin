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



const CreateNewOffer = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Create New Offer
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offers Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Flat</option>
                      <option value="1">Percentage </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offer Name</CLabel>
                    <CInput id="text" placeholder="Offer Name" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offer Mode</CLabel>
                    <CInput id="text" placeholder="Offer Mode" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Offer Amount</CLabel>
                    <CInput id="text" placeholder="Amount" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Start date</CLabel>
                    <CCol xs="12" md="12">
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">End Date</CLabel>
                    <CCol xs="12" md="12">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
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

export default CreateNewOffer
