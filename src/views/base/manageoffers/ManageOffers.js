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
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const ManageOffers = () => {
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
           Manage Offers
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
                <CModalTitle> Manage Offers</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Create Offer
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			      <CFormGroup row className="my-0">
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offers Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Flat</option>
                      <option value="1">Percentage </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offer Name</CLabel>
                    <CInput id="text" placeholder="Offer Name" />
                  </CFormGroup>
                </CCol>
			
                
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  	 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Offer Mode</CLabel>
                    <CInput id="text" placeholder="Offer Mode" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Offer Amount</CLabel>
                    <CInput id="text" placeholder="Amount" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">Start date</CLabel>
                    <CCol xs="12" md="12">
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text">End Date</CLabel>
                    <CCol xs="12" md="12">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
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
                    
                   <th>Id</th>
                    <th className="text-center">Offer Name </th> 
                    <th className="text-center">Mode </th>  
					 <th className="text-center">Offer type </th>
					 <th className="text-center">Amount </th>
					 <th className="text-center"> % </th>
					
					<th className="text-center">Start Date</th>
					
					 <th className="text-center">End Date</th>
					 <th className="text-center">Total Usage</th>
					  <th className="text-center">Status</th>
					 <th className="text-center">Actions</th>
					  
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				  <td>
				  Deepawali Offer 
				  </td>
                     <td>
                    
                     Coupon
                    </td>
                    <td>
                    Flat 
                     
                    </td>
					<td>
                   Rs 200.00
                     
                    </td>
					<td>
                    -
                     
                    </td>
					<td className="text-center">
                   29/05/2021
                     
                    </td>
					
					<td className="text-center">
                   29/06/2021
                    </td>
					<td className="text-center">
                  Rs 2570.00
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

export default ManageOffers
