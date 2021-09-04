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
   CPagination,
  CRow
} from '@coreui/react'

const ManageStudents = () => {
	const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Manage Students
            </CCardHeader>
		
            <CCardBody>
               
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sl No</th>
                   
                    <th className="text-center">First Name</th>
                   <th  className="text-center">Last Name</th>
                  
				     <th className="text-center">Email</th>
                   <th  className="text-center">Mobile </th>
				     <th  className="text-center">Gender </th>
                  
				     <th className="text-center">Date Of Birth</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                     <td >
               
                    </td>  <td >
               
                    </td>  <td >
               
                    </td>
                 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
					</td>
					 <td >
               
                    </td>
                    <td >
             
                    </td>
                
					<td>
					 
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

export default ManageStudents
