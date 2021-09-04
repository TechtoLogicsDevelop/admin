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
  CHeaderNavLink,
  CPagination,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const StoresTransfer = () => {
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
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Stores to Stores Transfer
             
            </CCardHeader>
			 
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   		
				
				 <CLabel htmlFor="first">Stores to Stores Transfer</CLabel>
				 <hr/>
				<CFormGroup row className="my-0">
				
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Store</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Store</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Bin</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select From Bin</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Store</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Store</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Bin</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select To Bin</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				<CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Transfer </CButton>&nbsp;&nbsp;
              
            </CCardFooter>
			 <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
				   <th>From Store</th>
				    <th>To Store</th>
				    <th> From Bin</th>
					<th> To Bin</th>
					 <th>SKU</th>
                    <th>Product</th>
                    <th >Unit</th>
                   
                   <th >Quantity</th>
                   <th >Date</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                     <CButton onClick={() => setLarge(!large)} className="mr-1">
                      Artcurate
                     </CButton>
                     
                    </td>
                    <td>
                     <CButton onClick={() => setLarge(!large)} className="mr-1">
                      Artwork
                     </CButton>
                     
                    </td>
					 <td>
                    Bin-01
                    </td>
					 <td>
                    Bin-02
                    </td>
					 <td>
                      1001
                    </td>
					 <td>
                     Digital Prints
                     
                    </td>
                    <td>
                     Pcs
                    </td>
					 <td >
                     200
                    </td >
					  <td>
					    14/07/2021
					
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
              </CFormGroup>
               
              </CForm>
            </CCardBody>
			
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default StoresTransfer
