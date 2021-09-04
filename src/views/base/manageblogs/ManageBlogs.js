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

const ManageBlogs = () => {
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
          Manage Blogs
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
                    <CLabel col md="6" htmlFor="picture">Blog Upload Image</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Blog Group</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Group 1</option>
                      <option value="1">Group 2 </option>
                      <option value="2">Group 3</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Blog Title</CLabel>
                    <CInput id="text" placeholder="Blog Title" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Sort Order</CLabel>
                    <CInput id="text" placeholder="Sort Order" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Meta Keyword</CLabel>
                    <CInput id="text" placeholder="Meta Keyword" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Meta Description</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Meta Description.." 
                    />
                  </CCol>
                  </CFormGroup>
                </CCol>
                 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="text">Content</CLabel>
                    <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content.." 
                    />
                  </CCol>
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
            
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Image </th> 
					<th className="text-center"> Group </th>
                    <th className="text-center">Title </th>  
					 <th className="text-center">Created Date </th>
					
					<th className="text-center">Updated Date</th>
					<th className="text-center">Sort Order</th>
					
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>b01
				  </td>
				  <td>
				  <div className="c-avatar">
                        <img src={'avatars/Blog_pic.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
				  </td>
				   <td>
                    Advertising
                     
                    </td>
                     <td>
                    Products Promotion
                     
                    </td>
                    <td>
                     29/05/2021
                     
                    </td>
					<td>
                    29/05/2021
                     
                    </td>
					<td>
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

export default ManageBlogs
