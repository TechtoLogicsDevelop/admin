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

const FilesPermission = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Files Permission
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">  

               
                <CFormGroup row>
				 <CCol tag="label" sm="3" className="col-form-label">
                    Read, Write, & Execute only for Admin
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
                  <CCol tag="label" sm="3" className="col-form-label">
                    Read, Write, & Execute for Admin and Super Admin
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				   <CCol tag="label" sm="3" className="col-form-label">
                    Read, Write, & Execute for Admin , Super Admin and Others
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				   <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete File Set for Admin
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				    <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete File Set for Admin and Super Admin
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				    <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete File Set for Admin ,Super Admin and Others
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				    <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete Files for Admin
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				    <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete Files for Admin and Super Admin 
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				    <CCol tag="label" sm="3" className="col-form-label">
                    Add, View ,edit and delete Files for Admin ,Super Admin and Others
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
                  </CCol>
				  
				   <CCol tag="label" sm="3" className="col-form-label">
                    Search File Folder
                  </CCol>
                  <CCol sm="3">
                   
                    <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                   
                   
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

export default FilesPermission
