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


const StoreBins = () => {
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
            Store Bins Info
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
                <CModalTitle> Add Store Bins</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add the New Store Bins
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   
			       <CFormGroup row className="my-0">
              
                  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Select Store</CLabel>
                    <CSelect custom name="select" id="select">
                       <option value="0">Select Store</option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
					 
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="bin-no">Bin No</CLabel>
                    <CInput id="bin-no" placeholder="Enter Bin No" />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
			      <CFormGroup row className="my-0">
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="bin-item">Bin Item</CLabel>
                    <CInput id="bin-item" placeholder="Enter Bin Item" />
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="textarea-input">Descriptions</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Descriptions..." 
                    />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="qty">Available Qty</CLabel>
                    <CInput id="qty" placeholder="Available Quantity" />
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
			 <CModal 
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle>Edit  Bin Stock Quantity</CModalTitle>
              </CModalHeader>
              <CModalBody>
                 <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
				     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Store Name</CLabel>
                   <p className="form-control-static">Artcurate</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Bin No</CLabel>
                  <p className="form-control-static">Artc-01</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                  
				     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Bin Item</CLabel>
                   <p className="form-control-static">Artwork Cloths</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                     <CLabel htmlFor="select"> Edit Bin Quantity</CLabel>
                  <CInput id="text-input" name="text-input" placeholder=" Edit  Bin Quantity" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CModalFooter>
                <CButton color="primary" onClick={() => setSmall(!small)}>Save</CButton>{' '}
                <CButton color="secondary" onClick={() => setSmall(!small)}>Cancel</CButton>
              </CModalFooter>
				 
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
					 <th>Bin No</th>
                     <th>Bin Item</th>
                     <th>Bin Descricption</th>
                     <th>Stock Quantity</th>
                     
                   
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
                     Artbin-01
                    </td>
                    <td>
                    Artwork cloths
                    </td>
					 <td >
                    Artwork cloths
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

export default StoreBins
