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

const LedgerMaster = () => {
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
         Ledger Master
            </CCardHeader>
			
            <CCardBody>
			 <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add Ledger </CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Ledger Master</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Create Ledger
             
            </CCardHeader>
            <CCardBody >
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Ledger Group</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Ledger Group 1</option>
                      <option value="2">Ledger Group 2</option>
                      <option value="3"> Ledger Group 3</option>
                      <option value="4">Ledger Group 4</option>
                     
                    </CSelect>
                  </CFormGroup>
				    </CCol>
				     <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ledger Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Ledger Name" />
                     
                  </CFormGroup>
                </CCol>
             
              </CFormGroup>
                 <CFormGroup row className="my-0">
				
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select DR /CR</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> DR</option>
                      <option value="2">CR</option>
                     
                    </CSelect>
                  </CFormGroup>
				    </CCol>
				     <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Opening Balance</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Opening Balance" />
                     
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
				  <th > DR/ CR</th>
					 <th >Balance </th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     01
                     
                    </td>
					  <td>
                    Investments
                     
                    </td>
                    <td>
                    100-001
                     
                    </td>
					  <td>
                    Cost- Office Equipments
                     
                    </td>
					<td>
                    DR
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
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

export default LedgerMaster
