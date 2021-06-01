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

const AddDebitNote = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add New Debit Note
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
			      <CFormGroup row className="my-0">
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">DebitNote No</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="DebitNote No" />
                     
                    
                  </CFormGroup>
                </CCol>
				  <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Invoice No</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select Invoice</option>
					  <option value="1"> Invoice 1</option>
                      <option value="2">Invoice 2 </option>
                     
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Select Vendor</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0"> Select</option>
					   <option value="1"> Vendor 1</option>
                      <option value="2">Vendor 2 </option>
                      <option value="3"> Vendor 3</option>
                      <option value="4">Vendor 4 </option>
                     
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
                  <th>Sl No</th>
				  <th>Brand</th>
				   <th>SKUCode</th>
				    
                    <th>ProductType</th>
                    <th >UOM</th>
					<th >Available Quantity</th>
					<th >Accepted Quantity</th>
					<th >Return Quantity</th>
					 <th >Cost Per Quantity</th>
                       <th >Total Cost</th>
					    <th >Remarks</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				   <td>
                    1
                    </td>
					 <td>
                     POSTERS BRANDS
                    </td> 
					 <td>
                    9701 10 10
                    </td>
					 <td>
                     Payment Against Invoice
                    </td>
					 <td>
                    Pcs
                    </td>
					 <td>
                     100 
                    </td>
					 <td>
                     95
                    </td>
					 <td>
                     5
                    </td>
					 <td>
                     Rs 100.00
                    </td>
					 <td>
                     Rs 9000.00
                    </td>
					 <td>
                     5 Products Damaged
                    </td>
					
					<td>
					 Edit / Delete
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

export default AddDebitNote
