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
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const ProductGroups = () => {
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
          Product Groups
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
                <CModalTitle> Add Product Groups</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New ProductGroups
             
            </CCardHeader>
            <CCardBody >
        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               <CFormGroup row>
                  
                  <CCol xs="12" md="12">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Select the Product Group Image
                    </CLabel>
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Main Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
               
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Sub Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				
				  <CFormGroup row>
                  
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" Enter Product Group" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" Meta Keyword" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Sort Order" />
                   
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
					  <th className="text-center">Image</th>
					  <th >Main </th>
                    <th >Category  </th>
					 <th >Sub Category </th>
					
					<th >Product Groups </th>
				
					  <th className="text-center">Sort Order</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     PG-01
                     
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					<td>
                   ART 2D & 3D
                     
                    </td>
					<td>
                    Art
                     
                    </td>
					<td>
                    Prints
                     
                    </td>
					<td>
                    ARTWORK POSTERS 
                     
                    </td>
					
					<td className="text-center">
                   01
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

export default ProductGroups
