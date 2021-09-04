import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
	CButton,
  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 CPagination,
 CHeaderNavLink,
  CRow,
  CSwitch,
  
} from '@coreui/react'


const Users = () => {
 
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  
  const [page, setPage] = useState(currentPage)
 const [currentPage, setCurrentPage] = useState(1)
 

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
           Register
            <small className="text-muted">  Users</small>
          </CCardHeader>
		  <CCardHeader>
		   <p className="text-center">
		   <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">All<span
																class="label label-primary ml-10">[0]</span></span></CButton>
			  <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Artist<span
																class="label label-primary ml-10">[0]</span></span></CButton>
              
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Enthusiast<span
																class="label label-primary ml-10">[0]</span></span></CButton>
			  <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Business<span
																class="label label-primary ml-10">[0]</span></span></CButton>
             
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">Institutions<span
																class="label label-primary ml-10">[0]</span></span></CButton>
			   <CButton size="sm" className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2">Others<span
																class="label label-primary ml-10">[0]</span></span></CButton>
              
              <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Students<span
																class="label label-primary ml-10">[0]</span></span></CButton><br/>
              <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><span className="mfs-2">Facebook<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Google<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            
            </p>
          
          </CCardHeader>
          <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">First Name</th>
				   <th className="text-center">Last Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Main </th>
					 <th className="text-center">Primary Role </th>
					
					<th className="text-center">Secondary Role</th>
                     <th className="text-center">Location</th>
					 
					    <th className="text-center"> Tag</th>
					 	<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td className="text-center">
                    <CHeaderNavLink   to="/usersprofile">Rakesh</CHeaderNavLink> 
                    </td>	
					<td className="text-center">
                   SR
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td >
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
                     Bangalore
                     
                    </td>
                   <td className="text-center">
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
	
  )
  
}


export default Users
