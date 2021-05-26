import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
	CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CSwitch,
  CPagination
} from '@coreui/react'

import usersData from './UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

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
               <CButton size="sm" className="btn-vimeo btn-brand mr-1 mb-1"><span className="mfs-2">Craft Communities<span
																class="label label-primary ml-10">[0]</span></span></CButton>
             
              <CButton size="sm" className="btn-github btn-brand mr-1 mb-1"><span className="mfs-2">Creative Communities<span
																class="label label-primary ml-10">[0]</span></span></CButton>
              <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Students<span
																class="label label-primary ml-10">[0]</span></span></CButton>
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
                    
                   <th className="text-center">Username </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                     <th className="text-center">Location</th>
					 
					    <th className="text-center"> Tag</th>
					 	<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                     Artist / Creaters
                     
                    </td>
					<td>
                    Painter
                     
                    </td>
					
					<td className="text-center">
                   Oil Painter
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
	
  )
  
}


export default Users
