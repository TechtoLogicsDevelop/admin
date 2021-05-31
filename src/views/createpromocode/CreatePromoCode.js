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



const CreatePromoCode = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Create PromoCode
              
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Promotion Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Promotion Type 1</option>
                      <option value="1">Promotion Type 2 </option>
                      <option value="2">Promotion Type 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>               
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Promo Code</CLabel>
                    <CInput id="first" placeholder="Promo Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">Amount Type</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Amount </option>
                      <option value="2">Percentage</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="discount">Discount Amount</CLabel>
                    <CInput id="discount" placeholder="Discount Amount" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="use">Maximum Use</CLabel>
                    <CInput id="use" placeholder="use" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			   <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available From</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available To</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Minimum Order Value</CLabel>
                    <CInput id="company" placeholder="Minimum Order Value" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Customer Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">All </option>
                      <option value="1">New Customer </option>
                      <option value="2">Exist Customer</option>
                     
                    </CSelect>
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

export default CreatePromoCode
