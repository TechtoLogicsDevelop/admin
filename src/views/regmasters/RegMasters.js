import React, { useState } from 'react'
import {
  CBadge,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CButton,
   CPagination,
   CForm,
   CSelect,
   CFormGroup,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const RegMasters = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)
 const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
     
     
        <CRow>
		 
		  <CCol xs="12" sm="4" md="3">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/registrationoptions">Registration Options</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>	
		
        <CCol xs="12" sm="4" md="3">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/regcategory">Registration Category</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="4" md="3">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/regsubcategory">Reg Sub Category</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="4" md="3">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/regsubchild">Reg Sub Child</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
       
        
      </CRow>
     <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Register Users
            </CCardHeader>
			
		     <CCardHeader>
			  <p className="text-center">
			  <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Artist<span
																class="label label-primary ml-10">[22]</span></span></CButton>
              
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Enthusiast</span></CButton>
			  <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Business</span></CButton>
             
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">Institutions</span></CButton>
			   <CButton size="sm" className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2">Others</span></CButton>
              
              <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Students</span></CButton>
			 
            </p>
			 <p className="text-center">
		   <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><CIcon size="sm" name="cib-facebook" /><span className="mfs-2">Facebook</span></CButton>
		   <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><CIcon name="cib-google" /><span className="mfs-2">Google</span></CButton>
           </p>
          </CCardHeader>
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                  
					 <th className="text-center">Main </th>
					 <th className="text-center">Primary  </th>
					
					<th className="text-center">Secondary </th>
                    <th className="text-center">UserName </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					
					  <th className="text-center">Location</th>
					 
					    <th className="text-center"> Tag</th>
					 	<th>Status</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td className="text-center">
                     Artist / Creaters
                     
                    </td>
					<td className="text-center">
                    Painter
                     
                    </td>
					
					<td className="text-center">
					<ul>
                  <li> Oil Painter</li>
				  <li> Pencil Painter</li>
				  <li> Sketch Painter</li>
				   </ul>
                    </td>
					 <td className="text-center">
                    Rakesh
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td>
					
					
					 <td>
                     Bangalore
                     
                    </td>
                   <td>
                     Gallery
                     
                    </td>
                     
					<td>
					<CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                  
                  <CCol xs="8" md="8">
                    <CSelect custom name="Status" id="select">
                      <option value="0">Status</option>
                      <option value="1">Pending</option>
                      <option value="2">Active</option>
                      <option value="3">Inactive</option>
					   <option value="4">Block</option>
                      
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
              </CForm>
					
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

export default RegMasters
