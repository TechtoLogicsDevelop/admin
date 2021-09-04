import React, { useState } from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CButton,
   CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CInputRadio,
   CModalFooter,
   CTextarea,
   CInputFile,
      CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CPagination,
  CRow
} from '@coreui/react'


const Uomlist = () => {
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
        <CCol>
          <CCard>
            <CCardHeader>
            UOM Master
            </CCardHeader>
			
            <CCardBody>
               <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add UOM</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Add Uom</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New UOM
             
            </CCardHeader>
            <CCardBody >
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                 
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder=" UOM Name" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                
                  <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" UOM Description..." 
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
                   <th>UOM Code</th>
                    <th>UOM Name</th>
                    
                    <th className="text-center">Descriptions</th>
                   
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Uom-1</div>
                     
                    </td>
                    <td>
                      <div>Kg</div>
                     
                    </td>
                    <td className="text-center">
                     Kilo Gram
                    </td>
                    <td className="text-center">
                      26-04-2021
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
                      <div>Uom-2</div>
                     
                     </td>
                    <td>
                      <div>Gram</div>
                     
                    </td>
                    <td className="text-center">
                     Gram
                    </td>
                    <td className="text-center">
                      26-04-2021
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

export default Uomlist
