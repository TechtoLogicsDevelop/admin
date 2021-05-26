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
  CRow,
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const BankTransfer = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Bank Account Transfer Entry
             
            </CCardHeader>
			 
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   	
				<CFormGroup row className="my-0">
				
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Account</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Account No</option>
                      <option value="1">001250001</option>
                      <option value="2">001250011</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Balance</CLabel>
                     <p className="form-control-dynamic"> 10,296,224.43</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Account</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Account No</option>
                      <option value="1">001250001</option>
                      <option value="2">001250011</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Transfer Amount</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Rupees" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Transfer Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				<CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Transfer </CButton>&nbsp;&nbsp;
              
            </CCardFooter>
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
          Bank Transfer History
            </CCardHeader>
			
		   
            <CCardBody>
             

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th >From Account </th> 
                    <th className="text-center">Balance </th>  
					 <th className="text-center">To Account </th>
					
					<th className="text-center">Transfer Amount</th>
					<th className="text-center">Transfer Date</th>
					 <th className="text-center">Reference Id</th>
					 <th className="text-center">Bank Charges</th>
					 
					
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>
				 001250001
				  </td>
                     <td>
                   9,296,174.43
                     
                    </td>
                    <td>
                    001250011
                     
                    </td>
					<td>
                   1,000,000.00
                     
                    </td>
					
					<td className="text-center">
                   25/05/2021
                    </td>
					<td className="text-center">
                   015/2021
                    </td>
					
					 <td className="text-center">
                   50.00
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

export default BankTransfer
