import React from 'react'
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
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const RegMasters = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/regcategory">Registration Category</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/regsubcategory">Reg Sub Category</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/regsubchild">Reg Sub Child</CHeaderNavLink>
        </CHeaderNavItem>
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
               <CButton size="sm" className="btn-vimeo btn-brand mr-1 mb-1"><span className="mfs-2">Craft Communities</span></CButton>
             
              <CButton size="sm" className="btn-github btn-brand mr-1 mb-1"><span className="mfs-2">Creative Communities</span></CButton>
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
                    
                  
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                    <th className="text-center">UserName </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					
					  <th className="text-center">Location</th>
					 
					    <th className="text-center"> Tag</th>
					 	<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                     Artist / Creaters
                     
                    </td>
					<td>
                    Painter
                     
                    </td>
					
					<td className="text-center">
                   Oil Painter
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
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
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

export default RegMasters
