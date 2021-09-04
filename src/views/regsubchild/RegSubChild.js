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
    CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const RegSubChild = () => {
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
             Reg Sub Child Master
			  <div className="text-right">
			 <CHeaderNavLink   to="/regmasters">Back</CHeaderNavLink> </div>
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
                <CModalTitle> Add Reg Sub Category</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add the New Reg Sub Category
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Category</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Artist / Creaters</option>
                      <option value="1">Business</option>
                      <option value="2">Art Enthusiast</option>
                      <option value="3">Institutions</option>
					   <option value="4">Others</option>
                      <option value="5">Craft Communities</option>
                      <option value="6">Creative Communities</option>
                      <option value="7">Students</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Sub Category</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Painter</option>
                      <option value="1">Designers</option>
                      <option value="2">Digital Artist</option>
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Sub Child</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder=" Sub Child Name" />
                   
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                 <CCol md="3">
                    <CLabel htmlFor="select">Descriptions</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder=" Description..." 
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
                    
                   
                    <th>Id</th>
                    <th className="text-center">Category</th>
					<th className="text-center">Sub Category</th>
					<th className="text-center"> Sub Child</th>
                   
                   
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>1</div>
                     
                    </td>
					 <td className="text-center">
                   Artist / Creaters
                    </td>
					 <td className="text-center">
                  Painter
                    </td>
                    <td className="text-center">
                    Oil Painter
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
                      <div>2</div>
                     
                    </td>
					 <td className="text-center">
                    Artist / Creaters
                    </td>
					 <td className="text-center">
                   Painter
                    </td>
                    <td className="text-center">
                      Sketch Pen Painter
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

export default RegSubChild
