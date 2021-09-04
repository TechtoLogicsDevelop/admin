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

const HubsList = () => {
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
         Hub List
		 <div className="text-right">
			 <CHeaderNavLink   to="/base/shippmentsetting">Back</CHeaderNavLink> 
			 </div>
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
                <CModalTitle>Add Hub</CModalTitle>
              </CModalHeader>
              <CModalBody>
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			       <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="hubname">Hub Name</CLabel>
                    <CInput id="hubname" placeholder="Hub Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="hub-website">Hub Website</CLabel>
                    <CInput id="hub-website" placeholder="Website Link" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			         <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="name">Contact Person</CLabel>
                    <CInput id="name" placeholder="Contact Person" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			     <CFormGroup row className="my-0">
               
                <CCol xs="12">
                  <CFormGroup>
                    
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Hub Type</option>
                      <option value="1">Marchent</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="opentime">Hub Open Time</CLabel>
                    <CInput id="opentime" placeholder="00:00:00" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="closetime">Hub Close Time</CLabel>
                    <CInput id="closetime" placeholder="00:00:00" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			       
              </CForm>
			  
			 
			   <CFormGroup row>
                  <CCol md="9">
                    <CLabel>Address</CLabel>
                  </CCol>
                
                </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="address">Location Address</CLabel>
                       <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Address..." 
                    />
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
                 <CFormGroup row className="my-0">
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="City" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="pincode">Pin Code</CLabel>
                    <CInput id="pincode" placeholder="Pin Code" />
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
             
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
                    
                   
                    <th>Sl No</th>
                  
					  <th > Entity Code </th>
					 <th > Name</th>
					<th >Email</th>
					<th >Phone</th>
					
					 <th > Status </th>
					  <th > Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1
                     
                    </td>
                    <td>
                     1001
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/base/hubdetails"> Bangalore </CHeaderNavLink>
                     
                    </td>
					
					<td className="text-center">
                   bang@gmail.com
                    </td>
					
					 <td className="text-center">
                   87964525811
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

export default HubsList
