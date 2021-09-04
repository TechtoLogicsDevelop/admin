import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
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
      CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const PromotionTypes = () => {
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
        <CCol >
          <CCard>
            <CCardHeader>
            Promotion Types
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
                <CModalTitle>Promotion Types</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Add Promotion Types
             
            </CCardHeader>
            <CCardBody >
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                 <CFormGroup row>
                  
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" Promo Type Code" />
                   
                  </CCol>
                </CFormGroup>
                  <CFormGroup row>
                  
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" Promo Type" />
                   
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Descriptions.." 
                    />
                   
                  </CCol>
                </CFormGroup>
				 
              </CForm>
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
                <CCardHeader>
		        
              </CCardHeader>
			  
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Code</th>
                    <th> Type</th>
                    
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      AD
                     
                    </td>
                    <td>
                     Advertising
                     
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
                     DM
                     
                    </td>
                    <td>
                     Direct Marketing
                     
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
                     SP
                     
                    </td>
                    <td>
                     Sales Promotion
                     
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
                    PS
                     
                    </td>
                    <td>
                     Personal Selling
                     
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
                    PR
                     
                    </td>
                    <td>
                    Public Relation
                     
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

export default PromotionTypes
