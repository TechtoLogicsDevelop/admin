import React from 'react'
import {
  CButton,
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
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const CreateSalesOrder = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Create Sales Order
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			      <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Sales Order No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Sales Order No" />
                     
                    
                  </CFormGroup>
                </CCol>
				
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Customer</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Customer 1</option>
                      <option value="2">Customer 2 </option>
                      <option value="3"> Customer 3</option>
                      <option value="4">Customer 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Sales Order Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
		     <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Delivery Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
				
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Customer PO No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="PO No" />
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Remarks</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content..." 
                    />
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			   <CFormGroup row className="my-0">
			
               <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Hub/ Warehouses</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Hub 1</option>
                      <option value="2">Hub 2 </option>
                      <option value="3"> Hub 3</option>
                      <option value="4">Hub 4 </option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Discound Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Product Based</option>
                      <option value="2">Total Based </option>
                  
                    </CSelect>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
              </CForm>
            </CCardBody>
           
          </CCard>
         
        </CCol>
        <CCol >
          <CCard>
          
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
				  
				   <th>SKUCode</th>
				     <th>Product</th>
                   
                    <th >UOM</th>
					<th >Available Qty</th>
					
					<th > Order Qty</th>
					 <th >Cost</th>
                       <th >Amount</th>
					    <th >Discount</th>
						<th >Dis Amount</th>
					    <th >Sub Total</th>
					  
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				
					
					 <td>
                    9701 10 10
                    </td>
					 <td>
                     POSTERS BRANDS
                    </td> 
					
					 <td>
                    Pcs
                    </td>
					 <td>
                     100 
                    </td>
					 <td>
                     90
                    </td>
					
					 <td>
                     Rs 100.00
                    </td>
					 <td>
                     Rs 9000.00
                    </td>
					 <td>
                     Rs 00.00
                    </td>
					 <td>
                     Rs 00.00
                    </td>
					
					<td>
					 Rs 9000.00
					</td>
                  </tr>
				  
				  
                </tbody>
              </table>
			  <hr/>
			    <CCardHeader>
            Terms And Description
             
            </CCardHeader>
              <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Terms</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder=" Terms..." 
                    />
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Description</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder=" Description..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
          </CCard>
        </CCol>
		
      </CRow>
     <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save & Continue</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
    
     
    
     
    </>
  )
}

export default CreateSalesOrder
