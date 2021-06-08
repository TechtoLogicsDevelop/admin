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
  CPopover,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const BrandGroupSetup = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Brand & Group Images Setting
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CCard>
           
            <CCardBody>
              <CForm action="" method="post" inline>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Products Groups Per Row</CLabel>
                  <CInput id="exampleInputName2" placeholder="No" />
                </CFormGroup>
                
              </CForm>
			  <br/>
			   <CForm action="" method="post" inline>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Brands Per Row</CLabel>
                  <CInput id="exampleInputName2" placeholder="No" />
                </CFormGroup>
               
              </CForm>
			   <br/>
			   <CForm action="" method="post" inline>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Product Groups Image Dimensions</CLabel>
                  <CInput id="exampleInputName2" placeholder="Width" />
                </CFormGroup>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName3" className="pr-1"></CLabel>
                  <CInput  id="exampleInputName3" placeholder="Height"  /> &nbsp;Width X Height
                </CFormGroup>
              </CForm>
			  <br/>
			   <CForm action="" method="post" inline>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Brand Image Dimension</CLabel>
                  <CInput id="exampleInputName2" placeholder="Width" />
                </CFormGroup>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName3" className="pr-1"></CLabel>
                  <CInput  id="exampleInputName3" placeholder="Height"  /> &nbsp;Width X Height
                </CFormGroup>
              </CForm>
			  <br/>
				 <CFormGroup row>
                  <CLabel col md={3}>Default Product Group Image</CLabel>
                  <CCol xs="6" md="6">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Select Image
                    </CLabel>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CLabel col md={3}>Default Brand Image</CLabel>
                  <CCol xs="6" md="6">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Select Image
                    </CLabel>
                  </CCol>
                </CFormGroup>
            </CCardBody>
            
          </CCard>
				 
			
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

export default BrandGroupSetup
