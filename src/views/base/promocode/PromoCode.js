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


const PromoCode = () => {
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
          Promo Code
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
                <CModalTitle>Create PromoCode</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Promotion Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Promotion Type 1</option>
                      <option value="1">Promotion Type 2 </option>
                      <option value="2">Promotion Type 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>               
			   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Promo Code</CLabel>
                    <CInput id="first" placeholder="Promo Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">Amount Type</CLabel>
                   <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Amount </option>
                      <option value="2">Percentage</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="discount">Discount Amount</CLabel>
                    <CInput id="discount" placeholder="Discount Amount" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="use">Maximum Use</CLabel>
                    <CInput id="use" placeholder="use" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			   <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available From</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available To</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Minimum Order Value</CLabel>
                    <CInput id="company" placeholder="Minimum Order Value" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Customer Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">All </option>
                      <option value="1">New Customer </option>
                      <option value="2">Exist Customer</option>
                     
                    </CSelect>
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
             <CCardHeader>
			
			 <CFormGroup row>
                 <CFormGroup row>
				
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> From Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 
                   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> Available From</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available To </CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery To Date" />
                  </CFormGroup>
                </CCol>
                </CFormGroup>				   
                </CFormGroup>
				<CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton>
				 
                 </CCardHeader>	

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
				   <th className="text-center">Promotion Type </th> 
                    <th className="text-center">Promo Code </th> 
                    <th className="text-center">Amount Type </th>  
					 <th className="text-center">Discount Amount </th>
					
					<th className="text-center">Discount Percentage</th>
					
					 <th className="text-center">Maximum Use</th>
					 <th className="text-center">Available From</th>
					  <th className="text-center">Available To</th>
					 
					    <th className="text-center">Usage Count</th>
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				   <td>Advertising
				  </td>
				  <td>
				  Promo-2021
				  </td>
                     <td>
                    Percentage
                     
                    </td>
                    <td>
                     00.00
                     
                    </td>
					<td>
                   04.00
                     
                    </td>
					
					<td className="text-center">
                   7
                    </td>
					<td className="text-center">
                  27/05/2021
                    </td>
					
					 <td className="text-center">
                   27/05/2021
                    </td>
					 <td className="text-center">
                   0
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

export default PromoCode
