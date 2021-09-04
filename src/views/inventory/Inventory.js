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
   CFormGroup,
   CLabel,
   CSelect,
   CPagination,
   CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CInput,
   CModalFooter,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Inventory = () => {
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
           Inventory
            </CCardHeader>
			
		   
            <CCardBody>
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
			 <CModal 
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle> Edit Stock Quantity</CModalTitle>
              </CModalHeader>
              <CModalBody>
                 <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                   <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Digital Prints</p>
                  </CCol>
                </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Edit Inventory Quantity</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="  Quantity" />
                   
                  </CCol>
                </CFormGroup>
				 
              </CForm>
			   <CModalFooter>
                <CButton color="primary" onClick={() => setSmall(!small)}>Save</CButton>{' '}
                <CButton color="secondary" onClick={() => setSmall(!small)}>Cancel</CButton>
              </CModalFooter>
              </CModalBody>
              
            </CModal>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Store</CLabel>
                  </CCol>
                  <CCol xs="4" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select Store</option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>SKU</th>
				   <th>Store</th>
				    <th> Store Zone</th>
                    <th>Product</th>
                    <th >Unit</th>
                    <th >Price</th>
                   <th >Quantity</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                     1001
                     
                    </td>
                   
					 <td>
                    <CButton onClick={() => setLarge(!large)} className="mr-1">
                      Artcurate
                     </CButton>
                    </td>
					 <td>
                      JP Nagar  
                    </td>
					 <td>
                     <CHeaderNavLink to="">Digital Prints</CHeaderNavLink> 
                     
                    </td>
                    <td>
                     Pcs
                    </td>
					 <td >
                     Rs 1200
                    </td >
					  <td>
					    <CButton onClick={() => setSmall(!large)} className="mr-1"> 10</CButton>
					
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
           
            </CCardBody>
			       <br/>
				 
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Inventory
