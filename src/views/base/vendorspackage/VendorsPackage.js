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
   CInputRadio,
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
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const VendorsPackage = () => {
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
         Manage Vendors Package
            </CCardHeader>
			
            <CCardBody>
			 <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add Package</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add Packages</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add Vendors Package
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CLabel col md={3}>Package Seal</CLabel>
                  <CCol xs="9" md="9">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Title</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Title" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Price</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Price" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Days</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Days" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Maximum Products</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Maximum Products" />
                   
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
                    
                    <th>No</th>
					<th className="text-center">Seal</th> 
                    <th >Title</th>
					
					<th >Price </th>
					
					<th>For</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/starter.png'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Free(Default)
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					
						<td>
					Lifetime
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     2
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/basic.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                   Basic
                     
                    </td>
					<td>
                    Rs 10000.00
                     
                    </td>
					
						<td>
					3 Months
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                     <td>
                     3
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/optimal.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Optimal
                     
                    </td>
					<td>
                    Rs 15000.00                     
                    </td>
					
						<td>
					6 Months
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                     <td>
                     4
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/business.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Business
                     
                    </td>
					<td>
                    Rs 25000.00
                     
                    </td>
					
						<td>
					1 Years
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     5
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/premium.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Premium
                     
                    </td>
					<td>
                    Rs 35000.00
                     
                    </td>
					
						<td>
					2 Years
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

export default VendorsPackage
