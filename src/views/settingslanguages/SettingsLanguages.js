import React, { useState } from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
    CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CFormGroup,
   CLabel,
   CInput,
   CSelect,
   CModalFooter,
   CTextarea,
   CInputFile,
   CButton,
   CInputCheckbox,
    CPagination,
  CRow
} from '@coreui/react'

const SettingsLanguages = () => {
			const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  
	
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
           Settings Languages
			 <div className="text-right">
			 <CHeaderNavLink   to="/myprofilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		
		  
            <CCardBody>
			
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			    <CFormGroup row className="my-0">
               
                <CCol xs="6"> I want to browse the website in:
				 <CLabel >I want to browse the website in:</CLabel>
                  <CFormGroup>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Languages I Know</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                   English
                    </td>
					
                  </tr>
				 
                </tbody>
              </table>
                  
              </CForm>
			 
            </CCardBody>
			 <CCardHeader>
             <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add Languages</CButton>
			   </div>
			    <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add Language</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
          
            <CCardBody >
                 <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                   <CSelect custom name="select" id="select">
                      <option value="0">Select Laguages </option>
                      <option value="1">Option 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">options 3</option>
					  <option value="4">Options 4</option>
                    </CSelect>
                   
                  </CCol>
                </CFormGroup>
				
              </CForm>
                 </CCardBody>
            
                   </CCard>
         
               </CCol>
       
             </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 <CButton color="info" onClick={() => setSuccess(!success)}>Save & Continue</CButton>
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
            </CCardHeader>
			
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SettingsLanguages
