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
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CButton,
   CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CInputRadio,
   CModalFooter,
   CTextarea,
   CInputFile,
      CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const JournalEntries = () => {
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
        <CCol>
          <CCard>
            <CCardHeader>
         Journal Entries
            </CCardHeader>
			
            <CCardBody>
			 <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add Journal Entries </CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Journal Entries</CModalTitle>
              </CModalHeader>
              <CModalBody>
           <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Create Journal Entry
             
            </CCardHeader>
            <CCardBody >
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				
				
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Ledger Name</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Ledger  1</option>
                      <option value="2">Ledger  2</option>
                      <option value="3"> Ledger  3</option>
                      <option value="4">Ledger  4</option>
                     
                    </CSelect>
                  </CFormGroup>
				    </CCol>
				     <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger Code</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Ledger Code" />
                     
                    
                  </CFormGroup>
                </CCol>
                 
                
              </CFormGroup>
			    <CFormGroup row className="my-0">
				
                    <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger Group</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Group" />
                     
                    
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">DR</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="DR" />
                     
                    
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  
				     <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">CR</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="CR" />
                     
                    
                  </CFormGroup>
                </CCol>
                  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Narration</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Narration" />
                     
                    
                  </CFormGroup>
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
					 <th>Group Name</th>
                    <th > Ledger Code</th>
					 <th >Ledger Name </th>
				      <th > DR</th>
				     <th > CR</th>
					 <th >Ledger Balance </th>
					<th>Narration</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                    
                    </td>
					  <td>
                   
                    </td>
                    <td>
                   
                     
                    </td>
					  <td>
                   
                    </td>
					<td>
                   
                    </td>
					<td>
                   
                    </td>
					
						<td>
					
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

export default JournalEntries
