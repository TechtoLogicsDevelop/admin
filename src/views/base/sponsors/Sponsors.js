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
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Sponsors = () => {
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
           Sponsors Master
            </CCardHeader>
			
		   
            <CCardBody>
			<div className="text-right">
			 <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1">+ Add Sponsors</CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Add Sponsors</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Sponsors Name *</CLabel>
                    <CInput id="company" placeholder="Sponsors Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Sponsors Website *</CLabel>
                    <CInput id="company-website" placeholder="Company Website" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                
			  
			 
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
                    <CLabel htmlFor="fax">Amount Donate</CLabel>
                    <CInput id="fax" placeholder="Donate Amount" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Collected Amount</CLabel>
                    <CInput id="gst" placeholder="Collected" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				
				  <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-tag">Meta Tag</CLabel>
                    <CInput id="meta-tag" placeholder="Meta Tag" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="keyword">Meta Keyword</CLabel>
                    <CInput id="keyword" placeholder="Meta Keyword" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-data">Meta Data</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Meta Data..." 
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-description">Meta Description</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Meta Description..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="logo">Upload Logo</CLabel>
                     <CInputFile id="logo" name="logo"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
              
            
				Sponsors Address
            </CCardHeader>
			 <CFormGroup>
			  
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
              </CModalBody>
             <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
               <CCardHeader>
            
			 <div className="text-right">
          <CHeaderNavLink to="/sponsorsproposal">Sponsors Proposal Senders List</CHeaderNavLink> | <CHeaderNavLink to="/sponsorsreglist">Sponsors Registers List</CHeaderNavLink> 
        </div>
		
            </CCardHeader>
                    
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Sponsors Name </th>
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					  <th className="text-center">For Event</th>
					  <th className="text-center">Amount Donate</th>
					   <th className="text-center">Collected</th>
				
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
                   Artwork-Art
                     
                    </td>
					
					
					<td className="text-center">
                   info@artwork.com
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					 <td className="text-center">
                  Artwork-Event
                    </td>
					 <td className="text-center">
                   500000
                    </td>
					 <td className="text-center">
                    300000
                    </td>
					
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
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

export default Sponsors
