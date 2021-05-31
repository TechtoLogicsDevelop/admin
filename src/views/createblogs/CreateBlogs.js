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



const CreateBlogs = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Create Blogs
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel col md="6" htmlFor="picture">Blog Upload Image</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Blog Group</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Group 1</option>
                      <option value="1">Group 2 </option>
                      <option value="2">Group 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Blog Title</CLabel>
                    <CInput id="text" placeholder="Blog Title" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Sort Order</CLabel>
                    <CInput id="text" placeholder="Sort Order" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Meta Keyword</CLabel>
                    <CInput id="text" placeholder="Meta Keyword" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Meta Description</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Meta Description.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Content</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content.." 
                    />
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

export default CreateBlogs
