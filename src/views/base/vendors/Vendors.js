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


import CIcon from '@coreui/icons-react'

const Vendors = () => {
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
          Manage Vendors
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
                <CModalTitle>Add Vendors</CModalTitle>
              </CModalHeader>
              <CModalBody>
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			     <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="email1" name="email1" placeholder="Email / Phone No" autoComplete="username"/>
                  </CInputGroup>
                </CFormGroup>
				 <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>
				 <CCardHeader>
              You have 3 accounts linked to purvairai@gmail.com
			  <br/>
			   <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" />
                       <p>purvairai</p>
                      </div>
					  <br/>
			   <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" />
                      <p>purvairai</p>
                      </div>
					 <br/>
			   <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" />
                      <p>purvairai</p>
                      </div>
            </CCardHeader>
			     <CFormGroup row className="my-0">
               
                <CCol xs="12">
                  <CFormGroup>
                    
                    <CSelect custom name="select" id="select">
                      <option value="0">Select  Type</option>
                      <option value="1">Artists</option>
                      <option value="2">Individuals</option>
                      <option value="3">Businesses</option>
					   <option value="4">Insitutions</option>
                      <option value="5">Curators</option>
					   <option value="6">Collectors</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                   
                   <CSelect custom name="select" id="select">
                      <option value="0">Choose your Primary role</option>  
					   <option value="1">Painter</option>
                      <option value="2">Designers</option>
                      <option value="4">Digital Artist</option>
                     
                    </CSelect>
                  </CFormGroup>  
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
				  <CSelect custom name="select" id="select" class="form-multi-select form-multi-select-lg mb-3">
                      <option value="0">Add Secondary Roles (Optional)</option>  
					   <option value="1">Painter</option>
                      <option value="2">Designers</option>
                      <option value="4">Digital Artist</option>
                     
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">Complete Address</CLabel>
                    <CInput id="city" placeholder="House no / Flat no / Floor / Building" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="how-to-reach">How to reach (Optional)</CLabel>
                    <CInput id="how-to-reach" placeholder="Landmark" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			         <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                   
                   <CSelect custom name="select" id="select">
                      <option value="0">Tag this Location</option>  
					   <option value="1">Home</option>
                      <option value="2">Studio</option>
                      <option value="3">Gallery</option>
                      <option value="4">Business</option>
                      <option value="5">Other</option>
					  
                    </CSelect>
                  </CFormGroup>  
                </CCol>
               
              </CFormGroup>
              </CForm>
			  
			 <CFormGroup>
			   <CFormGroup row>
                  <CCol md="9">
                    <CLabel>Make this my Primary Location</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1"></CLabel>
                    </CFormGroup>
                   
                  </CCol>
				
		
                </CFormGroup>
                
              </CFormGroup>
             
              </CModalBody>
             <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
			 <CModal 
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setSmall(!small)}>Do Something</CButton>{' '}
                <CButton color="secondary" onClick={() => setSmall(!small)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

               <CCardHeader>
            
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Vendor </th>
					 <th className="text-center">Type </th>
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone No</th>
					 <th className="text-center">Mobile</th>
					  <th className="text-center">Contact</th>
					 
					    <th className="text-center">Product</th>
					  
					
					
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     v-01
                     
                    </td>
                    <td>
					
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                     
                    </td>
					<td>
                    Business
                     
                    </td>
					
					<td className="text-center">
                   info@artwork.com
                    </td>
					 <td className="text-center">
                    789 654 3215
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					 <td className="text-center">
                    Ramesh
                    </td>
					
					
					 <td>
                     <CHeaderNavLink to="/vendorsdetails">Product</CHeaderNavLink>
                     
                    </td>
                   
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					<CButton onClick={() => setSmall(!large)} className="mr-1">
              Add Artist
            </CButton> /Edit / Delete
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

export default Vendors
