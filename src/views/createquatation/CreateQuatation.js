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

const CreateQuatation = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Create Sales Quatation
            </CCardHeader>
			 <p className="text-right">
               
			 
             
             
             
			  <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/addvendors">Add Vendor</CHeaderNavLink></span></CButton>
            
            </p>
			<CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Customer</CLabel>
                     
                    <CSelect custom name="select" id="select">
                      <option value="0">Select  </option>
                      <option value="1">Customer 1</option>
                      <option value="2">Customer 2</option>
                      <option value="3">Customer 3</option>
					   <option value="4">Customer 4</option>
                      <option value="5">Customer 5</option>
                    </CSelect>
                  
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Payment Terms</CLabel>
                     
                    <CSelect custom name="select" id="select">
                      <option value="0">Select  </option>
                      <option value="1">15 Days</option>
                      <option value="2">30 Days</option>
                      <option value="3">60 Days</option>
					   <option value="4">Custom</option>
                      <option value="5">PrePaid</option>
                    </CSelect>
                  
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">Quatation Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
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
					  
					 <th >Qty</th>
					 <th >MRP Price</th>
					 <th >Discounts(%)</th>
					<th >Tax(%)</th>
					
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
					 1
                   	</td>
					 <td>
                      Rs 90.00
                     
                    </td>
					 <td>
                      Rs 00.00
                     
                    </td>
                  <td>
                      Rs 00.00
                     
                    </td>
					<td>
					Rs 90.00
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
                  
                    </td>
                    <td>
                     
                    </td>
					
                   
                    <td>
                     <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/selectproducts">Add New Item</CHeaderNavLink></span></CButton>
                     
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

export default CreateQuatation
