import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CPagination,
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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const Roles = () => {
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
             Roles Master
			  <div className="text-right">
			 <CHeaderNavLink   to="/adminusers">Back</CHeaderNavLink> </div>
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
                <CModalTitle> Add Role</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add New Role 
             
            </CCardHeader>
            <CCardBody >
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="9">
                    <CLabel htmlFor="select">Select Role Group</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Role Group</option>
                      <option value="1">Software</option>
                      <option value="2">HR</option>
                      <option value="3">Maintainance</option>
					   <option value="4">Security</option>
                      <option value="5">Services</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="9">
                    <CLabel htmlFor="select">Role Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Role Name" />
                   
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="9">
                    <CLabel htmlFor="select">Role Descriptions</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Role  Description..." 
                    />
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
                   <th>Role Group Id</th>
                    <th>Role Group Name</th>
                     <th>Role  Name</th>
                    <th>Descriptions</th>
                   
                    <th>Created On</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Emp-RG1</div>
                     
                    </td>
                    <td>
                      <div>Software</div>
                     
                    </td>
					 <td>
                      <div>Software Developer</div>
                     
                    </td>
                    <td className="text-center">
                     Software
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-RG2</div>
                     
                     </td>
                    <td>
                      <div>HR</div>
                     
                    </td>
					 <td>
                      <div>Recruitment </div>
                     
                    </td>
                    <td className="text-center">
                     Human Resources
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-RG3</div>
                     
                    </td>
                    <td>
                      <div>Maintance</div>
                     
                    </td>
					 <td>
                      <div>Store Manager</div>
                     
                    </td>
                    <td className="text-center">
                      Maintance
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-RG4</div>
                     
                    </td>
                    <td>
                      <div>Security</div>
                     
                    </td>
					<td>
                      <div>Security Manager</div>
                     
                    </td>
                    <td className="text-center">
                    Security
                    </td>
                    <td className="text-center">
                      24-04-2021
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
                      <div>Emp-RG5</div>
                     
                    </td>
                    <td>
                      <div>Service</div>
                     
                    </td>
					 <td>
                      <div>Driver</div>
                     
                    </td>
                    <td className="text-center">
                     Service
                    </td>
                    <td className="text-center">
                      24-04-2021
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

export default Roles
