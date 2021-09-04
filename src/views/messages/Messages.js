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


const Messages = () => {
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
            Messages Setting
            </CCardHeader>
			
		   
            <CCardBody>
			 <div className="text-right">
			 <CButton  color="success" onClick={() => setSmall(!large)} className="mr-1">+ Add Message Type </CButton>
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add New</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add Message</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Message
           
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Message Type</option>
                      <option value="1">Email</option>
                      <option value="2">Notification</option>
                      <option value="3">SMS</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Message Heading" />
                   
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
                <CFormGroup row>
                
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Tag" />
                   
                  </CCol>
                </CFormGroup>
				<hr/>
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification To</CLabel>
                  </CCol>
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Customer</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Agent</CLabel>
                    </CFormGroup>
                </CCol>
               <CCol xs="6">
                   <CFormGroup variant="custom-checkbox" inline>
				    <CCol md="3">
                    <CLabel>Notification Type</CLabel>
                  </CCol>
                     
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Google Push</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">SMS</CLabel>
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
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle>Add the New Message Type</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Type Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Type Name" />
                   
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
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">All<span
																class="label label-primary ml-10">[3]</span></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Notifications<span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2">Email<span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">SMS<span
																class="label label-primary ml-10">[1]</span></span></CButton>
            
            
            </p>
          
          </CCardHeader>

               <CCardHeader>
		  
				
              </CCardHeader>
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>#</th>
                    <th>Type</th>
                    <th >Heading</th>
                    <th className="text-center">Descriptions</th>
                   <th  className="text-center">Tag</th>
				   <th  className="text-center">Notification To</th>
				   <th  className="text-center">Notification Type</th>
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>1</div>
                     
                    </td>
                    <td>
                      <div>Notification</div>
                     
                    </td>
					 <td>
                      <div>Event</div>
                     
                    </td>
                    <td className="text-center">
                     Events Information
                    </td>
					<td className="text-center">
                     Events
                    </td>
					<td className="text-center">
                    Agent
                    </td>
					<td className="text-center">
                    SMS
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
                      <div>2</div>
                     
                     </td>
					  <td>
                      <div>Email</div>
                     
                    </td>
                    <td>
                      <div>Register Sucessfull</div>
                     
                    </td>
                    <td className="text-center">
                     Registration Sucessfull message for the users
                    </td>
					<td className="text-center">
                     Sucessfull Message
                    </td>
					<td className="text-center">
                    Agent
                    </td>
					<td className="text-center">
                    Google Push
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

export default Messages
