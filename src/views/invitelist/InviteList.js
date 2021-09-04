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
   CPagination,
  CButton,
  CLabel,
  CFormGroup,
  CModal,
  CModalHeader,
  CModalFooter,
  CTextarea,
  CModalTitle,
  CModalBody,
  CForm,
  CSelect,
  CInputFile,
  CInput,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const InviteList = () => {
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
           Invite List
            </CCardHeader>
			
		   
            <CCardBody>
			<div className="text-right">
			 <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1"> Send Invite</CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Send Invite</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
				   <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select">Select Event</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Event</option>  
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Invite Name *</CLabel>
                    <CInput id="company" placeholder="Mr/Mrs: Invite Name" />
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
                
			  <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Event Date</th>
                    <th>Time</th>
                    <th className="text-center">Location</th>
                    
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                     2021-05-25
                    </td>
                    <td>
                     10:30 AM
                    </td>
                    <td className="text-center">
                      1234 Some Street
                        Some City, Some State, Some Zip
                      Some Country, Some World
                    </td>
                 </tr>
                  
                </tbody>
              </table>
			 <br/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email *</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Telephone No *</CLabel>
                    <CInput id="gst" placeholder="Telephone No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			  
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                   <CFormGroup>
                    <CLabel htmlFor="first">Sent Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Reply Date Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
				 <hr/>
                
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel><strong>Will you come?</strong></CLabel>
                  </CCol>
                  <CCol md="12">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Yes</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                      <CLabel >No</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="warning"
                      defaultChecked
                      variant="opposite"
                    />
                      <CLabel>Maybe</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
				
              </CForm>
			   <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 <CButton color="info" onClick={() => setSuccess(!success)}>Save & Continue</CButton>
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
			  </CModalBody>
            </CModal>
               <CCardHeader>
           
            </CCardHeader>
                    
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Invite  Name </th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					
					 <th className="text-center">ForEvent</th>
					<th className="text-center">Sent Date</th>
					
					
					  <th className="text-center">RVSP Date?</th>
					  <th className="text-center">Attend?</th>
					   
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     IS-01
                     
                    </td>
                  
					
					
					<td className="text-center">
                   DR. Prajwal
                    </td>
					 <td className="text-center">
                   prajwal@gmail.com
                    </td>
					 <td className="text-center">
                   9513574628
                    </td>
					 <td className="text-center">
                    Artwork
                    </td>
					<td className="text-center">
                    2021-05-17
                    </td>
					
					
					 <td className="text-center">
                    2021-05-18
                    </td>
					 <td className="text-center">
                    MayBe
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

export default InviteList
