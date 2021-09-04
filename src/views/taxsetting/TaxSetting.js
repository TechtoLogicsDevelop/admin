import React, { useState } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
  CCard,
  CCardBody,
  CModal,
  CCardHeader,
  CCol,
   CPagination,
  CRow,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CModalFooter,
   CSwitch,
   CSelect,
   CTextarea
  
} from '@coreui/react'

const TaxSetting = () => {
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
            Tax Master
            </CCardHeader>
			
            <CCardBody>
               <div className="text-right">
               <CButton   color="success" onClick={() => setSuccess(!success)} className="mr-1">+ Add New tax</CButton>
			   </div>
			      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle>Add Tax</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Tax
             
            </CCardHeader>
            <CCardBody >
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Tax Type</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Tax Type</option>
                      <option value="1">Fixed</option>
                      <option value="2">Variable</option>
                      <option value="3">Other</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tax Name</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Tax Name" />
                   
                  </CCol>
                </CFormGroup>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"> Descriptions</CLabel>
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Tax %</CLabel>
                  </CCol>
                  <CCol xs="9" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Tax %" />
                   
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
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addtaxtype">Add New Tax Type </CHeaderNavLink>
                     </CHeaderNavItem>
					   <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/taxclasses">Tax Classes </CHeaderNavLink> 
                     </CHeaderNavItem>
					 <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/taxcalculate">Calculation Settings  </CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/pricedisplay">Price Display Setting </CHeaderNavLink>
                     </CHeaderNavItem>
					
                </CHeaderNav>
				
              </CCardHeader>
                 <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                  
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/cartdisplay">Cart Display Setting </CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/invoicedisplay">Orders, Invoices, Credit Memos Display Settings </CHeaderNavLink>
                     </CHeaderNavItem>
					
                </CHeaderNav>
				
              </CCardHeader>
				 
				<hr/> 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>#</th>
				   <th >Type</th>
                    <th>Name</th>
                    
                    <th className="text-center">Descriptions</th>
                   <th >%</th>
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Tax-1</div>
                     
                    </td>
                    <td>
                      <div>Fixed</div>
                     
                    </td>
					 <td>
                      <div>CGST</div>
                     
                    </td>
                    <td className="text-center">
                     Central GST
                    </td>
					<td className="text-center">
                     18%
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
                      <div>Tax-2</div>
                     
                     </td>
					  <td>
                      <div>Variable</div>
                     
                    </td>
                    <td>
                      <div>SGST</div>
                     
                    </td>
                    <td className="text-center">
                     State GST
                    </td>
					<td className="text-center">
                     5%
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

export default TaxSetting
