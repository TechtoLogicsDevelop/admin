import React, { useState } from 'react'
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
  CPagination,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const AddTaxType = () => {
	const [currentPage, setCurrentPage] = useState(2)
  
  return (
    <>
	 <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Tax Type Master
			 <div className="text-right">
			 <CHeaderNavLink   to="/taxsetting">Back</CHeaderNavLink> 
			 </div>
             
            </CCardHeader>
            
           
          </CCard>
         
        </CCol>
       
      </CRow>
      
     
      <CRow>
        <CCol xs="6" md="6">
          <CCard>
            <CCardHeader>
             Add Tax Type
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Tax Type " />
                   
                  </CCol>
                </CFormGroup>
              
                <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="  Description..." 
                    />
                  </CCol>
                </CFormGroup>
              
              </CForm>
            </CCardBody>
             <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
             
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
        <CCol xs="6" md="6">
          <CCard>
            <CCardHeader>
            Tax Type
             
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Id</th>
                    <th >Tax Type</th>
					
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    01
                     
                    </td>
                    <td>
                    GST
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
                    02
                     
                    </td>
                    <td>
                     Cess
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

export default AddTaxType
