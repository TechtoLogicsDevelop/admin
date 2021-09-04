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

const ShippingSlots = () => {
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
          Shipping - Slots
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
                <CModalTitle>Add Ship Slot</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Shipping Slots
             
            </CCardHeader>
            <CCardBody >
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
			   <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Slot No</CLabel>
                    <CInput id="first" placeholder=" Slot No" />
                  </CFormGroup>
                </CCol>
				<CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">From Amount</CLabel>
                    <CInput id="first" placeholder=" Rs:00.00 " />
                  </CFormGroup>
                </CCol>
               
				
				<CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">To Amount</CLabel>
                    <CInput id="first" placeholder=" Rs:00.00 " />
                  </CFormGroup>
                </CCol>
				<CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Delivery Charges</CLabel>
                    <CInput id="first" placeholder=" Rs:00.00" />
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
                    <th > Slots </th>
					 <th >From Amount </th>
					
					<th className="text-center">To Amount</th>
					
					 <th className="text-center">Delivery Charges</th>
					 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     S-01
                     
                    </td>
                    <td>
                     Slot 1
                     
                    </td>
					<td>
                      Rs 1.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 300.00
                    </td>
					
					 <td className="text-center">
                   Rs 40.00
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
                     S-02
                     
                    </td>
                    <td>
                     Slot 2
                     
                    </td>
					<td>
                   Rs 301.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 1000.00
                    </td>
					
					 <td className="text-center">
                   Rs 20.00
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
                     S-03
                     
                    </td>
                    <td>
                     Slot 3
                     
                    </td>
					<td>
                   Rs 1001.00
                     
                    </td>
					
					<td className="text-center">
                   Rs 10000.00
                    </td>
					
					 <td className="text-center">
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

export default ShippingSlots
