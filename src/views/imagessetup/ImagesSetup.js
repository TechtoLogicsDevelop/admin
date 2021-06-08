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

const ImagesSetup = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Product Images Sizes
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CCard>
           
            <CCardBody>
              <CForm action="" method="post" inline>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Storewide Thumbnail</CLabel>
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
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Product Page Image</CLabel>
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
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Product Page Thumbnail</CLabel>
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
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Product Zoom Image</CLabel>
                  <CInput id="exampleInputName2" placeholder="Width" />
                </CFormGroup>
                <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName3" className="pr-1"></CLabel>
                  <CInput  id="exampleInputName3" placeholder="Height"  /> &nbsp;Width X Height
                </CFormGroup>
              </CForm>
			  <br/>
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Show Tiny Thumbnails?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Show tiny Thumbnail Images on the Product page</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				 <br/>
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Image Zoom?</CLabel></CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Yes, Enable image zooming on the products details page</CLabel>
                    </CFormGroup>
                   
                    
                  </CCol>
                </CFormGroup>
				<br/>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Display Product Images</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">In a lightbox </option>
                      <option value="2">In a Separate window</option>
                     
                    </CSelect>
                  </CCol>
                </CFormGroup>
				   <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Default Product Image</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Don't show a default image if a product doesnot have an uploaded image </CLabel>
                    </CFormGroup>
					<br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Show the default product image for my active store design</CLabel>
                    </CFormGroup>
					<br/>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Show a custom image uploaded from my computer</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CLabel col md={3}>Default Product Image</CLabel>
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

export default ImagesSetup
