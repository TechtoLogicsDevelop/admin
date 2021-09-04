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
import CIcon from '@coreui/icons-react'

const Promotion = () => {
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
          Promotion
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
                <CModalTitle>Create Promotion</CModalTitle>
              </CModalHeader>
              <CModalBody>
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel col md="6" htmlFor="picture">Upload Image</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Promote Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Promotion Type 1</option>
                      <option value="1">Promotion Type 2 </option>
                      <option value="2">Promotion Type 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Promote Category</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Invoice Amount Based</option>
                      <option value="2">Product Based</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">FOC Product</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Product </option>
                      <option value="1">Product 1 </option>
                      <option value="2">Product 2 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  <CLabel htmlFor="first"><strong>Invoice Amount:</strong></CLabel>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">From Amount</CLabel>
                    <CInput id="text" placeholder="Amount" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">To Amount</CLabel>
                    <CInput id="text" placeholder="Amount" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="phone">FOC Quantity</CLabel>
                    <CInput id="phone" placeholder="FOC Quantity*" />
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
			<CCardHeader>
            
            </CCardHeader>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Promotion Type</CLabel>
                  </CCol>
                  <CCol xs="4" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">All</option>
                      <option value="2">Invoice Amount Based</option>
					   <option value="3">Product Based</option>
                     
                    </CSelect>
                  </CCol> <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton> 
                </CFormGroup>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Image </th> 
					<th className="text-center">Promotion Type </th>
                    <th className="text-center">FOC Product </th>  
					 <th className="text-center">Promotion Category </th>
					
					<th className="text-center">FOC Quantity</th>
					
					 <th className="text-center">Invoice From Amount</th>
					 <th className="text-center">Invoice To Amount</th>
					  <th className="text-center">Purchasing Product</th>
					 
					    <th className="text-center">Purchasing Product Quantity</th>
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>64
				  </td>
				  <td>
				 No Image
				  </td>
				   <td>
                    Advertising
                     
                    </td>
                     <td>
                    Special Dress
                     
                    </td>
                    <td>
                     Product based
                     
                    </td>
					<td>
                     1
                     
                    </td>
					
					<td className="text-center">
                   00.00
                    </td>
					<td className="text-center">
                  00.00
                    </td>
					
					 <td className="text-center">
                   Special Dress
                    </td>
					 <td className="text-center">
                   1
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

export default Promotion
