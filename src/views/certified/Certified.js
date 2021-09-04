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
  CPagination,
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
   
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Certified = () => {
		 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Certification Provided
			
            </CCardHeader>
			
		   
            <CCardBody>
               <div className="text-right">
			
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add New</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> Certifications Types</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
           
            <CCardBody >
               <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
				 <CFormGroup row>
                
                  <CCol xs="12" md="12">
                    <CInput id="text-input" name="text-input" placeholder="Type" />
                   
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
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                
				    <th className="text-center">Provided</th>
					 <th className="text-center">Status</th>
					   <th className="text-center">Action</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   <td className="text-center">
                 Underdraduate
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
				   </td>
					
                  </tr>
				    <tr>
                   <td className="text-center">
                 Postgraduate
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
				   </td>
					
                  </tr>
				    <tr>
                   <td className="text-center">
                 Diploma
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
				   </td>
					
                  </tr>
				    <tr>
                   <td className="text-center">
                 Certification
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
				   </td>
					
                  </tr>
				      <tr>
                   <td className="text-center">
                Graduate
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
				   </td>
					
                  </tr>
				      <tr>
                   <td className="text-center">
                 Phd
                    </td>
					 <td className="text-center">
                  
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                   <td className="text-center">
				   Edit/Delete
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

export default Certified
