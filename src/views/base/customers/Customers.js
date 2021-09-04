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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const Customers = () => {
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
          Customers
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
                <CModalTitle>  Customers</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add Customer 
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			      <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="full-name">Full Name *</CLabel>
                    <CInput id="full-name" placeholder="Full Name" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
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
                    <CLabel htmlFor="pincode">Pin code</CLabel>
                    <CInput id="pincode" placeholder="PinCode" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="address1 ">Address Line 1 *</CLabel>
                    <CInput id="address1 " placeholder="Add Street Address" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="address2">Address Line 2 (optional)</CLabel>
                    <CInput id="address2" placeholder="Add apt., floor, suite, etc" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Add City" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="region">State, province, or region*</CLabel>
                    <CInput id="region" placeholder="Add state, province or region" />
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
                    <CLabel htmlFor="phone">Phone No *</CLabel>
                    <CInput id="phone" placeholder="Phone No" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
              </CForm>
			  
			 <CFormGroup>
			   <CFormGroup row>
			    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1"></CLabel>
                    </CFormGroup>
                  <CCol md="12">
                    <CLabel>Save address for future use</CLabel>
					
                  </CCol>
                
				 
                </CFormGroup>
                
              </CFormGroup>
             
            
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
                <CModalTitle>Customer Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Customer Name</th>
                    <th className="text-center">Email</th>
                    <th>Phone No</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Rajesh Kumar</div>
                      <div className="small text-muted">
                         Registered: April 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      rajesh84@gmail.com
                    </td>
                    <td>
                     87964525811
                    </td>
                    
                   
                  </tr>
                
                </tbody>
              </table>
			  
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Gender: </CLabel>
                    <p className="form-control-static">Male</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">DoB:</CLabel>
                   <p className="form-control-static">1997-05-05</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">GST: </CLabel>
                    <p className="form-control-static">2AABXYPKxxxxK</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Nature of Business:</CLabel>
                   <p className="form-control-static">Buyer</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			    
			    <hr/>
				 <CLabel htmlFor="company">Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
				 <CLabel htmlFor="company">Office Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
				 <CLabel htmlFor="company">Other Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
             Last Orders
              
            </CCardHeader>
			<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                 
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>God Painting</div>
                      <div className="small text-muted">

                        <span>Color:Grey</span> | Size:Standard
						<br/> | Seller:Artcurate
                      </div>
                    </td>
                    <td className="text-center">
                     Rs 1200.00
                    </td>
                    <td>
                      <div className="clearfix">
                       
                        <div className="float-right">
                          <strong>Delivered on May 11, 2021 </strong>
						   <div className="small text-muted">Your Item as been Delivered</div>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                     
                     <CHeaderNavLink to=""> <strong>RATE & REVIEW PRODUCT</strong> </CHeaderNavLink>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </table>
              </CModalBody>
             
            </CModal>
               <CCardHeader>
            
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					 <th>Group</th>
                    <th > Full Name </th>
					
					
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     C-01
                     
                    </td>
					  <td>
                    Wholesalers
                     
                    </td>
                    <td>
						<CButton color={'secondary'} onClick={() => setLarge(!large)} className="mr-1">
                        Rajesh
                        </CButton>
                   </td>
				
					
					<td className="text-center">
                   rajesh84@gmail.com
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
				   <tr>
                     <td>
                     C-02
                     
                    </td>
					  <td>
                    Wholesalers
                     
                    </td>
                    <td>
                    <CButton color={'secondary'} onClick={() => setLarge(!large)} className="mr-1">
                 Naveen </CButton>
                    </td>
					
					
					<td className="text-center">
                   sbnaveen@gmail.com
                    </td>
					
					 <td className="text-center">
                   9513574560
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

export default Customers
