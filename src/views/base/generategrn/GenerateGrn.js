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
  CHeaderNavLink,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const GenerateGrn = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              New Generate Grn
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">GRN No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="GRN No" />
                     
                    
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Purchase Order No</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> PO-001</option>
                      <option value="2">PO-002 </option>
                      <option value="3"> PO-003</option>
                      <option value="4">PO-004</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Purchase Invoice No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="PI No" />
                     
                    
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			      <CFormGroup row className="my-0">
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">GRN Date</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">PO Date</CLabel>
                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                     
                    
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Invoice Date</CLabel>
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
                    
                  
                    <th>Store Item</th>
					
                    
					 <th >Quantity</th>
					 
					  <th >Unit Price</th>
					  <th >Discount</th>
					 
					 
					
					<th >Tax(%)</th>
					<th >Total</th>
					  <th>Expire date</th>
					  <th>Select</th>
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
                     25
                     
                    </td>
					
                   
                    <td>
                    Rs 90.00
                     
                    </td>
					 
					 <td>
                      
                     Rs 00.00
                    </td>
					
                     
					
					<td>
					 00.00
                   	</td>
					<td>
					 Rs 2250.00
                   	</td>
					<td>
					31/05/2021
					</td>
					 <td>
                      <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5"></CLabel>
					  
                    </CFormGroup>
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

export default GenerateGrn
