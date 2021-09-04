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
   CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Employees = () => {
	
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
             Employees Master
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
                <CModalTitle> New Employee</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Create a new Employee
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first-name"> First Name</CLabel>
                    <CInput id="first-name" placeholder="First Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last-name">Last Name</CLabel>
                    <CInput id="last-name" placeholder="Last Name" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email-input">Email </CLabel>
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                   <CLabel htmlFor="phone-input">Phone Number</CLabel>
                    <CInput type="phone" id="phone-input" name="phone-input" placeholder="Enter Phone" autoComplete="phone"/>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="date-input">Date Of Birth</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Qualification</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Qualification</option>
                      <option value="1">BE</option>
                      <option value="2">MCA</option>
                      <option value="3">BCA</option>
					   <option value="4">MTech</option>
                      <option value="5">Diploma</option>
					  <option value="6">Bcom</option>
                      <option value="7">PUC</option>
                      
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			      <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Gender</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      
                    </CSelect>
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                   <CLabel htmlFor="select">Marital Status</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Single</option>
                      <option value="2">Married</option>
                     
                      
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="9" htmlFor="picture">Profile Picture</CLabel>
                     <CInputFile id="picture" name="picture"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                   <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
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
             <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Set Role for Employees</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Employee Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Yiorgos Avraamu</p>
                  </CCol>
                </CFormGroup>
				
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Employee Group </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Contract</option>
                      <option value="2">Permananet</option>
                      <option value="3">Trainer</option>
					   <option value="4">Part-Time</option>
                      <option value="5">Full-Time</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Role Group</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Software</option>
                      <option value="2">HR</option>
                      <option value="3">Maintainance</option>
					   <option value="4">Security</option>
                      <option value="5">Services</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Role</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Software Developer</option>
                      <option value="2">Software Designer</option>
                      <option value="3">Software Tester</option>
					   <option value="4">System Admin</option>
                      <option value="5">Graphic Designer</option>
                      <option value="6">Front-End Developer</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="first" placeholder=" Employee Id" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Of Join</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
               
              </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setLarge(!large)}>Set Role</CButton>{' '}
                <CButton color="secondary" onClick={() => setLarge(!large)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

               <CCardHeader>
		  
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Employee</th>
                    <th>Employee Group</th>
                    <th>Email</th>
                    <th className="text-center">Phone No</th>
                   
					<th>Status</th>
					<th>Role Set</th>
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
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>Art-001</span> | Super Admin
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                      yiorgos@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632587410
                    </td>
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					<CButton onClick={() => setLarge(!large)} className="mr-1">
              Roles Set
            </CButton>
					 
                   	</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                         <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Art-002</span> | HR Resource
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                      avram@gmail.com
                    </td>
                    <td className="text-center">
                      +91-9632585870
                    </td>
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
						<CButton onClick={() => setLarge(!large)} className="mr-1">
              Roles Set
            </CButton>
                   	</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
                 
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                       <div className="small text-muted">
                        <span>Art-003</span> | System Admin
						<br/> Joined: Jan 1, 2021
                      </div>
                    </td>
					 <td className="text-center">
                     Full-Time
                    </td>
                    <td className="text-center">
                     Quintin@gmail.com
                    </td>
                    <td className="text-center">
                     +91-8536478924
                    </td>
                   
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 	<CButton onClick={() => setLarge(!large)} className="mr-1">
              Roles Set
            </CButton>
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

export default Employees
