import React from 'react'
import {
  CButton,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const OrderCreate = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Create Order
            </CCardHeader>
			 <p className="text-right">
               
			 
             
             
             
			  <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/addcustomers">Add Customer</CHeaderNavLink></span></CButton>
            
            </p>
			<CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Customer</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Customers </option>
                      <option value="1">Customer 1</option>
                      <option value="2">Customer 2</option>
                      <option value="3">Customer 3</option>
					   <option value="4">Customer 4</option>
                      <option value="5">Customer 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 
                
               
              </CForm>
            </CCardBody>
           
			 
          </CCard>
        </CCol>
      </CRow>
      <CRow>
	  
	   <CCol xs="12" md="4">
          <CCard>
		 
            <CCardHeader>
			 <CHeaderNavLink to="" className="text-right">Edit</CHeaderNavLink> &nbsp;&nbsp;
			<CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Home</CLabel>
                    </CFormGroup>
            
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
				 <p><strong>Name:</strong>  Sharath B</p>
				  <p> <strong>Email:</strong> sharath@gmail.com</p>
				   <p><strong>Phone No:</strong>  9537468240</p>
				  <p> <strong>Address:</strong> 306, janapriya lake view apartment phase 1, vakil marina Street, <br/>
				  Kodichikknahalli, Bommanahalli, Kodichikknahalli, Lake City, Bommanahalli, Bengaluru, <br/>
				  Karnataka 560068, India</p>
				  <p><strong>Flat No/ House No/Apartment No: </strong> 306</p>
				  <p> <strong>Apartment Name:</strong> janapriya lake view apartment phase 1</p>
				   <p><strong>Street Details:</strong>  vakil marina Street</p>
				  
                   
					
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
           
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
			<CHeaderNavLink to="" className="text-right">Edit</CHeaderNavLink> &nbsp;&nbsp;
          <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Work</CLabel>
					  
                    </CFormGroup>
					 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                   <CCol md="12">
				 <p><strong>Name:</strong>  Sharath B</p>
				  <p> <strong>Email:</strong> sharath@gmail.com</p>
				   <p><strong>Phone No:</strong>  9537468240</p>
				  <p> <strong>Address:</strong> 306, janapriya lake view apartment phase 1, vakil marina Street, <br/>
				  Kodichikknahalli, Bommanahalli, Kodichikknahalli, Lake City, Bommanahalli, Bengaluru, <br/>
				  Karnataka 560068, India</p>
				  <p><strong>Flat No/ House No/Apartment No: </strong> 306</p>
				  <p> <strong>Apartment Name:</strong> janapriya lake view apartment phase 1</p>
				   <p><strong>Street Details:</strong>  vakil marina Street</p>
				  
                   
					
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
           
          </CCard>
		  
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
			<CHeaderNavLink to="" className="text-right">Edit</CHeaderNavLink> &nbsp;&nbsp;
          <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Other Address</CLabel>
					  
                    </CFormGroup>
					 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                   <CCol md="12">
				 <p><strong>Name:</strong>  Sharath B</p>
				  <p> <strong>Email:</strong> sharath@gmail.com</p>
				   <p><strong>Phone No:</strong>  9537468240</p>
				  <p> <strong>Address:</strong> 306, janapriya lake view apartment phase 1, vakil marina Street, <br/>
				  Kodichikknahalli, Bommanahalli, Kodichikknahalli, Lake City, Bommanahalli, Bengaluru, <br/>
				  Karnataka 560068, India</p>
				  <p><strong>Flat No/ House No/Apartment No: </strong> 306</p>
				  <p> <strong>Apartment Name:</strong> janapriya lake view apartment phase 1</p>
				   <p><strong>Street Details:</strong>  vakil marina Street</p>
				  
                   
					
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
           
          </CCard>
		  
        </CCol>
		
       
		
		
      </CRow>
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Order Items
            </CCardHeader>
			
		   
            <CCardBody>
           
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                  
                    <th>Name</th>
					
                    
					 <th >Image</th>
					 
					  <th >Unit</th>
					  <th >MRP Price</th>
					 
					 
					
					<th >Qty</th>
					  <th>Total</th>
					   <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				  
                   
                    <td>
                       <CFormGroup row>
                  
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Product </option>
                      <option value="1">Product 1</option>
                      <option value="2">Product 2</option>
                      <option value="3">Product 3</option>
					   <option value="4">Product 4</option>
                      <option value="5">Product 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                    </td>
                    <td>
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                     
                    </td>
					
                   
                    <td>
                     300 Gm
                     
                    </td>
					 
					 <td>
                      Rs 90.00
                     
                    </td>
					
                     
					
					<td>
					 1
                   	</td>
					<td>
					90.00
					</td>
					 <td>
                      <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5"></CLabel>
					  
                    </CFormGroup>
                    </td>
                  </tr>
				   <tr>
				   
                    <td>
                     <CFormGroup row>
                  
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Product </option>
                      <option value="1">Product 1</option>
                      <option value="2">Product 2</option>
                      <option value="3">Product 3</option>
					   <option value="4">Product 4</option>
                      <option value="5">Product 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                    </td>
                    <td>
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                     
                    </td>
					
                   
                    <td>
                     200 ml
                     
                    </td>
					 
					 <td>
                      Rs 140.00
                     
                    </td>
					
                     
					
					<td>
					 1
                   	</td>
					<td>
					140
					</td>
					 <td>
                      <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4"></CLabel>
					  
                    </CFormGroup>
                    </td>
                  </tr>
				   <tr>
                    <td>
                  
                    </td>
                    <td>
                     
                    </td>
					
                   
                    <td>
                     <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="">Add New Item</CHeaderNavLink></span></CButton>
                     
                    </td>
					 
					 <td>
                     
                    </td>
					 <td>
                     MRP Total
                     
                    </td>
                     
					
					<td>
					
                   	</td>
					<td>
					Rs 230.00
					</td>
                  </tr>
				   <tr>
                    <td>
                    
                    </td>
                    <td>
                    
                    </td>
					
                   
                    <td>
                    
                     
                    </td>
					 
					 <td>
                     
                     
                    </td>
					 <td>
                      Shipping Charges
                     
                    </td>
                     
					
					<td>
					
                   	</td>
					<td>
					Rs 00.00
					</td>
                  </tr>
				   
				    <tr>
                    <td>
                   
                    </td>
                    <td>
                     
                    </td>
					
                   
                    <td>
                    
                     
                    </td>
					 
					 <td>
                     
                     
                    </td>
					 <td>
                    <strong> Total Amount</strong>
                     
                    </td>
                     
					
					<td>
					
                   	</td>
					<td>
					Rs 230.00
					</td>
                  </tr>
				   
				  
                </tbody>
				
              </table>
               <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Payment Mode* </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Payment</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Delivery Time*</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Delivery Time</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				
              </CFormGroup>
            </CCardBody>
			 <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
             
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
     
    </>
  )
}

export default OrderCreate
