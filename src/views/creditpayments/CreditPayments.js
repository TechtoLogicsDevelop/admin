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




const CreditPayments = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Credits pricing Management
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Price in credits for posting a job</CLabel>
                    <CInput id="company-website" placeholder="" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Price for 1 credit</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Minimum number of credits that can be purchased</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Maximum number of credits that can be purchased</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
                 <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Featured ad price (credits)</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Browsing resumes (per 1 resume)</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
			    <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Applying for jobs (per 1 application)</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Free credits for new users</CLabel>
                    <CInput id="company-website" placeholder=" " />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
			   <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Price in credits to renew a job</CLabel>
                    <CInput id="company-website" placeholder=" " />
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

export default CreditPayments
