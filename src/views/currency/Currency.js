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

const Currency = () => {
  
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
        <CCol>
          <CCard>
            <CCardHeader>
             Currency Master
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
                <CModalTitle> Currency </CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add Currency
             
            </CCardHeader>
            <CCardBody >
                 <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select">Country Name</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Country Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Currency</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Currency" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select">Code</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="Currency Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Symbol</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Currency Symbol" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select">Select Format</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Currency Format</option>
                      <option value="1">INR 00.00</option>
                      <option value="2">INR? 00.00</option>
                      <option value="3">?00.00</option>
					  
                    </CSelect>
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
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/currencyformat">Currency Format</CHeaderNavLink>
                     </CHeaderNavItem>
					
                </CHeaderNav>
              </CCardHeader>
                  <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>Automatic Convertion
				  <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>Manual Conversion
				  <hr/>
				  
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th>Country Name</th>
                    <th className="text-center">Currency</th>
					<th className="text-center"> Code</th>
                    <th className="text-center">Symbol</th>
                   <th className="text-center">Price</th>
				   <th className="text-center">Format</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>India</div>
                     
                    </td>
					 <td className="text-center">
                    Rupee
                    </td>
                    <td className="text-center">
                      INR
                    </td>
                    <td className="text-center">
                      ?
                    </td>
					<td className="text-center">
                     1
                    </td>
                     <td className="text-center">
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
                      <div>Australia</div>
                     
                    </td>
					 <td className="text-center">
                    Dollar
                    </td>
                    <td className="text-center">
                      AUD
                    </td>
                    <td className="text-center">
                     $
                    </td>
					 <td className="text-center">
                     0.014
                    </td>
                      <td className="text-center">
                     AUD$ 00.0
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

export default Currency
