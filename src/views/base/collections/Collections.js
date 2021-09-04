import React, { useState, useEffect } from 'react'
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
   CCardFooter,
   CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CButton,
   CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const Collections = () => {
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
          Collections
            </CCardHeader>
			  
            <CCardBody>
              <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle>  Collection Entry</CModalTitle>
              </CModalHeader>
              <CModalBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                   <CFormGroup row className="my-0">
				 
				
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Customer</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Customer 1</option>
                      <option value="2">Customer 2 </option>
                      <option value="3"> Customer 3</option>
                      <option value="4">Customer 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Collection Mode</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Collection Mode 1</option>
                      <option value="2">Collection Mode 2 </option>
                      <option value="3"> Collection Mode 3</option>
                      <option value="4">Collection Mode 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
                
              </CFormGroup>			     
				
                 <CFormGroup row className="my-0">
				    <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Ledger</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Ledger 1</option>
                      <option value="2">Ledger 2 </option>
                      <option value="3"> Ledger 3</option>
                      <option value="4">Ledger 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Advanced Amount</CLabel>
                     <CInput id="text-input" name="text-input" placeholder="Advanced Amount" />
                  </CFormGroup>
                </CCol>
              
              </CFormGroup>
			    <CFormGroup row className="my-0">
				   <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="first">Remarks</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 <CButton color="info" onClick={() => setSuccess(!success)}>Save & Continue</CButton>
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
			<br/>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Sl no</th>
					 <th>Collections No</th>
                    <th > Collections Type </th>
					 <th >Collections Date </th>
					<th >Sales Invoice</th>
					<th >Customer</th>
				    <th >Collection Amount</th>
					 <th >Balance</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     CLN_220
                     
                    </td>
					  <td>
                    Collection Against Invoice
                     
                    </td>
					 <td>
                    02/06/2021
                     
                    </td>
					 <td>
                    SI_001
                     
                    </td>
                    <td>
                      <CHeaderNavLink to="">Rajesh Kumar</CHeaderNavLink>
                     
                    </td> 
                  
					<td>
                    Rs 5000.00
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					<td>
					View / Edit / Delete
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

export default Collections
