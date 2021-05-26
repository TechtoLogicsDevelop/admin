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

const AddProductGroups = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New ProductGroups
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               <CFormGroup row>
                  <CLabel col md={3}>Select the Product Group Image</CLabel>
                  <CCol xs="9" md="9">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Main Category</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Main Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select  Category</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Sub Category</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Sub Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Enter Product Group</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Product Group" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Meta Keyword</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Meta Keyword" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Sort Order</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Sort Order" />
                   
                  </CCol>
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

export default AddProductGroups
