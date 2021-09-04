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
 
   CInputCheckbox,
    CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'




const Stores = () => {
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
            Stores
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
                <CModalTitle>  Add Store</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add the New Store
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   
			       <CFormGroup row className="my-0">
              
                  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Country</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Country </option>
                      <option value="1">Indiat</option>
                      <option value="2">Australia</option>
                      <option value="3">England</option>
					 
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">State</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select State </option>
                      <option value="1">Karnataka</option>
                      <option value="2">Andra Pradesh</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
			      <CFormGroup row className="my-0">
              
                  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select City </option>
                       <option value="1">Bangalore</option>
                      <option value="2">Hassan</option>
					 
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> Zone</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Zone </option>
                     <option value="1">T Dasarahalli</option>
                      <option value="2">Yeswanthpur</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="area">Store Area</CLabel>
                    <CInput id="area" placeholder="Enter Area" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="store-name">Store Name</CLabel>
                    <CInput id="store-name" placeholder="Store Name" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Store Website</CLabel>
                    <CInput id="text-input" placeholder="Store Website" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="address">Location Address</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Enter Address..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Pin Code</CLabel>
                    <CInput id="text-input" placeholder="Pin code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="map">Google Map Link</CLabel>
                    <CInput id="text-input" placeholder="Google Map Link" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Store Contact Name</CLabel>
                    <CInput id="text-input" placeholder="Store Contact Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="phone">Phone No</CLabel>
                    <CInput id="text-input" placeholder="Phone No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="text-input">Email</CLabel>
                    <CInput id="email" placeholder="Email" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="store-code">Store Code</CLabel>
                    <CInput id="text-input" placeholder="Store Code" />
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
                <CModalTitle>Store Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Store Name: </CLabel>
                    <p className="form-control-static">Artcurate</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Store Website:</CLabel>
                   <p className="form-control-static">http://artcurate.com</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Google Map Link: </CLabel>
                    <p className="form-control-static">http://artcurate.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Code:</CLabel>
                   <p className="form-control-static">s0094</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Contact Person: </CLabel>
                    <p className="form-control-static">Purav Rai</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Phone No:</CLabel>
                   <p className="form-control-static">+91 954 654 2124</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Email: </CLabel>
                    <p className="form-control-static">puravrai@artcurate.com</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Country:</CLabel>
                   <p className="form-control-static">India</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">State: </CLabel>
                    <p className="form-control-static">Karnataka</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Area: </CLabel>
                    <p className="form-control-static">J P Nagar</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Pincode:</CLabel>
                   <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <hr/>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Sort Order: </CLabel>
                    <p className="form-control-static">094</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Address</CLabel>
                   <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
               
              </CForm>
			  
              
			
              </CModalBody>
             
            </CModal>
                 <CCardHeader>
		        
              </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Store Name</th>
					 <th >Store site</th>
                    <th >Store Zone</th>
					<th >Store Area</th>
                    <th >Code</th>
                   <th >Sort Order</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                     1
                     
                    </td>
                    <td>
					<CButton onClick={() => setLarge(!large)} className="mr-1">
             Artcurate
            </CButton>
                    
                    </td>
                    <td>
                     http://artcurate.com/
                    </td>
					 <td>
                     JP Nagar
                    </td>
					 <td>
                     JP Nagar
                    </td>
					 <td >
                     S-0094
                    </td >
                       <td>
					94
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

export default Stores
