import React from 'react'
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
  CSelect,
  CLabel,
  CButton,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const ManageBlogs = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Manage Blogs
            </CCardHeader>
			
		   
            <CCardBody>
			<CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createblogs">Add New </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
            

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Image </th> 
					<th className="text-center"> Group </th>
                    <th className="text-center">Title </th>  
					 <th className="text-center">Created Date </th>
					
					<th className="text-center">Updated Date</th>
					<th className="text-center">Sort Order</th>
					
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>b01
				  </td>
				  <td>
				  <div className="c-avatar">
                        <img src={'avatars/Blog_pic.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
				  </td>
				   <td>
                    Advertising
                     
                    </td>
                     <td>
                    Products Promotion
                     
                    </td>
                    <td>
                     29/05/2021
                     
                    </td>
					<td>
                    29/05/2021
                     
                    </td>
					<td>
                    01
                     
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

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default ManageBlogs
