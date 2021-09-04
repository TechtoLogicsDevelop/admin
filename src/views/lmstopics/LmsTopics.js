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

const LmsTopics = () => {
			const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
   const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Lms Topics
			 <div className="text-right">
			 <CHeaderNavLink   to="/managecourse">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		
            <CCardBody>
			 <div className="text-right">
			
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add New</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Create Topics</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Topics
           
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			
                <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				   <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Subject</option>
                      <option value="1">Subject 1</option>
                      <option value="2">Subject 2</option>
                      <option value="3">Subject 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				  <CFormGroup row>
                
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Topic Name" />
                   
                  </CCol>
                </CFormGroup>
                   <CFormGroup row>
                  
                  <CCol xs="12" md="12">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Select File..
                    </CLabel>
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
			 
                <CCardHeader>
		  
                </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                  <th className="text-center">Topic Name</th>
				   <th className="text-center">Courses </th>
                    <th className="text-center">Subjects </th>
                   <th className="text-center">Document </th>
                   <th  className="text-center">Created By</th>
                   <th  className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                     <td >
               
                    </td>
                       	  <td >
               
                    </td>
                 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
					<td>
					 
					</td>
					 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
                  </tr>
                </tbody>
              </table>
                     <br/>
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LmsTopics
