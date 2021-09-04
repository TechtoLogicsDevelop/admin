import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
 
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CPagination,
  CRow,
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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const ShippingStaff = () => {
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
             Shipping Staff
            </CCardHeader>
			
            <CCardBody>
			 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Customer Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Registration No</CLabel>
                    <CInput id="first" placeholder="Registration No" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Vechicle No</CLabel>
                    <CInput id="last" placeholder="Vechicle No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">RC No</CLabel>
                    <CInput id="first" placeholder="RC No" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">License No</CLabel>
                    <CInput id="last" placeholder="License No" />
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
			<br/>
             <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
					
                    <th>Name</th>
                    
                    <th>Email</th>
                    <th className="text-center">Phone No</th>
                    
					 <th>DOB</th>
					  <th>Gender</th>
					  <th>Role</th>
					   <th>Last Loged In</th>
					  <th>App Version</th>
					  <th>Online Status</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					
                    <td>
                      Pramod Kumar
                      <div className="small text-muted">
                        <span> AGNT001</span> | Agent
						
                      </div>
                    </td>
					 <td className="text-center">
                     promodsk@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632587410
                    </td>
                    <td className="text-center">  
                      15/12/1988
                    </td>
                     <td className="text-center">
                      Male
                    </td>
					 <td className="text-center">
                      Agent
                    </td>
					 <td className="text-center">
                      <strong>10 sec ago</strong>
                    </td>
					<td>
					 v-1.0
					</td>
					<td>
					 <CSwitch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
                   	</td>
					<td>
					 <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
                   	</td>
					<td>
					<CButton onClick={() => setLarge(!large)} className="mr-1">
                        Add Vechicle
                        </CButton>
					 
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

export default ShippingStaff