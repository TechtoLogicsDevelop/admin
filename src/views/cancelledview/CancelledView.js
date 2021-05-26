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

const CancelledView = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Order Status :  Partially Returned
            </CCardHeader>
			 <p className="text-right">
              
			   <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Print Invoice </CButton>&nbsp;&nbsp;
            
            </p>
			
			
			<CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Order</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Order 1</option>
                      <option value="2">Order 2</option>
                      <option value="3">Order 3</option>
					   <option value="4">Order 4</option>
                      <option value="5">Order 5</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 
                
               
              </CForm>
            </CCardBody>
           
			 
          </CCard>
        </CCol>
      </CRow>
      <CRow>
	  
	   <CCol xs="12" md="6">
          <CCard>
		 
            <CCardHeader>
              Customer Details
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
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
            Order Details
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
				  <p><strong>Invoice No: </strong> INV2021-1100</p>
				  <p> <strong>Pick up From Store:</strong> No</p>
				   <p><strong>Order Time: </strong> 2021/05/18 [12:00  PM - 03:00 PM]</p>
				    <p><strong>Delivery Date:</strong>  2021/05/19 [12:00  PM - 03:00 PM]</p>
				    <p><strong>Payment Type:</strong> COD</p>
				   
                   
					
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
					 
					  <th >Discount</th>
					
					<th >Qty</th>
					  <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td >
                      Mother'S Recipe Madras Thokku Pickle 300Gm<br/>
                     <small>Gourmet & World Food</small>
                     
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
                      Rs 90.00
                     
                    </td>
                     
					
					<td>
					 1
                   	</td>
					<td>
					90.00
					</td>
                  </tr>
				   <tr>
                    <td>
                     Grb Cow Ghee Bt 200Ml <br/>

                     <small>Foodgrains,Oil & Masala</small>
                     
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
                      Rs 140.00
                     
                    </td>
                     
					
					<td>
					 1
                   	</td>
					<td>
					140
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
                     Product Discount
                     
                    </td>
                     
					
					<td>
					
                   	</td>
					<td>
					00.00
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
                   <strong> Total Payable</strong>
                     
                    </td>
                     
					
					<td>
					
                   	</td>
					<td>
					00.00
					</td>
                  </tr>
				  
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
     
    </>
  )
}

export default CancelledView
