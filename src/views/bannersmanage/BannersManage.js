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
import CIcon from '@coreui/icons-react'

const BannersManage = () => {
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
            Banners Manage
			<div   className="text-right">
          <CHeaderNavLink to="/bannersgroup">Banners Group </CHeaderNavLink> 
        </div>
            </CCardHeader>
			
            <CCardBody>
			<div className="text-right">
               <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1">+ Add Banner</CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Create Promotion</CModalTitle>
              </CModalHeader>
              <CModalBody>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="banner">Upload Banner Image</CLabel>
                     <CInputFile id="banner" name="banner"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			  
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Group</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Group1</option>
                      <option value="2">Group2</option>
                      <option value="3">Group3</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Zone</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Top Zone</option>
                      <option value="2">Side bar</option>
                      <option value="3">Footer Zone</option>
					   <option value="4">Offers Zone</option>
					    <option value="4">Discounts Zone</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner to Display</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">First Banner</option>
                      <option value="2">Second</option>
                      <option value="3">Third</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Group</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Top Zone</option>
                      <option value="2">Side bar</option>
                      <option value="3">Footer Zone</option>
					   <option value="4">Offers Zone</option>
					    <option value="4">Discounts Zone</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  
			 
			    <CFormGroup row className="my-0">
               
                  <CFormGroup >
                    <CCol md="3">
                    <CLabel>Height</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Auto</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Specify</CLabel><CInput id="height" placeholder="Specify" />
                    </CFormGroup>
                    
                  </CCol>
                  </CFormGroup>
                
				
               <CFormGroup >
                  <CCol md="3">
                    <CLabel>Width</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Auto</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">100%</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Specify</CLabel><CInput id="width" placeholder="Specify" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CFormGroup>
			   <CFormGroup row className="my-0">
			   <CCol md="3">
                    <CLabel>Show the banners only between these days</CLabel>
                  </CCol>
			  
			   <br/>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
			
				
              </CFormGroup> 
			   <hr/>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Show the banners Only On</CLabel>
                  </CCol>
                  <CCol md="12">
				   <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Mon</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Tue</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Wed</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Thu</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Fri</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Sat</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Sun</CLabel>
                    </CFormGroup>
					
                   
                  </CCol>
                </CFormGroup>
			     <CFormGroup row className="my-0">
			   
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Maximum Impression</CLabel>
                    <CInput id="first" placeholder=" Numbers" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">CTR %</CLabel>
                    <CInput id="first" placeholder=" 0.00% " />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup> 
              </CForm>
              </CModalBody>
             <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
              
               <CCardHeader>
		   
               
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Short Code</th>
                    <th className="text-center">Performance</th>
                   
					<th>Banner Group</th>
					<th>Date</th>
					<th>status </th>
					<th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                  
                      <td>
                     <CHeaderNavLink to=""> This is the test Banner </CHeaderNavLink>
                    </td>
                  
					 <td className="text-center">
                     [Banner Id="1058"]
                    </td>
                    <td className="text-center">
                     
                       <div className="small text-muted">
                        <span>Impression: 105</span>  
						<br/> Clicks: 0
						<br/>CTR:0.00%
                      </div>
                    </td>
                    <td className="text-center">
                     Test Group
                    </td>
                     
					<td>
					 <div className="small text-muted">
                        <span>Published: </span>  
						<br/> 24/05/2021
						
                      </div>	
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

export default BannersManage
