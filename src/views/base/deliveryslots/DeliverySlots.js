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

const DeliverySlots = () => {
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
          Delivery Slots
		  
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
                <CModalTitle>Add Delivery Slot</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Delivery Slot
             
            </CCardHeader>
            <CCardBody >
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
			   <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="last"> Delivery Slot No</CLabel>
                    <CInput id="first" placeholder=" Slot No" />
                  </CFormGroup>
                </CCol>
				<CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">From Time</CLabel>
                    <CInput id="first" placeholder=" 09:00 AM " />
                  </CFormGroup>
                </CCol>
               
				<CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">To Time</CLabel>
                    <CInput id="first" placeholder=" 12:00 PM " />
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
					 <th >From Time </th>
					
					<th className="text-center">To Time</th>
					 
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
                     Time 1
                     
                    </td>
					<td>
                     09:00 AM
                     
                    </td>
					
					<td className="text-center">
                      12:00 PM
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
                     T-02
                     
                    </td>
                    <td>
                     Time 2
                     
                    </td>
					<td>
                    12:00 PM
                     
                    </td>
					
					<td className="text-center">
                    03:00 PM
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
                     T-03
                     
                    </td>
                    <td>
                     Time 3
                     
                    </td>
					<td>
                    03:00 PM
                     
                    </td>
					
					<td className="text-center">
                   05:00 PM
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

export default DeliverySlots
