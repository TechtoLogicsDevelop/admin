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
  
   CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
  CPagination,
 CButton,
  CFormText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const ProductsKit = () => {
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
         ProductsKit
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
                <CModalTitle> Add Products Kit</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Add the New Products Kit
             
            </CCardHeader>
            <CCardBody >
                 <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" Kit Name" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Description..." 
                    />
                  </CCol>
                </CFormGroup>
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Start Date</CLabel>
                   
					
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                 
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">End Date</CLabel>
                   
					
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                 
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
					
                    <th > Kit Name </th>
					
					
					<th >Descriptions </th>
					<th >Kit Items </th>
					<th >Kit Price </th>
					<th >Product </th>
					
					
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     pk-01
                     
                    </td>
					 <td >
                      Combo Offer
                    </td>
                   
					<td>
                    Combo Offer
                     
                    </td>
					<td>
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th >Items </th>
					
					<th >Price </th>
					
					<th>Status</th>
				
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     item 1
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 2
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 3
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				  
                </tbody>
              </table>
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/editkitprice">Rs 125 </CHeaderNavLink> 
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/addkititems">Adds Items </CHeaderNavLink> 
                     
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
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
               
                <tbody>
                  <tr>
                     <td>
                     pk-02
                     
                    </td>
					 <td >
                      Discount Offers
                    </td>
                   
					<td>
                    Discount Offers
                     
                    </td>
					<td>
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th >Items </th>
					
					<th >Price </th>
					
					<th>Status</th>
				
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     item 1
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 2
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				   
				  
                </tbody>
              </table>
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/editkitprice">Rs 85 </CHeaderNavLink> 
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/addkititems">Adds Items </CHeaderNavLink> 
                     
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

export default ProductsKit
