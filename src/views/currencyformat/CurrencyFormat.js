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
  CRow,
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
  
   CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
  CPagination,
  CFormText,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const CurrencyFormat = () => {
	 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  
   const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Currency Format
			<div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
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
                <CModalTitle> Add New Format </CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Add the New Format
             
            </CCardHeader>
            <CCardBody >
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select the currency Code</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Code</option>
                      <option value="1">INR</option>
                      <option value="2">AUD</option>
                      <option value="3">USD</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Format</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Format" />
                   
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
                   <th>Code</th>
                    <th> Name</th>
                    
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                     INR 00.00
                     
                    </td>
					
                   
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    ? 00.00
                     
                    </td>
					
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				     <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    INR? 00.00
                     
                    </td>
					              
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td>
                    INR
                     
                    </td>
                    <td>
                    INR 00.0
                     
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

export default CurrencyFormat
