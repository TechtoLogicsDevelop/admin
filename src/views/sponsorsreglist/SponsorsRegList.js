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
const SponsorsRegList = () => {
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
          SponsorsReg List
		   <div className="text-right">
			 <CHeaderNavLink   to="base/sponsors">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
			<div className="text-right">
			 <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1">+ Add </CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Sponsors Registration</CModalTitle>
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
                    <CInput id="company-website" placeholder="Sponsors Website" />
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
                    <CLabel htmlFor="phone">Telephone *</CLabel>
                    <CInput id="phone" placeholder="Telephone" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			 
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="fax">Contact Person</CLabel>
                    <CInput id="fax" placeholder="Contact Person" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="gst">Designation</CLabel>
                    <CInput id="gst" placeholder="Designation" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				
			   
			   
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel col md="12" htmlFor="logo">Upload Logo</CLabel>
                     <CInputFile id="logo" name="logo"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
              
            
				 Address
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
           
            </CCardHeader>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					<th className="text-center">Logo</th>
                    <th className="text-center">Sponsors Name </th>
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					  <th className="text-center">Country</th>
					   <th className="text-center">Contact</th>
					   <th className="text-center">Job Title</th>
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     SI-E25
                     
                    </td>
					
					<td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
					</td>
                    <td>
                  Handicrafts
                     
                    </td>
					
					
					<td className="text-center">
                   rajith@gmail.com
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					
					 <td className="text-center">
                   India
                    </td>
					 <td className="text-center">
                    Rajith
                    </td>
					 <td className="text-center">
                    Managing Director
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

export default SponsorsRegList
