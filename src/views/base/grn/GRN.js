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
  CButton,
  CPagination,
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
   
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const GRN = () => {
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
         Products GRN

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
                <CModalTitle>Generate Grn</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">GRN No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="GRN No" />
                     
                    
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Purchase Order No</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> PO-001</option>
                      <option value="2">PO-002 </option>
                      <option value="3"> PO-003</option>
                      <option value="4">PO-004</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Purchase Invoice No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="PI No" />
                     
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">GRN Date</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">PO Date</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Invoice Date</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
              
				
                
              </CFormGroup>
			     
              </CForm>
			   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Order Items
            </CCardHeader>
			
		   
            <CCardBody>
           
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                  
                    <th>Store Item</th>
					
                    
					 <th >Quantity</th>
					 
					  <th >Unit Price</th>
					  <th >Discount</th>
					 
					 
					
					<th >Tax(%)</th>
					<th >Total</th>
					  <th>Expire date</th>
					  <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				  
                   
                    <td>
                       <CFormGroup row>
                  
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Product </option>
                      <option value="1">Product 1</option>
                      <option value="2">Product 2</option>
                      <option value="3">Product 3</option>
					   <option value="4">Product 4</option>
                      <option value="5">Product 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                    </td>
                    <td>
                     25
                     
                    </td>
					
                   
                    <td>
                    Rs 90.00
                     
                    </td>
					 
					 <td>
                      
                     Rs 00.00
                    </td>
					
                     
					
					<td>
					 00.00
                   	</td>
					<td>
					 Rs 2250.00
                   	</td>
					<td>
					31/05/2021
					</td>
					 <td>
                      <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5"></CLabel>
					  
                    </CFormGroup>
                    </td>
                  </tr>
				  
                </tbody>
				
              </table>
              
            </CCardBody>
			
          </CCard>
        </CCol>
      </CRow>
			 
             
              </CModalBody>
             <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
			<br/>
		
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th>Item Code/SKU</th>
					 <th>Store</th>
					  <th >Product</th>
					  <th >UOM </th>
                    <th >Minimum Qty </th>
					 <th >Available </th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1001
                     
                    </td>
					 <td>
                     JP Nagar
                     
                    </td>
                    <td >
                     Digital Prints
                    </td>
					<td>
                   Pcs
                     
                    </td>
					<td>
                   10
                     
                    </td>
					<td>
                   25
                     
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

export default GRN
