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
    CPagination,
  CRow
} from '@coreui/react'



const SubModules = () => {
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
        <CCol >
          <CCard>
            <CCardHeader>
            Sub Modules 
			 <div className="text-right">
			 <CHeaderNavLink   to="/modulesmaster">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
                <div className="text-right">
			
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add New</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add Sub Module</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add New Sub Module
           
            </CCardHeader>
            <CCardBody >
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Module</option>
                      <option value="1">Dashboard</option>
                      <option value="2">Visitors List</option>
                      <option value="3">Setting</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Sub-Module" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Priority" />
                   
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
				   	
                    <th>Module Name</th>
					<th>Priority</th>
                   <th  className="text-center">Sub-Module</th>
                    
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                     sub-01
                     
                    </td>
					
                    <td>
                      <div>Dashboard</div>
                     
                    </td>
					<td>
                     1
                     
                    </td>
					<td className="text-center">
                     Dashboard
                    </td>
					
                    <td className="text-center">
                      28-04-2021
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
                      sub-02                     
                     </td>
					  <td>
                      <div>User List</div>
                     
                    </td>
					<td>
                     2
                     
                    </td>
                    <td className="text-center">
                      <div>UserList</div>
                     
                    </td>
                   
					
                    <td className="text-center">
                      28-04-2021
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

export default SubModules
