import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
   CPagination,
  CRow,
   CSwitch,
   CFormGroup,
   CInputGroup,
   CLabel,
   CInput,
   CInputGroupAppend,
   CModal,
   CSelect,
   CModalFooter,
   CInputCheckbox,
   CInputGroupText,
   CInputGroupPrepend,
   CForm,
   CModalBody,
   CModalTitle,
   CModalHeader,
   CTextarea,
  CCallout
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const PaytoVendor = () => {
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
          Manage Pay to Vendor
            </CCardHeader>
			
		   
            <CCardBody>
			 <div className="text-right">
               <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1">+ Add</CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add New Vendors Pay</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Vendor</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select Vendor</option>
					  <option value="1"> Vendor 1</option>
                      <option value="2">Vendor 2 </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Payment Mode</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Cash</option>
                      <option value="2">Check </option>
                      <option value="3"> Online Transfer</option>
                      <option value="4">Card </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Amount</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Amount" />
                     
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			    <CFormGroup row className="my-0">
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select Ledger</option>
					   <option value="1"> Bank</option>
                      <option value="2">Cash in Bank</option>
                      <option value="3"> Cash In hand</option>
                      
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Remarks</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Remarks.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  
              </CForm>
			
              </CModalBody>
             <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
                 <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Search Vendor</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="8" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Go!</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th>Sl No</th>
				  <th>Payment No</th>
				   <th>Payment Type</th>
				    <th>Payment Date</th>
					 <th>PI No</th>
                    <th>Vendor</th>
                    <th >Paid Amount Now</th>
					 <th >Balance Amount</th>
                   <th >Payment Method</th>
                  
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				   <td>
                    1
                    </td>
					 <td>
                     PAY_004
                    </td>
					 <td>
                     Payment Against Invoice
                    </td>
					 <td>
                     31/05/2021
                    </td>
					 <td>
                    PI_001
                    </td>
                    <td>
                       <CHeaderNavLink to="/vendorsdetails"> Artwork  </CHeaderNavLink>
                     
                    </td>
                    <td>
                    Rs 26,387.00
                    </td>
					 <td>
                     Rs 00.00
                    </td>
					 <td>
                    Cash
                    </td>
                                     
					<td>
					Payment Done
					</td>
					<td>
					 Edit / Delete
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

export default PaytoVendor
